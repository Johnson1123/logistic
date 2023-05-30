import axios from "axios";
import { baseUrl } from "../../../server";
function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem("accessToken");
  return accessToken;
}

function getLocalRefreshToken() {
  const accessToken = window.localStorage.getItem("refreshToken");
  return accessToken;
}

const accessToken = JSON.parse(getLocalAccessToken());

async function refreshAccessToken() {
  const refesh = await getLocalRefreshToken();
  const body = JSON.stringify({
    refresh: refesh,
  });
  try {
    const response = await axios.post(`${baseUrl}auth/token/refresh`, body);
    localStorage.setItem("accessToken", response.data.access);
    localStorage.setItem("refreshToken", response.data.refesh);
    accessToken = response.data.access_token;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshAccessToken().then(() => {
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      });
    }

    return Promise.reject(error);
  }
);

// load user
export const loadUser = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer  ${accessToken}`,
    },
  };
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${baseUrl}profile/`, config, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};
