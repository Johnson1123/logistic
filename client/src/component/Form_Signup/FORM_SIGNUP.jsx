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
  const resStatus =
    props.role === "driver"
      ? auth.registerDriverStatus
      : auth.registerCustomerStatus;
  const resError =
    props.role === "driver"
      ? auth.registerDriverError
      : auth.registerCustomerError;

  const handler = props.handler;

  const [values, setValue] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    if (Object.keys(error).length === 0 && isubmitted) {
      Dispatch(handler(values));
    }
    setIssubmitted(true);
  };

  useEffect(() => {
    if (
      auth.registerCustomerStatus === "success" ||
      auth.registerDriverStatus === "success"
    ) {
      navigate("/otp", { state: { user: props.role } });
    }
  }, [auth, navigate, isubmitted, error, Dispatch]);

  return (
    <form className="form_sign" onSubmit={handleSubmit}>
      <div className="flex input_group">
        <div className="input__group-inner">
          <Input
            type="text"
            name="username"
            className={error.username ? "error-border" : ""}
            image={<CiUser />}
            placeholder="Username"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, username: e.target.value };
              });
            }}
          />
          {error.username && <p className="error">{error.username}</p>}
        </div>
        <div className="input__group-inner">
          <Input
            type="email"
            name="email"
            className={error.email ? "error-border" : ""}
            image={<HiOutlineMail />}
            placeholder="Email Address"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, email: e.target.value };
              });
            }}
          />
          {error.email && <p className="error">{error.email}</p>}
        </div>
      </div>
      <div className="flex input_group">
        <div className="input__group-inner">
          <Input
            type="text"
            name="tell"
            className={error.phone ? "error-border" : ""}
            image={<BsTelephone />}
            placeholder="Telephone"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, phone: e.target.value };
              });
            }}
          />
          {error.phone && <p className="error">{error.phone}</p>}
        </div>
        <div className="input__group-inner">
          <Input
            type="password"
            name="pwd"
            className={error.password ? "error-border" : ""}
            image={<AiFillLock />}
            placeholder="Password"
            onChange={(e) => {
              setValue((prevValues) => {
                return { ...prevValues, password: e.target.value };
              });
            }}
          />
          {error.password && <p className="error">{error.password}</p>}
        </div>
      </div>

      <div className="flex signup-btn-err">
        {resStatus === "rejected" ? (
          <p className="error">{resError?.message}</p>
        ) : null}
        <button className="btn sign_btn" type="submit">
          {resStatus === "pending" ? <BeatLoader color="#36d7b7" /> : "Sign Up"}
        </button>
      </div>
    </form>
  );
}

export default FORM_SIGN;
