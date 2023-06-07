import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggleSlice/toggleSlice";
import driverProfile from "../features/driver/driver";
import authSlice from "../features/Auths";
import customerProfile from "../features/customer/putCustomer";
import getCustomerProfile from "../features/customer/getUser";
import addCardSlice from "../features/customer/addCard";
import profileAuth from "../features/customer/getUser";
import chatSlice  from "../features/Chat/Chat";
import { apiSlice } from "../features/slice/apiSlice";
import auth from "../features/slice/auth/auth";
export const store = configureStore({
  reducer: {
    toggleReducer,
    profile: profileAuth,
    driverDetails: driverProfile,
    setCustomerProfile: customerProfile,
    getCustomerProfile: getCustomerProfile,
    addCard: addCardSlice,
    chat: chatSlice,
    auth: auth,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});
