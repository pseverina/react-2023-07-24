import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { dishSlice } from '../index';
import { selectDishIds } from "../selectors";

export const loadDishesByRestaurantIfNotExist =
  (restaurantId) => (dispatch, getState) => {
    const state = getState();
    const restaurantMenu = selectRestaurantMenuById(state, restaurantId);
    const dishIds = selectDishIds(state);

    if (
      !restaurantMenu ||
      restaurantMenu.every((dishId) => dishIds.includes(dishId))
    ) {
      return;
    }

    dispatch(dishSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((restaurants) => dispatch(dishSlice.actions.finishLoading(restaurants)))
      .catch(() => dispatch(dishSlice.actions.failLoading()));
  };
