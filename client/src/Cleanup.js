// const [profile, { isLoading }] = useProfileQuery();
// const [resgister, { isLoading }] = useRegisterMutation();
// import {
//   useProfileQuery,
//   useRegisterMutation,
// } from "./features/customer/customerApiSlice";

// useEffect(() => {
//   dispatch(resgister()).unwrap();
// }, []);

// let updateToken = async () => {
//   let response = await fetch(
//     "https://techvonix.onrender.com/api/v1/auth/token/refresh",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${access}`,
//       },
//       body: JSON.stringify({ refresh: refreshToken }),
//     }
//   );
//   let data = await response.json();
//   if (response.status === 200 || response.status === 201) {
//     setAccess(data?.access);
//     localStorage.setItem("authToken", JSON.stringify(data));
//   } else {
//     dispatch(logoutUser());
//   }
//   if (isLoading) {
//     setIsLoading(false);
//   }
// };

// useEffect(() => {
//   if (isLoading) {
//     updateToken();
//   }
//   let hrs2 = 1000 * 60 * 60 * 2;

//   let interval = setInterval(() => {
//     if (refreshToken) {
//       updateToken();
//     }
//   }, hrs2);
//   return () => clearInterval(interval);
// }, [access, isLoading, dispatch]);
// useEffect(() => {
//   (async () => {
//     try {
//       const res = await axiosInstance.get(
//         "https://techvonix.onrender.com/api/v1/profile/"
//       );
//       localStorage.setItem("profile", JSON.stringify(res));
//     } catch (err) {
//       console.log(err);
//       dispatch(logoutUser());
//     }
//   })();
// }, []);

// function getLocalAccessToken() {
//   const accessToken = window.localStorage.getItem("accessToken");
//   return accessToken;
// }

// function getLocalRefreshToken() {
//   const refreshToken = window.localStorage.getItem("refreshToken");
//   return refreshToken;
// }

// const instance = axios.create({
//   baseURL: "techvonix.onrender.com/api/v1",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// instance.interceptors.request.use(
//   (config) => {
//     const token = getLocalAccessToken();
//     if (token) {
//       config.headers = {
//         Authorization: `Bearer ${JSON.stringify(token)}`,
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       };
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;

//     if (err.response) {
//       // Access Token was expired
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;

//         try {
//           const rs = await refreshToken();
//           const { accessToken } = rs.data.access;
//           window.localStorage.setItem("accessToken", accessToken);
//           // config.headers = {
//           //   Authorization: `Bearer ${accessToken}`,
//           //   Accept: "application/json",
//           //   "Content-Type": "application/json",
//           // };
//           instance.defaults.headers.common["Authorization"] =
//             "Bearer " + JSON.parse(accessToken);

//           return instance(originalConfig);
//         } catch (_error) {
//           if (_error.response && _error.response.data) {
//             return Promise.reject(_error.response.data);
//           }

//           return Promise.reject(_error);
//         }
//       }

//       if (err.response.status === 403 && err.response.data) {
//         return Promise.reject(err.response.data);
//       }
//     }

//     return Promise.reject(err);
//   }
// );

// function signin() {
//   return instance.post("/auth/signin", {
//     username: "zkoder",
//     password: "12345678",
//   });
// }

// function refreshToken() {
//   const body = JSON.stringify({
//     refresh:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0Mjg1NjIzLCJpYXQiOjE2ODQyNzQ4MjMsImp0aSI6ImVkZjcyOGE1YjI3NTQ5ZjRhMGNlOWNjMmZlMzAyYWEzIiwidXNlcl9pZCI6IjQ4YzMwNmI1LWU5M2QtNGRlYy1hMDVkLWRmZWI1YTZmNWE2NSJ9.WdlaRF5V-QsvbAAA-q59UyJbl96tfxBl-WNv3ph71mI",
//   });
//   return axios.post("/auth/refreshtoken", body);
// }

// function getUserContent() {
//   return instance.get(
//     "https://techvonix.onrender.com/api/v1/auth/token/refresh"
//   );
// }

// async function login() {
//   var resultElement = document.getElementById("getResult1");
//   resultElement.innerHTML = "";

//   try {
//     const res = await signin();

//     const { accessToken, refreshToken } = res.data;
//     window.localStorage.setItem("accessToken", accessToken);
//     window.localStorage.setItem("refreshToken", refreshToken);

//     resultElement.innerHTML =
//       "<pre>" +
//       JSON.stringify({ accessToken, refreshToken }, null, 2) +
//       "</pre>";
//   } catch (err) {
//     resultElement.innerHTML = err;
//   }
// }

// async function getData() {
//   var resultElement = document.getElementById("getResult2");
//   resultElement.innerHTML = "";

//   try {
//     const res = await getUserContent();

//     resultElement.innerHTML =
//       "<pre>" + JSON.stringify(res.data, null, 2) + "</pre>";
//   } catch (err) {
//     resultElement.innerHTML =
//       "<pre>" + JSON.stringify(err, null, 2) + "</pre>";
//   }
// }

// function clearOutput1() {
//   var resultElement = document.getElementById("getResult1");
//   resultElement.innerHTML = "";
// }

// function clearOutput2() {
//   var resultElement = document.getElementById("getResult2");
//   resultElement.innerHTML = "";
// }
