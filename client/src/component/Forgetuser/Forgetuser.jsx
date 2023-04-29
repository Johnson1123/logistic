import React from "react";
import Forgetform from "../Forgetform/Forgetform";
import "./Forgetuser.scss";

function Forgetuser() {
  return (
    <div className="forget__form">
      <p className="form-title">
        Forget Password? <br />
        Worry Less!
      </p>
      <p className="form-text">Please enter your registered Email Address</p>
      <Forgetform />
    </div>
  );
}

export default Forgetuser;
