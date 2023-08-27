import { RESTAURANT_ACTION } from "./action";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
};

export const restaurantReducer = (
  state = DEFAULT_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    case RESTAURANT_ACTION.finishLoading: {
      return {
        entities: payload.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant;

          return acc;
        }, {}),
        ids: payload.map(({ id }) => id),
      };
    }
    case RESTAURANT_ACTION.addReview: {
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.restaurantId]: {
            ...state.entities[payload.restaurantId],
            reviews: [
              ...state.entities[payload.restaurantId].reviews,
              payload.reviewId,
            ],
          },
        },
      };
    }
    default:
      return state;
  }
};
