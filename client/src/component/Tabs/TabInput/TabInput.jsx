import React from "react";
import "./TabInput.scss";

function TabInput(props) {
  return (
    <div className="flex input__container">
      <p className="form-text">{props.label}</p>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TabInput;
