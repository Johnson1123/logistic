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
  registerCustomerStatus: "",
  registerCustomerError: "",
  registerDriverStatus: "",
  registerDriverError: "",
  loginCustomerStatus: "",
  loginCustomerError: "",
  loginDriverStatus: "",
  loginDriverError: "",
  role: "",
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
export const registerCustomer = createAsyncThunk(
  "auth/registerCustomer",
  async (user, { rejectWithValue }) => {
    try {
      const body = JSON.stringify(user);

      const res = await axios.post(
        `https://techvonix.onrender.com/api/v1/auth/register`,
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
export const registerDriver = createAsyncThunk(
  "auth/registerDriver",
  async (user, { rejectWithValue }) => {
    try {
      const body = JSON.stringify(user);

      const res = await axios.post(
        `https://techvonix.onrender.com/api/v1/auth/driver/register`,
        body,
        config
      );

      localStorage.setItem("userEmail", user.email);
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

export const loginCustomer = createAsyncThunk(
  "auth/customer",
  async (loginData, { rejectWithValue }) => {
    const body = JSON.stringify(loginData);
    try {
      const response = await axios.post(
        `https://techvonix.onrender.com/api/v1/auth/login?user_type=customer`,
        body,
        config
      );
      if (response.data) {
        localStorage.setItem(
          "token",
          JSON.stringify({ ...response.data, role: "customer" })
        );
        localStorage.removeItem("userEmail");
      }

      return response.data;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginDriver = createAsyncThunk(
  "auth/loginDriver",
  async (loginData, { rejectWithValue }) => {
    const body = JSON.stringify(loginData);
    try {
      const response = await axios.post(
        `https://techvonix.onrender.com/api/v1/auth/login?user_type=driver`,
        body,
        config
      );
      if (response.data) {
        localStorage.setItem(
          "token",
          JSON.stringify({ ...response.data, role: "driver" })
        );
        localStorage.removeItem("userEmail");
      }

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

    try {
      const { data } = await axios.post(
        `https://techvonix.onrender.com/api/v1/auth/forgot-password`,
        body,
        config
      );

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

      const res = await axios.post(
        "https://techvonix.onrender.com/api/v1/auth/verify-email-otp",
        body,
        config
      );
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
          role: token?.role,

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
    builder.addCase(registerCustomer.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerCustomer.fulfilled, (state, action) => {
      return {
        ...state,
        registerDriverStatus: "",
        role: "customer",
        registerCustomerStatus: "success",
      };
    });
    builder.addCase(registerCustomer.rejected, (state, action) => {
      return {
        ...state,
        registerCustomerStatus: "rejected",
        registerDriverStatus: "",
        registerCustomerError: action.payload,
      };
    });
    builder.addCase(registerDriver.pending, (state, action) => {
      return { ...state, registerDriverStatus: "pending" };
    });
    builder.addCase(registerDriver.fulfilled, (state, action) => {
      return {
        ...state,
        registerCustomerStatus: "",
        registerDriverStatus: "success",
        role: "driver",
      };
    });
    builder.addCase(registerDriver.rejected, (state, action) => {
      return {
        ...state,
        registerDriverStatus: "rejected",
        registerCustomerStatus: "",
        registerDriverError: action.payload,
      };
    });
    builder.addCase(verifyUser.pending, (state, action) => {
      return { ...state, verifyStatus: "pending" };
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
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
        verifyError: action?.payload,
      };
    });
    builder.addCase(loginCustomer.pending, (state, action) => {
      return {
        ...state,
        loginCustomerStatus: "pending",
        loginDriverStatus: "",
      };
    });
    builder.addCase(loginCustomer.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          token: action.payload,
          email: action?.payload?.data?.user?.email,
          user_id: action?.payload?.data?.user?.user_id,
          loginCustomerStatus: "success",
          loginDriverStatus: "",
        };
      } else return state;
    });
    builder.addCase(loginCustomer.rejected, (state, action) => {
      return {
        ...state,
        loginCustomerStatus: "rejected",
        loginCustomerError: action?.payload,
        loginDriverError: "",
      };
    });
    builder.addCase(loginDriver.pending, (state, action) => {
      return {
        ...state,
        loginDriverStatus: "pending",
        loginCustomerStatus: "",
      };
    });
    builder.addCase(loginDriver.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          token: action.payload,
          email: action?.payload?.data?.user?.email,
          user_id: action?.payload?.data?.user?.user_id,
          loginDriverStatus: "success",
          loginCustomerStatus: "",
        };
      } else return state;
    });
    builder.addCase(loginDriver.rejected, (state, action) => {
      return {
        ...state,
        loginDriverStatus: "rejected",
        loginCustomerError: "",
        loginDriverError: action?.payload,
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
        forgetError: action?.payload,
      };
    });
  },
});

export const { storeUser, loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
