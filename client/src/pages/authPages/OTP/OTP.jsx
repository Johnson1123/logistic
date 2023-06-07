import React from "react";
import Background from "../../../component/Background/Background";
import OTPuser from "../../../component/OTPuser/OTPuser";
import Overlay from "../../../component/Overlay/Overlay";
import SuccessSignUp from "../../../component/SuccessSignUp/SuccessSignUp";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function OTP(props) {
  const susscessOtp = useSelector((state) => state.toggleReducer.susscessOtp);
  const location = useLocation();
  const role = location?.state?.role;

  return (
    <>
      <div className="otp__con">
        <Background />
        <OTPuser handleRegister={props.handleRegister} />
        {susscessOtp && <Overlay />}
        {susscessOtp && <SuccessSignUp role={role} />}
      </div>
    </>
  );
}

export default OTP;
