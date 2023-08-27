import { failRequest, finishRequest, startRequest } from "../../request/action";
import { restaurantSlice } from '../index';
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
        dispatch(restaurantSlice.actions.finishLoading(restaurants));
        dispatch(finishRequest(requestId));
      })
      .catch(() => dispatch(failRequest(requestId)));
  };
