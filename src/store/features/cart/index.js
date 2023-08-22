import { CART_ACTION } from "./action";

const DEFAULT_STATE = {};

export const cartReducer = (state = DEFAULT_STATE, action) => {
  switch (action?.type) {
    case CART_ACTION.increment:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    case CART_ACTION.decrement:
      return {
        ...state,
        [action.payload]:
          (state[action.payload] || 0) > 0 ? state[action.payload] - 1 : 0,
      };

    default:
      return state;
  }
};
