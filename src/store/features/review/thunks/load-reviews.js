import {
  failLoadingReviews,
  finishLoadingReviews,
  startLoadingReviews,
} from "../action";
import { selectReviewsIds } from "../selectors.js";
  
export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {
  const state = getState();
  const reviewsIds = selectReviewsIds(state);

  if (reviewsIds?.length) {
    return;
  }

  dispatch(startLoadingReviews());

  fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
    .then((response) => response.json())
    .then((reviews) => dispatch(finishLoadingReviews(reviews)))
    .catch(() => dispatch(failLoadingReviews()))
};
  
  