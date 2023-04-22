import React from "react";
import { useNavigate } from "react-router-dom";
import SignupBtn from "../../component/Btn/SignupBtn/SignupBtn";
import "./Signupbanner.scss";

function Signupbanner() {
  const navigate = useNavigate();
  return (
    <div className="signupbanner__con center flex">
      <div className="btn__con">
        <SignupBtn
          label="SIGN UP AS USER"
          handler={() => navigate("/signupuser")}
        />
      </div>
      <div className="btn__con">
        <SignupBtn
          label="SIGN UP AS DRIVER"
          handler={() => navigate("/signupuser", { state: "driver" })}
        />
      </div>
    </div>
  );
}

export default Signupbanner;
