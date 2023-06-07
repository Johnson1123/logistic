import { apiSlice } from "../apiSlice";
const AUTH_URL = "/auth";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    customerReg: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    driverReg: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/driver/register`,
        method: "POST",
        body: data,
      }),
    }),
    customerLogin: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login?user_type=customer`,
        method: "POST",
        body: data,
      }),
    }),
    driverLogin: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login?user_type=driver`,
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/verify-email-otp`,
        method: "POST",
        body: data,
      }),
    }),
    resendOtp: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/resend-email-otp`,
        method: "POST",
        body: data,
      }),
    }),
    forgetPWD: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),
    newPwd: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        body: data,
      }),
    }),
    // profile: builder.mutation({
    //   query: (data) => ({
    //     url: `${AUTH_URL}`,
    //     method: "GET",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useCustomerRegMutation,
  useDriverRegMutation,
  useCustomerLoginMutation,
  useDriverLoginMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useForgetPWDMutation,
  useNewPwdMutation,
} = userApiSlice;
