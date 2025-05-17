const getEnvVar = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`La variable de entorno ${key} no está definida`);
  }
  return value;
};

export const cognitoConfig = {
  authority: getEnvVar('VITE_COGNITO_AUTHORITY'),
  clientId: getEnvVar('VITE_COGNITO_CLIENT_ID'),
  redirectUri: getEnvVar('VITE_COGNITO_REDIRECT_URI'),
  responseType: getEnvVar('VITE_COGNITO_RESPONSE_TYPE'),
  scope: getEnvVar('VITE_COGNITO_SCOPE'),
} as const;

// URLs de endpoints
export const cognitoUrls = {
  authorize: `${cognitoConfig.authority}/oauth2/authorize`,
  token: `${cognitoConfig.authority}/oauth2/token`,
  userInfo: `${cognitoConfig.authority}/oauth2/userInfo`,
  logout: `${cognitoConfig.authority}/logout`,
} as const; 