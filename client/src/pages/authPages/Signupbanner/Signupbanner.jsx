import React from "react";
import { useNavigate } from "react-router-dom";
import SignupBtn from "../../../component/Btn/SignupBtn/SignupBtn";
import "./Signupbanner.scss";

function Signupbanner() {
  const navigate = useNavigate();
  return (
    <div className="signupbanner__con center flex">
      <div className="btn__con">
        <SignupBtn
          label="SIGN UP AS CUSTOMER"
          handler={() => navigate("/customer/register")}
        />
      </div>
      <div className="btn__con">
        <SignupBtn
          label="SIGN UP AS DRIVER"
          handler={() => navigate("/driver/register")}
        />
      </div>
    </div>
  );
}

export default Signupbanner;
