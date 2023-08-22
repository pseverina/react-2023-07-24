import {
  RESTAURANT_ACTION,
  failLoadingRestaurants,
  finishLoadingRestaurants,
  startLoadingRestaurants,
} from "../action";

export const loadRestaurantsIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== RESTAURANT_ACTION.load) {
    return next(action);
  }
  // condition

  store.dispatch(startLoadingRestaurants());

  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
      store.dispatch(finishLoadingRestaurants(restaurants))
    )
    .catch(() => store.dispatch(failLoadingRestaurants()));
};
