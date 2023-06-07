import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import Input from "../Input/Input";
import "./Forgetform.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useForgetPWDMutation } from "../../features/slice/auth/userAuth";
import { BeatLoader } from "react-spinners";

function Forgetform() {
  const [email, setEmail] = useState("");
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.forgetStatus);

  const [forgetPWD, { isLoading, error }] = useForgetPWDMutation();

  const handelForgetPwd = async (e) => {
    const data = {
      email: email,
    };
    e.preventDefault();
    await forgetPWD(data);
    localStorage.setItem("userEmail", email);
    navigate("/new-password");
  };
  return (
    <form className="form__forget" onSubmit={handelForgetPwd}>
      <div className="flex input_group">
        <Input
          type="tel"
          name="email"
          image={<BsTelephone />}
          placeholder="Email Address"
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
        />
      </div>
      <div className="sign__in flex">
        <p className="form-text">
          To verify your email, an OTP will be send to your registered email
        </p>
        <div className="signup-btn-err">
          {error && <p className="error">{error?.data?.message}</p>}
          <button className="btn sign_btn" type="submit">
            {isLoading ? <BeatLoader color="#36d7b7" /> : "Sign Up"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Forgetform;
