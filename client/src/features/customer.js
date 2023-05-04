import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  putUserStatus: "",
  putUserError: "",
};

const access =
  localStorage.getItem("token")?.data?.access ||
  localStorage.getItem("authToken");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer hhjjrhioeiieikekkjk`,
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(putUser.pending, (state, action) => {
      return { ...state, putUserStatus: "pending", putUserError: "" };
    });
    builder.addCase(putUser.fulfilled, (state, action) => {
      return {
        ...state,
        putUserError: "",
        putUserStatus: "success",
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

export default customerProfile.reducer;
