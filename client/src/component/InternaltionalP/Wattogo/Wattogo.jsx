import React from "react";
import { useNavigate } from "react-router-dom";

import { images } from "../../../asset";
import Bgnav from "../../BgNav/Bgnav";
import SignupBtn from "../../Btn/SignupBtn/SignupBtn";
import "./Wattogo.scss";

function Wattogo() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate("/stn");
  };

  return (
    <div className="Wattogo">
      <Bgnav />
      <div className="WatToGo__wrapper flex">
        <div className="WatToGo__left">
          <h3 className="form-title">JUST A WAT TO GO</h3>
          <p className="form-text">
            Your application was submitted succesfully, However your application
            is under review, out team will get back to you through your
            registered email address.
          </p>
          <SignupBtn label="PROCEED" handler={handleNavigate} />
        </div>
        <div className="WatToGo__right">
          <img src={images.experience} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Wattogo;
