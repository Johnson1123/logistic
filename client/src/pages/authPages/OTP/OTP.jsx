import React, { useState } from "react";
import Background from "../../../component/Background/Background";
import OTPuser from "../../../component/OTPuser/OTPuser";
import Overlay from "../../../component/Overlay/Overlay";
import SuccessOTP from "../../../component/SuccessOTP/SuccessOTP";
import Otp from "../../../portal/Otp/Otp";
import SuccessSignUp from "../../../component/SuccessSignUp/SuccessSignUp";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function OTP(props) {
  const susscessOtp = useSelector((state) => state.toggleReducer.susscessOtp);
  const [verify, setVerify] = useState(false);
  const auth = useSelector((state) => state.auth);
  const role = auth.role;
  console.log(role);
  return (
    <>
      <div className="otp__con">
        <Background />
        <OTPuser handler={props.handler} />
        {susscessOtp && <Overlay />}
        {susscessOtp && <SuccessSignUp role={role} />}
      </div>
    </>
  );
}

export default OTP;
