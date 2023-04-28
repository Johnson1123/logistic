import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import "./Loginuser.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Loginuser(props) {
  const user = useSelector((state) => state.auth.user_id);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const handler = props.handler;
  useEffect(() => {
    if (user && props.role === "driver") {
      navigate("/tab");
    } else if (user && props.role === "customer") {
      navigate("/");
    }
  }, [user, Dispatch, navigate]);
  return (
    <div className="form__user">
      <p className="form-title">Welcome Back!</p>
      <p className="form-sm form-sub-title">
        Please fill in Your Accurate Information
      </p>
      <LoginForm role={props.role} />
      <p className="control__container">
        {props.role === "customer" ? (
          <Link className="form-sm p-text fw-500 role" to="/login/driver">
            Login as driver
          </Link>
        ) : (
          <Link className="form-sm p-text fw-500 role" to="/login/customer">
            Login as customer
          </Link>
        )}
        <span className="p-text fw-500">Or</span>
        <Link className="form-sm p-text fw-500 forget" to="/forgetpwd">
          Forget Password?
        </Link>
      </p>
    </div>
  );
}

export default Loginuser;
