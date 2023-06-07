import { apiSlice } from "../apiSlice";
const WALLET_URL = "/wallet";

export const walletApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.mutation({
      query: () => ({
        url: `${WALLET_URL}/cards`,
        method: "GET",
      }),
    }),
    addCards: builder.mutation({
      query: (data) => ({
        url: `${WALLET_URL}/cards`,
        method: "POST",
        body: data,
      }),
    }),
    // getBalance: builder.mutation({
    //   query: (data) => ({
    //     url: `${USERS_URL}`,
    //     method: "POST",
    //     body: data,
    //     formData: true,
    //   }),
    // }),
  }),
});

export const { useGetCardsMutation, useAddCardsMutation } = walletApiSlice;
