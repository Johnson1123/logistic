import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getProfile: localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null,
  first_name: "",
  last_name: "",
  image_url: "",
  gender: "",
  phone: "",
  home_address: "",
};

const getCustomerProfile = createSlice({
  name: "getCustomerProfile",
  initialState,
  reducers: {
    loadProfile(state) {
      const profile = state.getProfile;
      if (profile) {
        return {
          ...state,
          email: profile.data?.email,
          first_name: profile.data?.first_name,
          last_name: profile.data?.last_name,
          image_url: profile.data?.image_url,
          gender: profile.data?.gender,
          phone: profile.data?.phone,
          home_address: profile.data?.home_address,
        };
      }
    },
  },
});

export const { loadProfile } = getCustomerProfile.actions;

export default getCustomerProfile.reducer;
