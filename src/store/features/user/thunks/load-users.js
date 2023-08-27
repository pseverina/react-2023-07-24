import {
  failLoadingUsers,
  finishLoadingUsers,
  startLoadingUsers,
} from "../action";
import { selectUserIds } from "../selectors";

export const loadUsersIfNotExist = () => (dispatch, getState) => {
  if (selectUserIds(getState()).length) {
    return;
  }

  dispatch(startLoadingUsers());

  fetch("http://localhost:3001/api/users/")
    .then((response) => response.json())
    .then((users) => dispatch(finishLoadingUsers(users)))
    .catch(() => dispatch(failLoadingUsers()));
};
