import React from "react";
import { images } from "../../asset";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import "./SuccessOTP.scss";

function SuccessOTP() {
  return (
    <div className="successOTP flex center">
      <div className="successOTP__inner flex center box-shadow">
        <img src={images.checked} alt="checked" />
        <p className="form-text">Verification Sucessful</p>
        <SignupBtn label="PROCEED" />
      </div>
    </div>
  );
}

export default SuccessOTP;
