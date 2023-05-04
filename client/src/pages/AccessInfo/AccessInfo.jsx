import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Bgnav from "../../component/BgNav/Bgnav";
import SignupBtn from "../../component/Btn/SignupBtn/SignupBtn";
import "./AccessInfo.scss";

function AccessInfo() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate("/whattolearn");
  };
  const navigateHome = () => {
    return navigate("/");
  };
  return (
    <div className="info-access flex center">
      <Bgnav />
      <div className="info-content flex">
        <h3 className="form-title p-text">
          <span>XLCAB </span>TRANSFER
        </h3>
        <div className="info-modal">
          <div className="modal-1">
            <p className="text-bold modal-title">Access to information</p>
            <p className="p-text">
              Hi Rasheed, EduMe would like to receive the following data and
              permissions
            </p>
          </div>
          <div className="modal-2">
            <p className="text-bold modal-title">Profile</p>
            <p className="p-text">
              You will be sharing your name, phone number and email address from
              your XLCABTRANSFER account.
            </p>
          </div>
          <div className="modal-3 flex">
            <p className="p-text">
              EduMe will use this information according to its.
            </p>
            <Link to="policy">Private Policy</Link>
          </div>
        </div>
        <div className="btn__con flex">
          <SignupBtn label="no, thank" handler={navigateHome} />
          <SignupBtn label="Allow" handler={handleNavigate} />
        </div>
      </div>
    </div>
  );
}

export default AccessInfo;
