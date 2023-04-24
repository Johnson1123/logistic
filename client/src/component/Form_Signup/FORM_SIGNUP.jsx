import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import { HiOutlineMail } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

import "./Form_Sign.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../../features/Auths";
import { BeatLoader } from "react-spinners";
import { closeSignUp, otpToggle } from "../../features/toggleSlice/toggleSlice";

function FORM_SIGN(props) {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const [values, setValue] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth.registerStatus === "success") navigate("/otp");
  }, [navigate, auth.registerStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Dispatch(registerUser({ ...values, user_type: user_type }));
  };
  const user_type = location.state;
  console.log(user_type);
  return (
    <form className="form_sign" onSubmit={handleSubmit}>
      <div className="flex input_group">
        <div className="input__group-inner">
          <Input
            type="text"
            name="username"
            image={<CiUser />}
            placeholder="Username"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, username: e.target.value };
              });
            }}
          />
        </div>
        <div className="input__group-inner">
          <Input
            type="email"
            name="email"
            image={<HiOutlineMail />}
            placeholder="Email Address"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, email: e.target.value };
              });
            }}
          />
        </div>
      </div>
      <div className="flex input_group">
        <div className="input__group-inner">
          <Input
            type="number"
            name="tell"
            image={<BsTelephone />}
            placeholder="Telephone"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, phone: e.target.value };
              });
            }}
          />
        </div>
        <div className="input__group-inner">
          <Input
            type="password"
            name="pwd"
            image={<AiFillLock />}
            placeholder="Password"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, password: e.target.value };
              });
            }}
          />
        </div>
      </div>

      <div className="flex signup-btn-err">
        {auth.registerStatus === "rejected" ? (
          <p className="error">{auth?.registerError?.message}</p>
        ) : null}
        <button className="btn sign_btn">
          {auth.registerStatus === "pending" ? (
            <BeatLoader color="#36d7b7" />
          ) : (
            "Sign Up"
          )}
        </button>
      </div>
    </form>
  );
}

export default FORM_SIGN;
