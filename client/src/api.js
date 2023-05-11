import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const axiosInstance = axios.create({
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(async (req) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const accessToken = localStorage.getItem("authToken")
    ? localStorage.getItem("authToken")
    : null;

  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }

  const tokenData = jwt_decode(accessToken);
  const isExpired = dayjs.unix(tokenData.exp).diff(dayjs()) < 1;

  if (!isExpired) return req;

  const refreshToken = token?.data?.refresh;

  const response = await axios.post(
    "https://techvonix.onrender.com/api/v1/auth/token/refresh",
    { refreshToken },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  req.headers.Authorization = `Bearer ${response.data.accessToken}`;
  localStorage.setItem("authToken", response.data.access);

  return req;
});
export default axiosInstance;
