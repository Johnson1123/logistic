import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pageNumber: 1,
  personalInfo: "",
  license: "",
  driverDocument: "",
  driverPayment: "",
  uploadStatus: "",
  uploadError: "",
  token: "",
  driver: {},
};

export const uploadDriverDetail = createAsyncThunk(
  "uploadDriverDetail/auth",
  async (user, { rejectWithValue }) => {
    const tokenData = JSON.parse(localStorage.getItem("token"));
    try {
      const body = JSON.stringify(user);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData.data.access}`,
        },
      };
      const response = await axios.post(
        "https://techvonix.onrender.com/api/v1/profile/driver/details",
        body,
        config
      );
      localStorage.setItem("driver", JSON.stringify(response?.data));
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
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
    builder.addCase(uploadDriverDetail.pending, (state) => {
      return { ...state, uploadStatus: "pending", uploadError: "" };
    });
    builder.addCase(uploadDriverDetail.fulfilled, (state, action) => {
      if (action.payload) {
        return (state.driver = action.payload);
      } else return state;
    });
    builder.addCase(uploadDriverDetail.rejected, (state, action) => {
      return {
        ...state,
        uploadStatus: "rejected",
        uploadError: action.payload,
      };
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
