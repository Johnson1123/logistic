import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatId: "",
  selectedUser: {},
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,

  reducers: {
    changeUser: (state, action) => {
      state.selectedUser = action.payload.selectedUser;
      state.chatId = action.payload.chatId;
    },
  },
});

// trackUserAuth

export const { changeUser } = chatSlice.actions;

export const chatId = (state) => state.chat.chatId;
export const userSelected = (state) => state.chat.selectedUser;
export default chatSlice.reducer;
