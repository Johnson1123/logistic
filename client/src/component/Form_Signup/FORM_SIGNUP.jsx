import React, { useState } from "react";
import Input from "../Input/Input";
import { HiOutlineMail } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { images } from "../../asset";

import "./Form_Sign.scss";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import { useDispatch, useSelector } from "react-redux";
import { startSignUp } from "../../features/toggleSlice/toggleSlice";
import { registerUser } from "../../features/Auths";

function FORM_SIGN(props) {
  const user = useSelector((state) => state.auth);
  const Dispatch = useDispatch();
  const [values, setValue] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Dispatch(registerUser(values));
    console.log(values);
    console.log(user);
  };

  return (
    <form className="form_sign" onSubmit={handleSubmit}>
      <div className="flex input_group">
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

      <div className="flex input_group">
        <Input
          type="tel"
          name="tell"
          image={<BsTelephone />}
          placeholder="Telephone"
          onChange={(e) => {
            setValue((prevValues) => {
              return { ...prevValues, phone: e.target.value };
            });
          }}
        />
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
      <div>
        <SignupBtn label="Sign Up" />
      </div>
    </form>
  );
}

export default FORM_SIGN;
