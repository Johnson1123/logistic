import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import "./Loginuser.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Loginuser(props) {
  const user = useSelector((state) => state.auth.user_id);
  const auth = useSelector((state) => state.auth);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const handler = props.handler;
  useEffect(() => {
    if (user && props.role === "driver") {
      navigate("/tab");
    } else if (user && props.role === "customer") {
      navigate("/customer");
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
          <span
            className="form-sm p-text fw-500 role link"
            onClick={() => navigate("/login/driver")}
          >
            Login as driver
          </span>
        ) : (
          <span
            className="form-sm p-text fw-500 role link"
            onClick={() => navigate("/login/customer")}
          >
            Login as customer
          </span>
        )}
        <span className="p-text fw-500">Or</span>
        <span
          className="form-sm p-text fw-500 forget link"
          onClick={() => navigate("/forgetpwd")}
        >
          Forget Password?
        </span>
      </p>
      <p className="not_have_account p-text">
        <span>Don't have Account?</span>
        <span onClick={() => navigate(`/signUp`)} className="link">
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Loginuser;
