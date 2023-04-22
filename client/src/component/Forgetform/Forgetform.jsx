import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import Input from "../Input/Input";
import "./Forgetform.scss";
import { useDispatch } from "react-redux";
import { forgetPwd } from "../../features/Auths";

function Forgetform() {
  const [email, setEmail] = useState({
    email: "",
  });
  const Dispatch = useDispatch();
  console.log(email);
  const navigate = useNavigate();
  const handelForgetPwd = async (e) => {
    e.preventDefault();
    try {
      const data = await Dispatch(forgetPwd(email));
      navigate("/otp");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <form className="form__forget">
      <div className="flex input_group">
        <Input
          type="tel"
          name="email"
          image={<BsTelephone />}
          placeholder="Email Address"
          onChange={(e) => {
            return setEmail({ email: e.target.value });
          }}
        />
      </div>
      <div className="sign__in flex">
        <p className="form-text">
          To verify your number, an OTP willl be send to your registered email
        </p>
        <SignupBtn label="PROCEED" handler={handelForgetPwd} />
      </div>
    </form>
  );
}

export default Forgetform;
