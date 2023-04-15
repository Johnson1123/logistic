import React from "react";
import { Link } from "react-router-dom";
import "./Tabcontroller.scss";

function Tabcontroller(props) {
  return (
    <button className="Tabcontroller-btn p-text flex" onClick={props.handler}>
      {" "}
      {props.icon} {props.label}
    </button>
  );
}

export default Tabcontroller;
