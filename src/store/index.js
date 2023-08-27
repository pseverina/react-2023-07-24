import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { loggerMiddleware } from "./middlewares/logger";
import { dishReducer } from "./features/dish";
import { reviewSlice } from "./features/review";
import { userReducer } from "./features/user";
import { authorizationReducer } from "./features/authorization";
import { checkAuthorization } from "./middlewares/check-authorization";
import { requestSlice } from "./features/request";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    review: reviewSlice.reducer,
    user: userReducer,
    authorization: authorizationReducer,
    request: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
    checkAuthorization,
  ],
});
