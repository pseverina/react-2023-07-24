export const RESTAURANT_ACTION = {
  finishLoading: "restaurant/finishLoading",
  addReview: "restaurant/addReview",
};

export const finishLoadingRestaurants = (restaurants) => ({
  type: RESTAURANT_ACTION.finishLoading,
  payload: restaurants,
});

export const addRestaurantReview = ({ restaurantId, reviewId }) => ({
  type: RESTAURANT_ACTION.addReview,
  payload: { restaurantId, reviewId },
});
