import { apiSlice } from "../api";

const USERS_URL = "https://techvonix.onrender.com/api/v1/";

function getLocalAccessToken() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
}
const access = JSON.parse(getLocalAccessToken());
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer  ${access}`,
  },
};

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({
        url: `${USERS_URL}/profile`,
        method: "GET",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useProfileQuery,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = userApiSlice;
