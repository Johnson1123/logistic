import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://techvonix.onrender.com/api/v1/",
  prepareHeaders: (headers, { getState, endpoint }) => {
    const { auth } = getState();
    const token = auth?.access;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
  credentials: "include",
});
