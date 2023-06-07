import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import { HiOutlineMail } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

import "./Form_Sign.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { message } from "antd";

function FORM_SIGN(props) {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const [isubmitted, setIssubmitted] = useState(false);

  const [register, { isLoading, error }] = props.handleRegister;

  const [values, setValue] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const [inputError, setInputError] = useState("");
  const [open, setOpen] = useState(false);

  const validate = (formData) => {
    const formError = {};
    if (!formData.username) {
      formError.username = "Username is required";
    }
    if (!formData.phone && typeof formData.phone === "string") {
      formError.phone = "phone number is required";
    }
    const validEmail = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!formData.email || !validEmail.test(formData.email)) {
      formError.email = "Valid email is required";
    }
    // const validPass = new RegExp(
    //   new RegExp("(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.{6,})")
    // );
    if (!formData.password) {
      formError.password =
        "must contain Min.6 character, 1 lowercase, 1 UpperCase, and  1 number";
    }
    return formError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputError(validate(values));
    if (Object.keys(inputError).length === 0 && isubmitted) {
      const res = await register(values).unwrap();
      localStorage.setItem("userEmail", values.email);
      setOpen(true);
    }
    setIssubmitted(true);
  };

  useEffect(() => {
    if (open) {
      navigate("/otp", {
        state: {
          role: props.role,
        },
      });
    }
  }, [isubmitted, inputError, open]);

  return (
    <form className="form_sign" onSubmit={handleSubmit}>
      <div className="flex input_group">
        <div className="input__group-inner">
          <Input
            type="text"
            name="username"
            className={inputError.username ? "error-border" : ""}
            image={<CiUser />}
            placeholder="Username"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, username: e.target.value };
              });
            }}
          />
          {inputError.username && (
            <p className="error">{inputError.username}</p>
          )}
        </div>

        <div className="input__group-inner">
          <Input
            type="email"
            name="email"
            className={inputError.email ? "error-border" : ""}
            image={<HiOutlineMail />}
            placeholder="Email Address"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, email: e.target.value };
              });
            }}
          />
          {inputError.email && <p className="error">{inputError.email}</p>}
        </div>
      </div>

      <div className="flex input_group">
        <div className="input__group-inner">
          <Input
            type="text"
            name="tell"
            className={inputError.phone ? "error-border" : ""}
            image={<BsTelephone />}
            placeholder="Telephone"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, phone: e.target.value };
              });
            }}
          />
          {inputError.phone && <p className="error">{inputError.phone}</p>}
        </div>

        <div className="input__group-inner">
          <Input
            type="password"
            name="pwd"
            className={inputError.password ? "error-border" : ""}
            image={<AiFillLock />}
            placeholder="Password"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, password: e.target.value };
              });
            }}
          />
          {inputError.password && (
            <p className="error">{inputError.password}</p>
          )}
        </div>
      </div>

      <div className="flex signup-btn-err">
        {error && <p className="error">{error?.data?.message}</p>}
        <button className="btn sign_btn" type="submit">
          {isLoading ? <BeatLoader color="#36d7b7" /> : "Sign Up"}
        </button>
      </div>
    </form>
  );
}

export default FORM_SIGN;
