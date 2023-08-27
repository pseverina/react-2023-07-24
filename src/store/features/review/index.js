import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createReview } from "./thunks/create-review";
import { loadReviewsByRestaurantIfNotExist } from "./thunks/load-reveiws-by-restaurant";

const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(createReview.fulfilled, (state, { payload } = {}) => {
        reviewEntityAdapter.addOne(state, payload);
      })
      .addCase(
        loadReviewsByRestaurantIfNotExist.fulfilled,
        (state, { payload } = {}) => {
          reviewEntityAdapter.setMany(state, payload);
        }
      ),
});
