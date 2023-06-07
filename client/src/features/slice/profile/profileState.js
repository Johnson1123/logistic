import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userProfile")
    ? JSON.parse(localStorage.getItem("userProfile"))
    : null,
};

const profileState = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userProfile", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      localStorage.removeItem("userProfile");
    },
  },
});

export const { setCredentials, logout } = profileState.actions;
export default profileState.reducer;
