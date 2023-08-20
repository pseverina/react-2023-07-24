import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { dishReducer } from "./features/dishes";
import { reviewReducer } from "./features/reviews";
import { userReducer } from "./features/users";
import { loggerMiddleware } from "./midlewares/logger";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);

console.log(store.getState());
