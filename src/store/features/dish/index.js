import { LOADING_STATUS } from "../../../constants/loading-statuses";
import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
  status: LOADING_STATUS.idle,
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState: DEFAULT_STATE,
  reducers: {
    startLoading: (state) => {
      state.status =  LOADING_STATUS.loading;
    },
    finishLoading: (state, { payload } = {}) => {
      state.entities = payload.reduce(
        (acc, dish) => {
          acc[dish.id] = dish;

          return acc;
        },
        { ...state.entities }
      );
      state.ids =  Array.from(
        new Set([...payload.map(({ id }) => id), ...state.ids])
      ),
      state.status =  LOADING_STATUS.finished;
    },
    failLoading: (state) => {
      state.status =  LOADING_STATUS.failed;
    }
  },
})
