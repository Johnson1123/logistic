import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggleSlice/toggleSlice";
import driverProfile from "../features/driver/driver";
import authSlice from "../features/Auths";

export const store = configureStore({
  reducer: {
    toggleReducer,
    auth: authSlice,
    driverDetails: driverProfile,
  },
});
