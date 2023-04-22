import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../asset/image";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import "./SuccessSignUp.scss";

function SuccessSignUp() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate("/login");
  };

  return (
    <div className="flex success__signup flex center">
      <div className="success__signup-inner flex box-shadow">
        <img src={image.handShake} alt="congratulations" />
        <p className="bold-text">
          Congratulations Your account has been created succesfully
        </p>
        <p className="p-text">
          Kindly click a link sent to your mail to activate your account
        </p>
        <SignupBtn label="PROCEED" handler={handleNavigate} />
      </div>
    </div>
  );
}

export default SuccessSignUp;
