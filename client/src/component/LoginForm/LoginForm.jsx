import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import Input from "../Input/Input";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/Auths";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    user_type: "customer",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser(loginData)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="form_login" onSubmit={handleLogin}>
      <div className="flex input_group">
        <Input
          type="email"
          name="username"
          image={<HiOutlineMail />}
          placeholder="Username"
          onChange={(e) => {
            setLoginData((prevValues) => {
              return { ...prevValues, email: e.target.value };
            });
          }}
        />
        <Input
          type="password"
          name="pwd"
          image={<AiFillLock />}
          placeholder="Email Address"
          onChange={(e) => {
            setLoginData((prevValues) => {
              return { ...prevValues, password: e.target.value };
            });
          }}
        />
      </div>
      <div className="sign__in">
        <SignupBtn label="Sign in" />
      </div>
    </form>
  );
}

export default LoginForm;
