import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggleSlice/toggleSlice";
import driverProfile from "../features/driver/driver";
import authSlice from "../features/Auths";
import customerProfile from "../features/customer/putCustomer";
import getCustomerProfile from "../features/customer/getCustomer";
import addCardSlice from "../features/customer/addCard";

export const store = configureStore({
  reducer: {
    toggleReducer,
    auth: authSlice,
    driverDetails: driverProfile,
    setCustomerProfile: customerProfile,
    getCustomerProfile: getCustomerProfile,
    addCard: addCardSlice,
  },
});
