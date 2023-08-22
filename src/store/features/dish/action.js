export const DISH_ACTION = {
  startLoading: "dish/startLoading",
  finishLoading: "dish/finishLoading",
  failLoading: "dish/failLoading",
};

export const startLoadingDishes = () => ({
  type: DISH_ACTION.startLoading,
});

export const finishLoadingDishes = (dishes) => ({
  type: DISH_ACTION.finishLoading,
  payload: dishes,
});

export const failLoadingDishes = () => ({
  type: DISH_ACTION.failLoading,
});
