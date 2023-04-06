import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggleSlice/toggleSlice";
import authSlice from "../features/Auths";

export const store = configureStore({
  reducer: {
    toggleReducer,
    auth: authSlice,
  },
});
