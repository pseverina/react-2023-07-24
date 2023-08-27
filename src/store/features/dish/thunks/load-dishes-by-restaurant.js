import { selectRestaurantMenuById } from "../../restaurant/selectors";
import {
  failLoadingDishes,
  finishLoadingDishes,
  startLoadingDishes,
} from "../action";
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

    dispatch(startLoadingDishes());

    fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((restaurants) => dispatch(finishLoadingDishes(restaurants)))
      .catch(() => dispatch(failLoadingDishes()));
  };
