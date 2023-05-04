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
  verifyError: "",
  verifyStatus: "",
  forgetError: "",
  forgetStatus: "",
  role: "",
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
// export const forgetPwd = createAsyncThunk(
//   "auth/forgetPwd",
//   async (email, { rejectWithValue }) => {
//     const body = JSON.stringify(email);
//     try {
//       const { data } = await axios.post(
//         "https://techvonix.onrender.com/api/v1/auth/forgot-password",
//         body,
//         config
//       );
//       return data;
//     } catch (error) {
//       console.error(error.response.data);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
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
        registerCustomerStatus: "",
        registerCustomerError: "",
        registerDriverStatus: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        forgetError: "",
        forgetStatus: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerCustomer.pending, (state, action) => {
      return {
        ...state,
        registerCustomerStatus: "pending",
        registerCustomerError: "",
        registerDriverStatus: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        verifyError: "",
        verifyStatus: "",
        forgetError: "",
        forgetStatus: "",
      };
    });
    builder.addCase(registerCustomer.fulfilled, (state, action) => {
      return {
        ...state,
        role: "customer",
        registerCustomerStatus: "success",
        registerCustomerError: "",
        registerDriverStatus: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        verifyError: "",
        verifyStatus: "",
        forgetError: "",
        forgetStatus: "",
      };
    });
    builder.addCase(registerCustomer.rejected, (state, action) => {
      return {
        ...state,
        registerCustomerStatus: "rejected",
        registerDriverStatus: "",
        registerCustomerError: action.payload,
        registerDriverStatus: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        verifyError: "",
        verifyStatus: "",
        forgetError: "",
        forgetStatus: "",
      };
    });
    builder.addCase(registerDriver.pending, (state, action) => {
      return {
        ...state,
        registerDriverStatus: "pending",
        registerCustomerStatus: "",
        registerCustomerError: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        verifyError: "",
        verifyStatus: "",
        forgetError: "",
        forgetStatus: "",
      };
    });
    builder.addCase(registerDriver.fulfilled, (state, action) => {
      return {
        ...state,
        registerCustomerStatus: "",
        registerDriverStatus: "success",
        role: "driver",
        registerCustomerError: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        verifyError: "",
        verifyStatus: "",
        forgetError: "",
        forgetStatus: "",
      };
    });
    builder.addCase(registerDriver.rejected, (state, action) => {
      return {
        ...state,
        registerDriverStatus: "rejected",
        registerDriverError: action.payload,
        registerCustomerStatus: "",
        registerCustomerError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        verifyError: "",
        verifyStatus: "",
        forgetError: "",
        forgetStatus: "",
      };
    });
    builder.addCase(verifyUser.pending, (state, action) => {
      return {
        ...state,
        verifyStatus: "pending",
        registerCustomerStatus: "",
        registerCustomerError: "",
        registerDriverStatus: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        verifyError: "",
        forgetError: "",
        forgetStatus: "",
      };
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          verifyStatus: "success",
          registerCustomerStatus: "",
          registerCustomerError: "",
          registerDriverStatus: "",
          registerDriverError: "",
          loginCustomerStatus: "",
          loginCustomerError: "",
          loginDriverStatus: "",
          loginDriverError: "",
          verifyError: "",
          forgetError: "",
          forgetStatus: "",
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
        registerCustomerStatus: "",
        registerCustomerError: "",
        registerDriverStatus: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        forgetError: "",
        forgetStatus: "",
      };
    });
    builder.addCase(loginCustomer.pending, (state, action) => {
      return {
        ...state,
        loginCustomerStatus: "pending",
        registerCustomerStatus: "",
        registerCustomerError: "",
        registerDriverStatus: "",
        registerDriverError: "",
        loginCustomerError: "",
        loginDriverStatus: "",
        loginDriverError: "",
        forgetError: "",
        forgetStatus: "",
        verifyError: "",
        verifyStatus: "",
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
          registerCustomerStatus: "",
          registerCustomerError: "",
          registerDriverStatus: "",
          registerDriverError: "",
          loginCustomerError: "",
          loginDriverStatus: "",
          loginDriverError: "",
          forgetError: "",
          forgetStatus: "",
        };
      } else return state;
    });
    builder.addCase(loginCustomer.rejected, (state, action) => {
      return {
        ...state,
        loginCustomerStatus: "rejected",
        loginCustomerError: action?.payload,
        loginDriverError: "",
        registerCustomerStatus: "",
        registerCustomerError: "",
        registerDriverStatus: "",
        registerDriverError: "",
        loginDriverStatus: "",
        forgetError: "",
        forgetStatus: "",
      };
    });
    builder.addCase(loginDriver.pending, (state, action) => {
      return {
        ...state,
        loginDriverStatus: "pending",
        registerCustomerStatus: "",
        registerCustomerError: "",
        registerDriverStatus: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        loginDriverError: "",
        forgetError: "",
        forgetStatus: "",
        verifyError: "",
        verifyStatus: "",
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
          registerCustomerStatus: "",
          registerCustomerError: "",
          registerDriverStatus: "",
          registerDriverError: "",
          loginCustomerStatus: "",
          loginCustomerError: "",
          loginDriverError: "",
          forgetError: "",
          forgetStatus: "",
          verifyError: "",
          verifyStatus: "",
        };
      } else return state;
    });
    builder.addCase(loginDriver.rejected, (state, action) => {
      return {
        ...state,
        loginDriverStatus: "rejected",
        loginDriverError: action?.payload,
        registerCustomerStatus: "",
        registerCustomerError: "",
        registerDriverStatus: "",
        registerDriverError: "",
        loginCustomerStatus: "",
        loginCustomerError: "",
        forgetError: "",
        forgetStatus: "",
        verifyError: "",
        verifyStatus: "",
      };
    });
    // builder.addCase(forgetPwd.pending, (state, action) => {
    //   return { ...state, forgetStatus: "pending" };
    // });
    // builder.addCase(forgetPwd.fulfilled, (state, action) => {
    //   if (action.payload) {
    //     return {
    //       ...state,
    //       forgetError: "success",
    //     };
    //   }
    // });
    // builder.addCase(forgetPwd.rejected, (state, action) => {
    //   return {
    //     ...state,
    //     forgetStatus: "rejected",
    //     forgetError: action?.payload,
    //   };
    // });
  },
});

export const { storeUser, loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
