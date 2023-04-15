import React from "react";
import "./HelpButton.scss";

import { FaAngleRight } from "react-icons/fa";

function HelpButton(props) {
  return (
    <button
      className={`help__button ${props.className}`}
      onClick={props.handler}
    >
      <span>{props.label}</span>
      <span>
        <FaAngleRight />
      </span>
    </button>
  );
}

export default HelpButton;
