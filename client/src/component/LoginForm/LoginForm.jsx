import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import Input from "../Input/Input";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginCustomer, loginDriver, loginUser } from "../../features/Auths";
import { BeatLoader } from "react-spinners";

function LoginForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const resStatus =
    props.role === "driver" ? auth.loginDriverStatus : auth.loginCustomerStatus;
  const resError =
    props.role === "driver" ? auth.loginDriverError : auth.loginCustomerError;
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handler = props.role === "driver" ? loginDriver : loginCustomer;
  console.log(auth);
  console.log(props.role);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(handler(loginData));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(resStatus);
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
        {resStatus === "rejected" ? (
          <p className="error">{resError?.message}</p>
        ) : null}
        <SignupBtn
          label={
            resStatus === "pending" ? <BeatLoader color="#36d7b7" /> : "Sign in"
          }
        />
      </div>
    </form>
  );
}

export default LoginForm;
