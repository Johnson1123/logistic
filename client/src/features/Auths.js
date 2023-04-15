// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { baseUrl } from "./api";
// import jwt_decode from "jwt-decode";
// import axios from "axios";

// const initialState = {
//   token: localStorage.getItem("token"),
//   name: "",
//   email: "",
//   phone: "",
//   registerStatus: "",
//   registerError: "",
//   loginStatus: "",
//   loginError: "",
//   userLoaded: false,
// };

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (user, { rejectWithValue }) => {
//     try {
//       const token = await axios.post(
//         `https://techvonix.onrender.com/api/v1/auth/driver/register`,
//         {
//           username: user.username,
//           email: user.email,
//           phone: user.phone,
//           password: user.password,
//         }
//       );
//       console.log(token);
//       localStorage.setItem("token", token.data);
//       return token.data;
//     } catch (err) {
//       console.log(err.response.data);
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(registerUser.pending, (state, action) => {
//       return { ...state, registerStatus: "pending" };
//     });
//     builder.addCase(registerUser.fulfilled, (state, action) => {
//       if (action.payload) {
//         const user = jwt_decode(action.payload);
//         return {
//           ...state,
//           token: action.payload,
//           username: user.username,
//           email: user.email,
//           phone: user.phone,
//           password: user.password,
//           registerStatus: "success",
//         };
//       } else return state;
//     });
//     builder.addCase(registerUser.rejected, (state, action) => {
//       return {
//         ...state,
//         registerStatus: "rejected",
//         registerError: action.payload,
//       };
//     });
//   },
// });

// export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token") ?? "",
  isAuthenticated: null,
  loading: false,
  user: null,
  error: null,
};
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(user);
      const { data } = await axios.post(
        "https://techvonix.onrender.com/api/v1/auth/driver/register",
        body,
        config
      );
      console.log(data);
      localStorage.setItem("token", JSON.stringify(data));
      localStorage.setItem("userEmail", user.email);
      return data;
    } catch (error) {
      console.error(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, thunkAPI) => {
    console.log(loginData);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(loginData);

      const { data } = await axios.post(
        "https://techvonix.onrender.com/api/v1/auth/login",
        body,
        config
      );
      console.log(data);
      localStorage.setItem("token", JSON.stringify(data));
      return data;
    } catch (error) {
      console.error(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const verifyUser = createAsyncThunk(
  "auth/verifyOtp",
  async (otp, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(otp);
      console.log(body);
      const { data } = await axios.post(
        "https://techvonix.onrender.com/api/v1/auth/verify-email-otp",
        body,
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload; // <-- no errors, response is token
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // <-- error response
      })
      .addCase(verifyUser.pending, (state, action) => {
        return { ...state, registerStatus: "pending" };
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        if (action.payload) {
          const user = jwt_decode(action.payload);
          return {
            ...state,
            token: action.payload,
            username: user.username,
            email: user.email,
            phone: user.phone,
            password: user.password,
            registerStatus: "success",
          };
        } else return state;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        return {
          ...state,
          registerStatus: "rejected",
          registerError: action.payload,
        };
      })
      .addCase(loginUser.pending, (state, action) => {
        return { ...state, registerStatus: "pending" };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return state;
        // if (action.payload) {
        //   const user = jwt_decode(action.payload);
        //   return {
        //     ...state,
        //     token: action.payload,
        //     username: user.username,
        //     email: user.email,
        //     phone: user.phone,
        //     password: user.password,
        //     registerStatus: "success",
        //   };
        // } else return state;
      })
      .addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          registerStatus: "rejected",
          registerError: action.payload,
        };
      });
  },
});

export const { storeUser } = authSlice.actions;

export default authSlice.reducer;
