import { LOADING_STATUS } from "../../../constants/loading-statuses";
import { createSlice  } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: DEFAULT_STATE,
  reducers: {
    startLoading: (state) => {
      state.status = LOADING_STATUS.loading
    },
    finishLoading: (state, { payload } = {}) => {
      state.entities =  payload.reduce((acc, user) => {
        acc[user.id] = user;

        return acc;
      }, {});
      state.ids = payload.map(({ id }) => id);
      state.status = LOADING_STATUS.finished;
    },
    failLoading: (state) => {
      state.status = LOADING_STATUS.failed;
    },
  }
})
