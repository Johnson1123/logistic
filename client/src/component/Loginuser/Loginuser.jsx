import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import "./Loginuser.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Loginuser() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.user_id) {
      navigate("/");
    }
  }, [auth.user_id]);
  return (
    <div className="form__user">
      <p className="form-title">Welcome Back!</p>
      <p className="form-sm form-sub-title">
        Please fill in Your Accurate Information
      </p>
      <LoginForm />
      <p className="forget">
        <Link className="form-sm p-text fw-500 forget" to="/forgetpwd">
          Forget Password?
        </Link>
      </p>
    </div>
  );
}

export default Loginuser;
