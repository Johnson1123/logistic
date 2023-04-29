import React from "react";
import CombineInput from "../CombineInput.jsx/CombineInput";
import "./OTPuser.scss";

function OTPuser() {
  return (
    <div className="otpuser__con flex center">
      <p className="form-title">Enter Your OTP</p>
      <p className="form-text">
        Please enter the 4-digit code sent to your registered Email Address
      </p>
      <div className="input-container">
        <CombineInput />
      </div>
    </div>
  );
}

export default OTPuser;
