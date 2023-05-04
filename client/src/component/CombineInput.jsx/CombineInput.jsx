import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import "./CombineInput.scss";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../features/Auths";
import OtpInput from "react-otp-input";
import { signUpSuccess } from "../../features/toggleSlice/toggleSlice";
import { BeatLoader } from "react-spinners";
import axios from "axios";

function CombineInput() {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(false);

  const auth = useSelector((state) => state.auth);

  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (auth.verifyStatus === "success") Dispatch(signUpSuccess());
  }, [navigate, Dispatch, auth.verifyStatus]);

  const handleResendOtp = async () => {
    const body = JSON.stringify({
      email: localStorage.getItem("userEmail"),
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://techvonix.onrender.com/api/v1/auth/resend-email-otp",
        body,
        config
      );
      setIsLoading(false);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error?.response?.data?.message;
      } else {
        return error?.message;
      }
    }
  };
  const handleOtp = async (e) => {
    e.preventDefault();
    const localData = localStorage.getItem("userEmail");
    const otpData = {
      code: otp,
      email: localData,
    };
    await Dispatch(verifyUser(otpData));
  };
  useEffect(() => {
    if (auth.verifyStatus === "success") {
      Dispatch(signUpSuccess());
    }
  }, [auth.verifyStatus, Dispatch, navigate]);

  const [timer, setTimer] = useState(60);
  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  console.log(timer);

  // const resetTimer = function () {
  //   if (!timer) {
  //     setTimer(60);
  //   }
  // };
  return (
    <>
      <form className="combine__con flex center" onSubmit={handleOtp}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
        />
        <div className="flex verify-otp-error">
          {auth.verifyStatus === "rejected" ? (
            <p className="error">
              {auth.verifyError?.message?.code
                ? auth.verifyError?.message?.code[0]
                : Object.values(auth.verifyError)[0]}
            </p>
          ) : null}

          <p className="p-text error">{`Resend Otp in : ${timer}`}</p>

          <SignupBtn
            label={
              auth.verifyStatus === "pending" ? (
                <BeatLoader color="#36d7b7" />
              ) : (
                "Proceed"
              )
            }
          />
        </div>
      </form>
      {timer > 0 ? (
        ""
      ) : (
        <button className="resend-otp" onClick={handleResendOtp}>
          {isloading ? "Sending" : "Resend OTP"}
        </button>
      )}
    </>
  );
}

export default CombineInput;
