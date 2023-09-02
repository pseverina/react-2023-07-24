import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { loadUsersIfNotExist } from "./thunks/load-users";

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      loadUsersIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        userEntityAdapter.setAll(state, payload);
      }
    ),
});
