import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    console.log("HEADERS", headers);
    if (!headers.has("Authorization") && token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  endpoints: (builder) => ({}),
});

function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem("accessToken");
  return accessToken;
}

export const getCustomer = async () => {
  function getLocalAccessToken() {
    const accessToken = localStorage.getItem("accessToken");
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
    const res = await axios.get(
      "https://techvonix.onrender.com/api/v1/profile",
      config
    );
    localStorage.setItem("profile", JSON.stringify(res.data.data));
  } catch (error) {
    console.log(error);
  }
};
