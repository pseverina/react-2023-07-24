import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Restaurant", "Review", "Dish", "User"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
      providesTags: (result) =>
        (result || []).map(({ id }) => ({ type: "Restaurant", id })),
    }),  
    getRestaurant: builder.query({
      query: (restaurantId) => ({
        url: `restaurant/${restaurantId}`,
      }),
      providesTags: (result) =>
        (result || []).map(({ id }) => ({ type: "Restaurant", id })),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: {
          restaurantId,
        },
      }),
      providesTags: (result) =>
        (result || [])
          .map(({ id }) => ({ type: "Review", id }))
          .concat({ type: "Review", id: "LIST" }),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: () => [{ type: "Review", id: "LIST" }],
    }),
    updateReview: builder.mutation({
      query: ({ reviewId }) => ({
        url: `review/${reviewId}`,
        method: "PATCH",
      }),
      invalidatesTags: () => [{ type: "Review", id: "LIST" }],
    }),
    getDishes: builder.query({
      query: () => ({
        url: "dishes",
      }),
      providesTags: (result) =>
        (result || []).map(({ id }) => ({ type: "Dish", id })),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
      providesTags: (result) =>
        (result || []).map(({ id }) => ({ type: "User", id })),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useGetDishesQuery,
  useGetUsersQuery,
} = api;
