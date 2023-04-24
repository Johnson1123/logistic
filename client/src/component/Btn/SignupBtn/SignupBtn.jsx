import React from "react";
import "./SignupBtn.scss";

function SignupBtn(props) {
  return (
    <button
      onClick={props.handler}
      type={props.type}
      className={`sign-btn flex ${props.className}`}
    >
      {props.label}
    </button>
  );
}

export default SignupBtn;
