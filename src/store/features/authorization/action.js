export const AUTHORIZATION_ACTION = {
  login: "authorization/login",
  logout: "authorization/logout",
};

export const login = (currentUser) => ({
  type: AUTHORIZATION_ACTION.login,
  payload: currentUser,
});

export const logout = () => ({
  type: AUTHORIZATION_ACTION.logout,
});
