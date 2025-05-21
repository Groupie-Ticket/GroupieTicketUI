export interface AuthTokens {
  accessToken: string | null;
  idToken: string | null;
  refreshToken: string | null;
}

export interface UserProfile {
  sub: string;
  email: string;
  name?: string;
  phone_number?: string;
  [key: string]: any;
}

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  phone_number?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  tokens: AuthTokens;
  user: UserProfile | null;
  error: string | null;
}

export interface AuthStore extends AuthState {
  // Métodos de autenticación
  signIn: (username: string, password: string) => Promise<void>;
  signUp: (data: SignUpData) => Promise<any>;
  confirmSignUp: (email: string, code: string) => Promise<any>;
  signOut: () => Promise<void>;
  refreshTokens: () => Promise<void>;
  handleAuthResponse: (code: string, state: string) => Promise<void>;
  
  // Métodos de estado
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setTokens: (tokens: Partial<AuthTokens>) => void;
  setUser: (user: UserProfile | null) => void;
  
  // Método de reinicio
  resetState: () => void;
} 