import React, { useState } from "react";
import { FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { images } from "../../asset";
import Bgnav from "../../component/BgNav/Bgnav";
import SignupBtn from "../../component/Btn/SignupBtn/SignupBtn";
import "./Whattolearn.scss";

function Whattolearn() {
  const [toggle, settoggle] = useState(false);
  const handleToggle = () => {
    return toggle ? settoggle(false) : settoggle(true);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate("/mylearning");
  };
  return (
    <div className="Whattolearn flex">
      <Bgnav />
      <div className="Whattolearn__wrapper flex">
        <p className="p-text form-title">
          Introduction to the XLCABTRANSFER Partner app
        </p>
        <p className="p-text flex clock">
          <FiClock />2 mins
        </p>
        <div className="img__con">
          <img src={images.womanlearn} alt="technovix" />
        </div>
        <div className="whatto__content box-shadow">
          <h4 className="p-text form-bold">Welcome! How are you doing?</h4>
          <p className="p-text para-text">
            Before you start driving, it's important that you know how to use
            the XLCABTRANSFER Partner App. So how 'bout we start with that?
          </p>
        </div>
        <SignupBtn label=" What will i learn?" handler={handleToggle} />
        {toggle && (
          <div className="whattogain">
            <p className="small-title">
              By the end of this lesson, you’ll know...
            </p>
            <div className="whattogain__con">
              <p className="whattogain-box">...how to sign into the app</p>
              <p className="whattogain-box">...how to go online</p>
              <p className="whattogain-box">...how trip requests work</p>
            </div>
            <p className="small-title">Ready to go?</p>
            <SignupBtn label="Lets go" handler={handleNavigate} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Whattolearn;
