import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import "./CombineInput.scss";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../features/Auths";
import OtpInput from "react-otp-input";
import { signUpSuccess } from "../../features/toggleSlice/toggleSlice";

function CombineInput() {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (auth.verifyStatus === "success") Dispatch(signUpSuccess());
  }, [navigate, Dispatch, auth.verifyStatus]);

  const handleOtp = async (e) => {
    e.preventDefault();
    const localData = localStorage.getItem("userEmail");
    const otpData = {
      code: otp,
      email: localData,
    };
    await Dispatch(verifyUser(otpData));
    if (auth.verifyStatus === "success") Dispatch(signUpSuccess());
  };

  // const handleOtp = async (e) => {
  //   e.preventDefault();
  //   const localData = localStorage.getItem("userEmail");
  //   const otpData = {
  //     code: otp,
  //     email: localData,
  //   };
  //   const token = await Dispatch(verifyUser(otpData));
  //   if (token.status === 200 || token.status === 201) {
  //     Dispatch(signUpSuccess());
  //   }
  // };
  return (
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
        <SignupBtn
          label={auth.verifyStatus === "pending" ? "Processing..." : "Proceed"}
        />
      </div>
    </form>
  );
}

export default CombineInput;
