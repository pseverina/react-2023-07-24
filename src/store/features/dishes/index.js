import { normalizedDishes } from "../../../constants/normalized-fixtures";

const DEFAULT_STATE = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishReducer = (state = DEFAULT_STATE, { type } = {}) => {
  switch (type) {
    default:
      return state;
  }
};
