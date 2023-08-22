import {
  failLoadingDishes,
  finishLoadingDishes,
  startLoadingDishes,
} from "../action";

export const loadDishesByRestaurantIfNotExist =
  (restaurantId) => (dispatch, getState) => {
    // if( condition ) {
    //   return ;
    // }

    dispatch(startLoadingDishes());

    fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((restaurants) => dispatch(finishLoadingDishes(restaurants)))
      .catch(() => dispatch(failLoadingDishes()));
  };
