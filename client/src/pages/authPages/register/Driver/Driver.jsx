import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Background from "../../../../component/Background/Background";
import { useNavigate } from "react-router-dom";
import SocialMedia from "../../../../component/SocialMedia/SocialMedia";
import FORM_SIGN from "../../../../component/Form_Signup/FORM_SIGNUP";
import "./Driver.scss";
import { useDriverRegMutation } from "../../../../features/slice/auth/userAuth";

function Driver() {
  const signUptoggle = useSelector((state) => state.toggleReducer.signUp);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const registerDriver = useDriverRegMutation();
  return (
    <>
      <div className="register__con">
        <Background />
        {signUptoggle && (
          <div className="register__content">
            <p className="form-bold">START FOR FREE</p>
            <p className="form-title p-text">CREATE AN ACCOUNT</p>
            <p className="form-text">
              Please fill in Your Accurate Information
            </p>
            <FORM_SIGN handleRegister={registerDriver} role="driver" />
            <p className="form-text login_here">
              <span> Already have an account?</span>
              <span onClick={() => navigate("/login/driver")} className="link">
                Login here!
              </span>
            </p>
            <div className=" connect_sign flex center">
              <div></div>
              <p className="small-text">Connect With</p>
              <div></div>
            </div>
            <SocialMedia />
          </div>
        )}
      </div>
    </>
  );
}

export default Driver;
