import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../asset";
import Bgnav from "../../component/BgNav/Bgnav";
import SignupBtn from "../../component/Btn/SignupBtn/SignupBtn";
import "./Techdrive.scss";

function Techdrive() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate("/info");
  };
  return (
    <div className="techdrive">
      <Bgnav />
      <div className="techdrive__wrapper flex">
        <div className="techdrive__left">
          <h3 className="form-title p-text">
            <span>XLCAB </span>TRANSFER
          </h3>
          <p className="form-bold p-text">Ready to boost your skills?</p>
          <p className="form-text p-text">
            Welcome to the awesome learning resource that's just for YOU, our
            TechnovixDriver Driver-Partner! Get tips and tricks to keep those 5
            star ratings rolling in
          </p>
          <SignupBtn
            label="Continue with your account"
            handler={handleNavigate}
          />
        </div>
        <div className="techdrive__right">
          <img src={images.experience} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Techdrive;
