import {
  failLoadingUsers,
  finishLoadingUsers,
  startLoadingUsers,
} from "../action";
import { selectUserIds } from "../selectors.js";

export const loadUsersIfNotExist = () => (dispatch, getState) => {
  const state = getState();
  const usersIds = selectUserIds(state);

  if (usersIds?.length) {
    return;
  }

  dispatch(startLoadingUsers());

  fetch(`http://localhost:3001/api/users/`)
    .then((response) => response.json())
    .then((users) => dispatch(finishLoadingUsers(users)))
    .catch(() => dispatch(failLoadingUsers()))
};

