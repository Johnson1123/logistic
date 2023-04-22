import React from "react";
import { images } from "../../asset";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import "./SuccessOTP.scss";
import { useNavigate } from "react-router-dom";

function SuccessOTP() {
  const navigate = useNavigate();
  return (
    <div className="successOTP flex center">
      <div className="successOTP__inner flex center box-shadow">
        <img src={images.checked} alt="checked" />
        <p className="form-text">Verification Sucessful</p>
        <SignupBtn label="PROCEED" handler={() => navigate("/")} />
      </div>
    </div>
  );
}

export default SuccessOTP;
