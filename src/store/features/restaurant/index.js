import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: DEFAULT_STATE,
  reducers: {
    finishLoading: (state, { payload } = {}) => {
      state.entities = payload.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;

        return acc;
      }, {});
      state.ids = payload.map(({ id }) => id);
    },
    addReview: (state, { payload } = {}) => {
      state.entities = {
        ...state.entities,
        [payload.restaurantId]: {
          ...state.entities[payload.restaurantId],
          reviews: [
            ...state.entities[payload.restaurantId].reviews,
            payload.reviewId,
          ],
        },
      };
    }
  }
})
