import { failRequest, finishRequest, startRequest } from "../../request/action";
import { finishLoadingRestaurants } from "../action";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantsIfNotExist =
  (requestId) => (dispatch, getState) => {
    if (selectRestaurantIds(getState()).length) {
      return;
    }

    dispatch(startRequest(requestId));

    fetch("http://localhost:3001/api/restaurants/")
      .then((response) => response.json())
      .then((restaurants) => {
        dispatch(finishLoadingRestaurants(restaurants));
        dispatch(finishRequest(requestId));
      })
      .catch(() => dispatch(failRequest(requestId)));
  };
