import React from "react";
import { images } from "../../asset";
import "./Input.scss";

function Input(props) {
  return (
    <div className={`flex input__con ${props.className}`}>
      <i>{props.image}</i>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={"props.name"}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
