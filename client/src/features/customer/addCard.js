import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cardStatus: "",
  cardError: "",
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

export const addCard = createAsyncThunk(
  "customer/addCard",
  async (data, { rejectWithValue }) => {
    try {
      const body = JSON.stringify(data);

      const res = await axios.post(
        `https://techvonix.onrender.com/api/v1/wallet/cards`,
        body,
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const addCardSlice = createSlice({
  name: "addCardSlice",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(addCard.pending, (state) => {
  //     return { ...state, cardStatus: "pending", cardError: "" };
  //   });
  //   builder.addCase(addCard.fulfilled, (state) => {
  //     return {
  //       ...state,
  //       cardError: "",
  //       cardStatus: "success",
  //     };
  //   });
  //   builder.addCase(addCard.rejected, (state, action) => {
  //     return {
  //       ...state,
  //       cardStatus: "rejected",
  //       cardError: action.payload,
  //     };
  //   });
  // },
});

export default addCardSlice.reducer;
