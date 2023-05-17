import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Tabcontroller.scss";
import { Dashboard } from "../../PassengerDB";

function Tabcontroller(props) {
  return (
    <button
      className={
        props?.active === props?.href
          ? "Tabcontroller-btn p-text flex active"
          : "Tabcontroller-btn p-text flex"
      }
      onClick={props.handler}
    >
      {props.icon} {props.label}
    </button>
  );
}

export default Tabcontroller;
