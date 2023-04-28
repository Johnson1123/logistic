// import useAuth from "./useAuth";
import axios from "axios";

const useRefreshToken = () => {
  const localData = JSON.parse(localStorage?.getItem("token"));

  const refresh = async () => {
    const payload = JSON.stringify({
      refresh: localData?.data?.refresh,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const accessToken = await axios.post(
      "https://techvonix.onrender.com/api/v1/auth/token/refresh",
      payload,
      config
    );
    const access = accessToken;
    return access.data.access;
  };
  return refresh;
};

export default useRefreshToken;
