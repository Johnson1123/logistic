import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import Input from "../Input/Input";
import "./Forgetform.scss";
import { useDispatch } from "react-redux";
import axios from "axios";

function Forgetform() {
  const [email, setEmail] = useState("");
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const body = JSON.stringify({
    email,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const handelForgetPwd = async (e) => {
    e.preventDefault();
    console.log(body);
    try {
      const response = await axios.post(
        "https://techvonix.onrender.com/api/v1/auth/forgot-password",
        body,
        config
      );
      if (response.status === 200) {
        navigate("/newpwd");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error?.response?.data?.message;
      } else {
        return error?.message;
      }
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
            return setEmail(e.target.value);
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
