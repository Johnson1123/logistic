import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtInterceptor from "../../Interceptor/jwtInterceptor";

const initialState = {
  pageNumber: 1,
  personalInfo: "",
  license: "",
  driverDocument: "",
  driverPayment: "",
  uploadStatus: "",
  uploadError: "",
  token: "",
};

export const uploadDriverDetail = createAsyncThunk(
  "uploadDriverDetail/auth",
  async (user, { rejectWithValue }) => {
    try {
      const body = JSON.stringify(user);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await jwtInterceptor.post(
        "https://techvonix.onrender.com/api/v1/profile/driver/details",
        body,
        config
      );
      localStorage.setItem("driver", JSON.parse(response.data));
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
const driverProfile = createSlice({
  name: "driverDetails",
  initialState,
  reducers: {
    handlePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    handleLicense: (state, action) => {
      state.license = action.payload;
    },
    handleDocument: (state, acttion) => {
      state.driverDocument = acttion.payload;
    },
    handleDriverPayment: (state, action) => {
      state.driverPayment = action.payload;
    },
    handlePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadDriverDetail.pending, (state, action) => {
      state.uploadStatus = "pending";
    });
    builder.addCase(uploadDriverDetail.fulfilled, (state, action) => {
      state.driverData = action.payload;
      state.uploadStatus = "success";
    });
    builder.addCase(uploadDriverDetail.rejected, (state, action) => {
      state.uploadStatus = "rejected";
      state.uploadError = action.payload;
    });
  },
});

export const {
  handleDocument,
  handleDriverPayment,
  handleLicense,
  handlePersonalInfo,
  handlePageNumber,
} = driverProfile.actions;

export default driverProfile.reducer;
