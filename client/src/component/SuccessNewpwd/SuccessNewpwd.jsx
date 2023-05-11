import React from "react";
import { images } from "../../asset";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import "./SuccessNewpwd.scss";
import { useNavigate } from "react-router-dom";

function SuccessNewpwd({ url }) {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/${url}`);
  return (
    <div className="SuccessNewpwd flex center ">
      <div className="SuccessNewpwd__inner flex center box-shadow">
        <img src={images.checked} alt="checked" />
        <p className="form-text">Your Password has been changed sucesfully</p>
        <SignupBtn label="PROCEED TO LOGIN" handler={handleNavigate} />
      </div>
    </div>
  );
}

export default SuccessNewpwd;
