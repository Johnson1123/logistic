import { Rate } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../asset";
import Bgnav from "../../component/BgNav/Bgnav";
import SignupBtn from "../../component/Btn/SignupBtn/SignupBtn";
import "./Experiencedriver.scss";

function Experiencedriver() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate("/tab");
  };
  return (
    <div className="Exper__driver">
      <Bgnav />
      <div className="exper__wrapper flex">
        <div className="exper__left">
          <h3 className="form-title">EXPERIENCED DRIVER</h3>
          <div className="rating__container flex center">
            <Rate value={5} style={{ color: "green" }} />
          </div>
          <p className="form-text">
            You have taken a bold step by joining our community as a <br />
            driver, a sustainable means of income is guarranted. <br />
            However, we need you to verify your account by providing <br />
            some documents as required.
          </p>
          <SignupBtn label="PROCEED" handler={handleNavigate} />
        </div>
        <div className="exper__right">
          <img src={images.experience} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Experiencedriver;
