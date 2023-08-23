export const USER_ACTION = {
  load: "user/load",
  startLoading: "user/startLoading",
  finishLoading: "user/finishLoading",
  failLoading: "user/failLoading",
};

export const loadUsers = () => ({
  type: USER_ACTION.load,
});

export const startLoadingUsers = () => ({
  type: USER_ACTION.startLoading,
});

export const finishLoadingUsers = (users) => ({
  type: USER_ACTION.finishLoading,
  payload: users,
});

export const failLoadingUsers = () => ({
  type: USER_ACTION.failLoading,
});
  