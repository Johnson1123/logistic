import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: localStorage?.getItem("access")
    ? JSON.parse(localStorage.getItem("access"))
    : "",
  refresh: localStorage?.getItem("refresh")
    ? JSON.parse(localStorage.getItem("refresh"))
    : "",
  user: localStorage?.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "",
  email: localStorage?.getItem("userEmail")
    ? localStorage?.getItem("userEmail")
    : "",
  userInfo: localStorage?.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("access", JSON.stringify(action.payload.access));
      localStorage.setItem("refresh", JSON.stringify(action.payload.refresh));
      if (action.payload) {
        return {
          ...state,
          user: action.payload.user,
          access: action.payload.access,
          refresh: action.payload.refresh,
        };
      }
    },
    logout: (state) => {
      localStorage.removeItem("auth");
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");
      return {
        ...state,
        user: "",
        access: "",
        refresh: "",
      };
    },
    setUserInfo: (state, action) => {
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return {
        ...state,
        userInfo: action.payload,
      };
    },
  },
});

export const { setCredentials, logout, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
