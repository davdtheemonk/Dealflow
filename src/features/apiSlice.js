import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.REACT_APP_BASE_URL}`,
  }),
  tagTypes: ["Freelancer"],
  endpoints: (builder) => ({
    getFreelancers: builder.query({
      query: () =>
        `/api/cb7ca7f0?count=1000&key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});
export const { useGetFreelancersQuery } = apiSlice;
