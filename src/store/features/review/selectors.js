import { LOADING_STATUS } from "../../../constants/loading-statuses";

export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, id) =>
  selectReviewModule(state).entities[id];

export const selectReviewsIds = (state) => selectReviewModule(state).ids;

export const selectReviewsLoadingStatus = (state) =>
  selectReviewModule(state).status;

export const selectReviewsLoading = (state) =>
  selectReviewModule(state) === LOADING_STATUS.loading;

export const selectReviewsLoadingFailed = (state) =>
  selectReviewModule(state) === LOADING_STATUS.failed;
