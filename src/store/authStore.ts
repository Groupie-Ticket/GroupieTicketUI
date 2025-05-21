import { create } from 'zustand';
import { AuthStore, AuthTokens, UserProfile, SignUpData } from '../types/auth';
import { cognitoConfig, cognitoUrls } from '../config/cognito';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  tokens: {
    accessToken: null,
    idToken: null,
    refreshToken: null,
  },
  user: null,
  error: null,
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  ...initialState,

  signIn: async (username: string, password: string) => {
    try {
      set({ isLoading: true, error: null });

      // Generar un estado aleatorio para seguridad
      const state = Math.random().toString(36).substring(7);
      sessionStorage.setItem('cognito_state', state);

      // Construir la URL de autorización
      const authUrl = new URL(cognitoUrls.authorize);
      authUrl.searchParams.append('client_id', cognitoConfig.clientId);
      authUrl.searchParams.append('response_type', 'token');
      authUrl.searchParams.append('scope', cognitoConfig.scope);
      authUrl.searchParams.append('redirect_uri', cognitoConfig.redirectUri);
      authUrl.searchParams.append('state', state);
      // Forzar un nuevo inicio de sesión
      authUrl.searchParams.append('prompt', 'login');

      console.log('URL de autorización:', authUrl.toString());
      
      // Redirigir al usuario a la página de login de Cognito
      window.location.href = authUrl.toString();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error en el inicio de sesión';
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  handleAuthResponse: async (accessToken: string, idToken: string) => {
    try {
      set({ isLoading: true, error: null });

      console.log('Procesando tokens:');
      console.log('Access Token:', accessToken);
      console.log('ID Token:', idToken);

      // Guardar tokens
      set({
        tokens: {
          accessToken,
          idToken,
          refreshToken: null, // El flujo implícito no proporciona refresh token
        },
        isAuthenticated: true, // Establecer isAuthenticated como true cuando tenemos tokens
      });

      // Obtener información del usuario
      const userResponse = await fetch(cognitoUrls.userInfo, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!userResponse.ok) {
        throw new Error('Error al obtener información del usuario');
      }

      const userData = await userResponse.json();
      console.log('Información del usuario:', userData);
      
      // Actualizar el estado con la información del usuario
      set({ 
        user: userData,
        isAuthenticated: true // Asegurarnos de que isAuthenticated siga siendo true
      });

      return userData;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error en la autenticación';
      set({ 
        error: errorMessage,
        isAuthenticated: false // En caso de error, asegurarnos de que isAuthenticated sea false
      });
      throw new Error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    try {
      set({ isLoading: true, error: null });

      const logoutUrl = new URL(cognitoUrls.logout);
      logoutUrl.searchParams.append('client_id', cognitoConfig.clientId);
      logoutUrl.searchParams.append('logout_uri', window.location.origin);
      // Forzar cierre de sesión
      logoutUrl.searchParams.append('response_type', 'token');
      logoutUrl.searchParams.append('scope', cognitoConfig.scope);

      // Reiniciar el estado
      get().resetState();

      // Redirigir al usuario a la página de logout de Cognito
      window.location.href = logoutUrl.toString();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error al cerrar sesión';
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  refreshTokens: async () => {
    try {
      set({ isLoading: true, error: null });

      const { refreshToken } = get().tokens;
      if (!refreshToken) {
        throw new Error('No hay refresh token disponible');
      }

      // Crear el body de la petición
      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('client_id', cognitoConfig.clientId);
      params.append('refresh_token', refreshToken);

      // Hacer la petición de refresh
      const response = await fetch(cognitoUrls.token, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      if (!response.ok) {
        throw new Error('Error al refrescar tokens');
      }

      const data = await response.json();

      // Actualizar tokens
      set({
        tokens: {
          ...get().tokens,
          accessToken: data.access_token,
          idToken: data.id_token,
        },
      });

      // Obtener información del usuario
      const userResponse = await fetch(cognitoUrls.userInfo, {
        headers: {
          'Authorization': `Bearer ${data.access_token}`,
        },
      });

      if (!userResponse.ok) {
        throw new Error('Error al obtener información del usuario');
      }

      const userData = await userResponse.json();
      set({ user: userData });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Error desconocido' });
      // Si hay un error al refrescar, probablemente los tokens expiraron
      get().resetState();
    } finally {
      set({ isLoading: false });
    }
  },

  signUp: async (data: SignUpData) => {
    try {
      set({ isLoading: true, error: null });

      const response = await fetch(`${cognitoConfig.authority}/${cognitoConfig.userPoolId}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: cognitoConfig.clientId,
          username: data.email,
          password: data.password,
          attributes: {
            name: data.name,
            email: data.email,
            phone_number: data.phone_number,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error detallado:', errorData);
        throw new Error(errorData.message || errorData.__type || 'Error en el registro');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error completo:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error en el registro';
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  confirmSignUp: async (email: string, code: string) => {
    try {
      set({ isLoading: true, error: null });

      const response = await fetch(`${cognitoConfig.authority}/${cognitoConfig.userPoolId}/confirm-signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: cognitoConfig.clientId,
          username: email,
          confirmation_code: code,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error detallado:', errorData);
        throw new Error(errorData.message || errorData.__type || 'Error en la confirmación');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error completo:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error en la confirmación';
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  // Métodos de estado
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  setTokens: (tokens: Partial<AuthTokens>) => set({ tokens: { ...get().tokens, ...tokens } }),
  setUser: (user: UserProfile | null) => set({ user }),

  // Método de reinicio
  resetState: () => set(initialState),
}));

export default useAuthStore;
