export const CART_ACTION = {
  increment: "cart/increment",
  decrement: "cart/decrement",
};

export const increment = (dishId) => ({
  type: CART_ACTION.increment,
  payload: dishId,
});

export const decrement = (dishId) => ({
  type: CART_ACTION.decrement,
  payload: dishId,
});
