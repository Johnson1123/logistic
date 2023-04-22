import React from "react";
import { images } from "../../asset";
import { createPortal } from "react-dom";
import SignupBtn from "../../component/Btn/SignupBtn/SignupBtn";
import "./otp.scss";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();
  const Container = () => {
    return (
      <div className="modal__otp">
        <div className="successOTP flex center">
          <div className="successOTP__inner flex center">
            <img src={images.checked} alt="checked" />
            <p className="form-text">Verification Sucessful</p>
            <SignupBtn label="PROCEED" handler={() => navigate("/")} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {createPortal(<Container />, document.getElementById("otp__modal"))}
    </div>
  );
}

export default Otp;
