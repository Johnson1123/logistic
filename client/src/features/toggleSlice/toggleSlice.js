import { createSlice } from "@reduxjs/toolkit";
import SignUp from "../../pages/authPages/SignUp/SignUp";

const initialState = {
  menuValue: false,
  closeValue: false,
  dashboardToggle: "Dashboard",
  login: false,
  dashboarMenu: false,
  role: false,
  user: false,
  signUp: true,
  otp: false,
  susscessOtp: false,
};
const toggleSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuValue ? (state.menuValue = false) : (state.menuValue = true);
    },
    closeToggle: (state) => {
      state.menuValue = false;
    },
    closeSearch: (state) => {
      state.menuValue ? (state.closeValue = false) : (state.closeValue = true);
    },
    handleDashboard: (state, action) => {
      state.dashboardToggle = action.payload;
    },
    handleMenuClose: (state) => {
      state.dashboarMenu = false;
    },
    handleMenuOpen: (state) => {
      state.dashboarMenu = true;
    },
    userActive: (state) => {
      state.user = true;
    },
    userInActive: (state) => {
      state.user = false;
    },
    signUp: (state) => {
      state.signUp = true;
    },
    closeSignUp: (state) => {
      state.signUp = false;
    },
    otpToggle: (state) => {
      state.otp = true;
    },
    signUpSuccess: (state) => {
      state.susscessOtp = true;
    },
    closeOtpToggle: (state) => {
      state.otp = false;
    },
    closeSignUpSuccess: (state) => {
      state.susscessOtp = false;
    },
  },
});

export default toggleSlice.reducer;
export const {
  toggleMenu,
  closeToggle,
  signUp,
  closeSignUp,
  userInActive,
  userActive,
  closeSearch,
  handleDashboard,
  handleMenuClose,
  handleMenuOpen,
  signUpSuccess,
  closeSignUpSuccess,
  otpToggle,
  closeOtpToggle,
} = toggleSlice.actions;
