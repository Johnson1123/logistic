import React from "react";
import "./HelpButton.scss";

import { FaAngleRight } from "react-icons/fa";

function HelpButton(props) {
  return (
    <button
      className={`help__button flex w-[90%] justify-between items-center my-4 cursor-pointer`}
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
