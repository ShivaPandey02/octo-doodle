export const setUserCredentials = (credentials: Credentials) => ({
    type: 'SET_USER_CREDENTIALS',
    payload: credentials,
  });
  
  export interface Credentials {
    username: string;
    password: string;
  }
  