import React, { useState } from "react";
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import Input from "../../component/Input/Input";
import "./ForgetPwdForm.scss";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatSquareText } from "react-icons/bs";
import { useNewPwdMutation } from "../../features/slice/auth/userAuth";
import { BeatLoader } from "react-spinners";

function ForgetPwdForm({ setOpen }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const [newPWD, { isLoading, error }] = useNewPwdMutation();

  const [value, setValue] = useState({
    email: "",
    code: "",
    new_password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newPWD(value);
    navigate("/login/customer");
  };
  return (
    <form className="Newpwdform" onSubmit={handleSubmit}>
      <div className="flex input_group">
        <Input
          type="email"
          name="email"
          image={<HiOutlineMail />}
          placeholder="Email"
          onChange={(e) => {
            setValue((prevValues) => {
              return { ...prevValues, email: e.target.value };
            });
          }}
        />
        <Input
          type="text"
          name="code"
          image={<BsChatSquareText />}
          placeholder="Code"
          onChange={(e) => {
            setValue((prevValues) => {
              return { ...prevValues, code: e.target.value };
            });
          }}
        />
        <div className="w-[100%] relative ">
          <Input
            type={visible ? "text" : "password"}
            name="new_password"
            image={<AiOutlineLock />}
            placeholder="Password"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, new_password: e.target.value };
              });
            }}
          />
          {visible ? (
            <div
              className="absolute cursor-pointer top-7 right-5"
              onClick={() => setVisible(!visible)}
            >
              <AiOutlineEyeInvisible size={20} color="rgb(137, 147, 156)" />
            </div>
          ) : (
            <div className="absolute cursor-pointer top-7 right-5">
              <AiOutlineEye
                size={20}
                color="rgb(137, 147, 156)"
                onClick={() => setVisible(!visible)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="signup-btn-err mt-5">
        {error?.data?.message?.email ? (
          <p className="error">{error?.data?.message?.email[0]}</p>
        ) : error?.data?.message?.new_password ? (
          <p className="error">{error?.data?.message?.new_password[0]}</p>
        ) : error?.data?.message?.code ? (
          <p className="error">{error?.data?.message?.code[0]}</p>
        ) : (
          <p className="error">{error?.data?.message}</p>
        )}
        <button className="btn sign_btn" type="submit">
          {isLoading ? <BeatLoader color="#36d7b7" /> : "Sign Up"}
        </button>
      </div>
    </form>
  );
}

export default ForgetPwdForm;
