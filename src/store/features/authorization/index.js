import { AUTHORIZATION_ACTION } from "./action";

const DEFAULT_STATE = {
  currentUser: undefined,
  startSessionTime: undefined,
};

export const authorizationReducer = (
  state = DEFAULT_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case AUTHORIZATION_ACTION.login:
      return {
        currentUser: payload,
        startSessionTime: Date.now(),
      };
    case AUTHORIZATION_ACTION.logout:
      return {
        currentUser: null,
        startSessionTime: null,
      };

    default:
      return state;
  }
};
