import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null,
};

const profileAuth = createSlice({
  name: "profileAuth",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      localStorage.setItem("profile", JSON.stringify(action.payload));
    },
    loadProfile: (state, action) => {
      state.profile = JSON.stringify(localStorage.getItem("profile"));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("profile");
    },
  },
});

export const { setProfile, logout } = profileAuth.actions;

export default profileAuth.reducer;
