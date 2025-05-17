export interface AuthTokens {
  accessToken: string | null;
  idToken: string | null;
  refreshToken: string | null;
}

export interface UserProfile {
  sub?: string;
  email?: string;
  phone_number?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  [key: string]: any;
}

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  phone_number: string;
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
  signUp: (data: SignUpData) => Promise<void>;
  confirmSignUp: (email: string, code: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshTokens: () => Promise<void>;
  
  // Métodos de estado
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setTokens: (tokens: Partial<AuthTokens>) => void;
  setUser: (user: UserProfile | null) => void;
  
  // Método de reinicio
  resetState: () => void;
} 