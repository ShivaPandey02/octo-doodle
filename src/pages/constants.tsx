import { ActionTypes } from "./constants";

export const login = (username, password) => ({
  type: ActionTypes.LOGIN,
  username,
  password,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});
