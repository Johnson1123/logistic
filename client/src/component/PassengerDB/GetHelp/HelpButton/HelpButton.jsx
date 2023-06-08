import React from "react";
import "./HelpButton.scss";

import { FaAngleRight } from "react-icons/fa";

function HelpButton(props) {
  return (
    <button
      className={`help__button ${props.className} py-2 flex items-center`}
      onClick={props.handler}
    >
      <span className="w-[80%] text-left">{props.label}</span>
      <span>
        <FaAngleRight />
      </span>
    </button>
  );
}

export default HelpButton;
