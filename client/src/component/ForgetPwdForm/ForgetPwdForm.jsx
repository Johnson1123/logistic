import React, { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import Input from "../../component/Input/Input";
import "./ForgetPwdForm.scss";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";

function ForgetPwdForm() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate("/experience");
  };

  const [values, setValues] = useState({});
  return (
    <div className="Newpwdform">
      <div className="flex input_group">
        <Input
          type="email"
          name="email"
          image={<HiOutlineMail />}
          placeholder="Email"
        />
        <Input
          type="number"
          name="code"
          image={<AiFillLock />}
          placeholder="Code"
        />
        <Input
          type="password"
          name="new_password"
          image={<AiFillLock />}
          placeholder="Password"
        />
      </div>
      <div className="Newpwdform__btn">
        <SignupBtn label="PROCEED" handler={handleNavigate} />
      </div>
    </div>
  );
}

export default ForgetPwdForm;
