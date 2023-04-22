import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import Input from "../Input/Input";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/Auths";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth.user_id);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(loginUser(loginData));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(auth);
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
        {auth?.loginError && (
          <p className="error">{auth?.loginError.message}</p>
        )}
        <SignupBtn
          label={auth?.loginStatus === "pending" ? "Sign in..." : "Sign in"}
        />
      </div>
    </form>
  );
}

export default LoginForm;
