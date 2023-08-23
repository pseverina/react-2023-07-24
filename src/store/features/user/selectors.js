import { LOADING_STATUS } from "../../../constants/loading-statuses";

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, id) =>
  selectUserModule(state).entities[id];

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUsersLoadingStatus = (state) =>
  selectUserModule(state).status;

export const selectUsersLoading = (state) =>
  selectUserModule(state) === LOADING_STATUS.loading;

export const selectUsersLoadingFailed = (state) =>
  selectUserModule(state) === LOADING_STATUS.failed;
