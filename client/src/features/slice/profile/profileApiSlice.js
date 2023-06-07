import { apiSlice } from "../apiSlice";
const USERS_URL = "/profile";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    customerProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
    }),
    driverProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/activation`,
        method: "POST",
        body: data,
      }),
    }),
    putProfile: builder.mutation({
      query: (data) => ({
        url: `/profile/`,
        method: "PUT",
        body: data,
        formData: true,
      }),
    }),
  }),
});

export const {
  useCustomerProfileMutation,
  useDriverProfileMutation,
  usePutProfileMutation,
} = profileApiSlice;
