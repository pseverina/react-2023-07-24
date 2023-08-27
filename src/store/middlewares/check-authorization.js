import { authorizationSlice } from '../features/authorization/index';
import { selectStartSessionTime } from "../features/authorization/selectors";

const AUTHORIZED_ACTIONS = [];
const SESSION_LIFE_TIME = 10 * 60 * 1000;

export const checkAuthorization =
  (store) =>
  (next) =>
  (action = {}) => {
    if (!AUTHORIZED_ACTIONS.includes(action.type)) {
      return next(action);
    }

    const startSessionTime = selectStartSessionTime(store.getState());

    if (startSessionTime && Date.now() - startSessionTime < SESSION_LIFE_TIME) {
      return next(action);
    }

    store.dispatch(authorizationSlice.actions.logout());
  };
