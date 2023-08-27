export const USER_ACTION = {
  startLoading: "user/startLoading",
  finishLoading: "user/finishLoading",
  failLoading: "user/failLoading",
};

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
