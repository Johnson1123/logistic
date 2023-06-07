import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import Input from "../Input/Input";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import {
  useCustomerLoginMutation,
  useDriverLoginMutation,
} from "../../features/slice/auth/userAuth";
import { setCredentials, setUserInfo } from "../../features/slice/auth/auth";
import { useCustomerProfileMutation } from "../../features/slice/profile/profileApiSlice";

function LoginForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerLogin = useCustomerLoginMutation();
  const driverLogin = useDriverLoginMutation();

  const auth = useSelector((state) => state.auth);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [login, { isLoading, error }] =
    props.role === "customer" ? customerLogin : driverLogin;

  async function handleLogin(e) {
    e.preventDefault();
    const res = await login(loginData).unwrap();
    dispatch(setCredentials(res.data));
    navigate(`/${props.role}`);
  }

  return (
    <form className="form_login" onSubmit={handleLogin}>
      <div className="flex input_group">
        <Input
          type="email"
          name="username"
          image={<HiOutlineMail />}
          placeholder="Email"
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
          placeholder="password"
          onChange={(e) => {
            setLoginData((prevValues) => {
              return { ...prevValues, password: e.target.value };
            });
          }}
        />
      </div>
      <div className="sign__in">
        {error?.data?.message?.email ? (
          <p className="error">{error?.data?.message?.email[0]}</p>
        ) : error?.data?.message?.password ? (
          <p className="error">{error?.data?.message?.password[0]}</p>
        ) : (
          <p className="error">{error?.data?.message}</p>
        )}

        <SignupBtn
          label={isLoading ? <BeatLoader color="#36d7b7" /> : "Sign in"}
        />
      </div>
    </form>
  );
}

export default LoginForm;
