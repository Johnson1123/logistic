import axios from "axios";
import { baseUrl } from "../../../server";

// load user
export const loadUser = () => async (dispatch) => {
  function getLocalAccessToken() {
    const accessToken = window.localStorage.getItem("accessToken");
    return accessToken;
  }
  const access = JSON.parse(getLocalAccessToken());
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer  ${access}`,
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
