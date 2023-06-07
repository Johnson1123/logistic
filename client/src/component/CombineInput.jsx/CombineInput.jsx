import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import "./CombineInput.scss";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { signUpSuccess } from "../../features/toggleSlice/toggleSlice";
import { BeatLoader } from "react-spinners";
import {
  useResendOtpMutation,
  useVerifyOtpMutation,
} from "../../features/slice/auth/userAuth";

function CombineInput() {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const verifyOtp = useVerifyOtpMutation();
  const resendOtp = useResendOtpMutation();
  const [resend, setResend] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState(false);

  const auth = useSelector((state) => state.auth);

  const [verify, { isLoading, error }] = resend ? resendOtp : verifyOtp;

  const [otp, setOtp] = useState("");

  const handleResendOtp = async () => {
    setResend(true);
    const data = JSON.stringify({
      email: localStorage.getItem("userEmail"),
    });
    await verify(data);
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    setResend(false);

    const localData = localStorage.getItem("userEmail");
    const otpData = {
      code: otp,
      email: localData,
    };
    await verify(otpData).unwrap();
    setVerifyStatus(true);
  };

  useEffect(() => {
    if (verifyStatus) {
      Dispatch(signUpSuccess());
    }
  }, [navigate, Dispatch, verifyStatus]);

  const [timer, setTimer] = useState(60);
  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);
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
          {error ? (
            <p className="error">
              {error?.data?.message?.code
                ? error?.data?.message?.code[0]
                : Object.values(error?.data?.message)[0]}
            </p>
          ) : null}

          <p className="p-text error">{`Resend Otp in : ${timer}`}</p>

          <SignupBtn
            label={
              isLoading && !resend ? <BeatLoader color="#36d7b7" /> : "Proceed"
            }
          />
        </div>
      </form>
      {timer > 0 ? (
        ""
      ) : (
        <button className="resend-otp" onClick={handleResendOtp}>
          {isLoading && resend ? "Sending" : "Resend OTP"}
        </button>
      )}
    </>
  );
}

export default CombineInput;
