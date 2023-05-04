import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userFavouriteStatus: "",
  userFavouriteError: "",
};

const access =
  localStorage.getItem("token")?.data?.access ||
  localStorage.getItem("authToken");

const config = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${access}`,
  },
};

export const userFavourite = createAsyncThunk(
  "auth/userFavourite",
  async (user, { rejectWithValue }) => {
    try {
      const body = JSON.stringify(user);

      const res = await axios.get(
        `https://techvonix.onrender.com/api/v1/profile/customer/favourites`,
        body,
        config
      );

      localStorage.setItem("favourite", JSON.stringify(res?.data));
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

const authSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userFavourite.pending, (state, action) => {
      return {
        ...state,
        userFavouriteStatus: "pending",
        userFavouriteError: "",
      };
    });
    builder.addCase(userFavourite.fulfilled, (state, action) => {
      return {
        ...state,
        userFavouriteError: "",
        userFavouriteStatus: "success",
      };
    });
    builder.addCase(userFavourite.rejected, (state, action) => {
      return {
        ...state,
        userFavouriteStatus: "rejected",
        userFavouriteError: action.payload,
      };
    });
  },
});

export default authSlice.reducer;
