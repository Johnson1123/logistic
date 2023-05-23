import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggleSlice/toggleSlice";
import driverProfile from "../features/driver/driver";
import authSlice from "../features/Auths";
import customerProfile from "../features/customer/getUser";
import getCustomerProfile from "../features/customer/getUser";
import addCardSlice from "../features/customer/addCard";
import { apiSlice } from "../features/api";
import profileAuth from "../features/customer/getUser";
import { userReducer } from "../features/user/reducer/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    toggleReducer,
    auth: authSlice,
    profile: profileAuth,
    driverDetails: driverProfile,
    setCustomerProfile: customerProfile,
    getCustomerProfile: getCustomerProfile,
    addCard: addCardSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
