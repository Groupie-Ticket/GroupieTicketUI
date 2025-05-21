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
  region: getEnvVar('VITE_COGNITO_REGION'),
} as const;

// URLs de endpoints
export const cognitoUrls = {
  authorize: `https://client-groupieticket.auth.${cognitoConfig.region}.amazoncognito.com/oauth2/authorize`,
  token: `https://client-groupieticket.auth.${cognitoConfig.region}.amazoncognito.com/oauth2/token`,
  userInfo: `https://client-groupieticket.auth.${cognitoConfig.region}.amazoncognito.com/oauth2/userInfo`,
  logout: `https://client-groupieticket.auth.${cognitoConfig.region}.amazoncognito.com/logout`,
} as const; 