import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  user_id: "",
  email: localStorage?.getItem("userEmail")
    ? localStorage?.getItem("userEmail")
    : "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  verifyError: "",
  verifyStatus: "",
  forgetError: "",
  forgetStatus: "",
  userLoaded: false,
};
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const registerUser = createAsyncThunk(
  "auth/registerUser",

  async (user, { rejectWithValue }) => {
    try {
      const body = JSON.stringify({
        username: user.username,
        email: user.email,
        phone: user.phone,
        password: user.password,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `https://techvonix.onrender.com/api/v1/auth${
          user.user_type ? `/${user.user_type}` : ""
        }/register`,
        body,
        config
      );
      localStorage.setItem("userEmail", user.email);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue }) => {
    const body = JSON.stringify(loginData);
    try {
      const response = await axios.post(
        `https://techvonix.onrender.com/api/v1/auth/login?user_type=driver`,
        body,
        config
      );
      if (!response.status === 200) {
        throw new Error("something went wrong");
      }
      console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const forgetPwd = createAsyncThunk(
  "auth/forgetPwd",
  async (email, { rejectWithValue }) => {
    const body = JSON.stringify(email);
    console.log(email);
    try {
      const { data } = await axios.post(
        `https://techvonix.onrender.com/api/v1/auth/forgot-password`,
        body,
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const verifyUser = createAsyncThunk(
  "auth/verifyOtp",

  async (otp, { rejectWithValue }) => {
    try {
      const body = JSON.stringify(otp);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "https://techvonix.onrender.com/api/v1/auth/verify-email-otp",
        body,
        config
      );
      localStorage.setItem("token", JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state) {
      const token = state.token;
      if (token) {
        return {
          ...state,
          token,
          email: token?.data?.user?.email,
          user_id: token?.data?.user?.user_id,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: false };
    },
    logoutUser(state) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        user_id: "",
        email: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        verifyError: "",
        verifyStatus: "",
        forgetError: "",
        forgetStatus: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      return {
        ...state,
        registerStatus: "success",
      };
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(verifyUser.pending, (state, action) => {
      return { ...state, verifyStatus: "pending" };
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          token: action.payload,
          verifyStatus: "success",
        };
      } else {
        return state;
      }
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      return {
        ...state,
        verifyStatus: "rejected",
        verifyError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          token: action.payload,
          email: action.payload.data.user.email,
          user_id: action.payload.data.user.user_id,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
    builder.addCase(forgetPwd.pending, (state, action) => {
      return { ...state, forgetStatus: "pending" };
    });
    builder.addCase(forgetPwd.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          forgetError: "success",
        };
      }
    });
    builder.addCase(forgetPwd.rejected, (state, action) => {
      return {
        ...state,
        forgetStatus: "rejected",
        forgetError: action.payload,
      };
    });
  },
});

export const { storeUser, loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
