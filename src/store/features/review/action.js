export const REVIEW_ACTION = {
  load: "review/load",
  startLoading: "review/startLoading",
  finishLoading: "review/finishLoading",
  failLoading: "review/failLoading",
};

export const loadReviews = () => ({
  type: REVIEW_ACTION.load,
});

export const startLoadingReviews = () => ({
  type: REVIEW_ACTION.startLoading,
});

export const finishLoadingReviews = (REVIEWS) => ({
  type: REVIEW_ACTION.finishLoading,
  payload: REVIEWS,
});

export const failLoadingReviews = () => ({
  type: REVIEW_ACTION.failLoading,
});
