import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  putUserStatus: "",
  putUserError: "",
  profile: localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null,
  fname: "",
  lname: "",
  img: "",
  gender: "",
  phone: "",
  address: "",
};

const access =
  localStorage.getItem("authToken") ||
  localStorage.getItem("token")?.data?.access;

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access}`,
  },
};

export const putUser = createAsyncThunk(
  "auth/putUser",
  async (user, { rejectWithValue }) => {
    try {
      const body = JSON.stringify(user);

      const res = await axios.put(
        `https://techvonix.onrender.com/api/v1/profile/`,
        body,
        config
      );

      localStorage.setItem("profile", JSON.stringify(res?.data));
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const customerProfile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loadProfile(state) {
      const profile = state.profile;
      if (profile) {
        return {
          ...state,
          putUserError: "",
          putUserStatus: "success",
          email: profile.data?.email,
          fname: profile.data?.first_name,
          lname: profile.data?.last_name,
          img: profile.data?.image_url,
          gender: profile.data?.gender,
          phone: profile.data?.phone,
          address: profile.data?.home_address,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(putUser.pending, (state, action) => {
      return { ...state, putUserStatus: "pending", putUserError: "" };
    });
    builder.addCase(putUser.fulfilled, (state, action) => {
      return {
        ...state,
        putUserError: "",
        putUserStatus: "success",
        email: action.payload?.data?.email,
        fname: action.payload?.data?.first_name,
        lname: action.payload?.data?.last_name,
        img: action.payload?.data?.image_url,
        gender: action.payload?.data?.gender,
        phone: action.payload?.data?.first_name,
        address: action.payload?.data?.home_address,
      };
    });
    builder.addCase(putUser.rejected, (state, action) => {
      return {
        ...state,
        putUserStatus: "rejected",
        putUserError: action.payload,
      };
    });
  },
});

export const { loadProfile } = customerProfile.actions;

export default customerProfile.reducer;
