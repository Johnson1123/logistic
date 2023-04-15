import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Background from "../../component/Background/Background";
import CreateAccout from "../../component/CreateAccout/CreateAccout";
import Overlay from "../../component/Overlay/Overlay";
import SuccessSignUp from "../../component/SuccessSignUp/SuccessSignUp";
import "./SignUp.scss";
import OTP from "../OTP/OTP";
import FORM_SIGN from "../../component/Form_Signup/FORM_SIGNUP";
import { Link } from "react-router-dom";
import SocialMedia from "../../component/SocialMedia/SocialMedia";

function SignUp(props) {
  const toggle = useSelector((state) => state.toggleReducer.signUp);
  const [email_id, setEmail_id] = useState("");
  return (
    <>
      {!email_id && (
        <div className="signUp__con">
          <Background />
          <div className="signup__content">
            <p className="form-bold">START FOR FREE</p>
            <p className="form-title p-text">CREATE AN ACCOUNT</p>
            <p className="form-text">
              Please fill in Your Accurate Information
            </p>
            <FORM_SIGN />
            <p className="form-text login_here">
              Already have an account?<Link to="/loginuser">Login here!</Link>
            </p>
            <div className=" connect_sign flex center">
              <div></div>
              <p className="small-text">Connect With</p>
              <div></div>
            </div>
            <SocialMedia />
          </div>
          {toggle && <SuccessSignUp />}
          {toggle && <Overlay />}
        </div>
      )}
      {email_id && (
        <div className="sign__otp">
          <OTP />
        </div>
      )}
    </>
  );
}

export default SignUp;
