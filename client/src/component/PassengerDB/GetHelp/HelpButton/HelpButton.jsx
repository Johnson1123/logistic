import React from "react";
import "./HelpButton.scss";

import { FaAngleRight } from "react-icons/fa";

function HelpButton(props) {
  return (
    <button
      className={`w-[90%] py-2 flex items-center justify-between 800px:w-[50%]`}
      onClick={props.handler}
    >
      <span className="w-[80%] text-left 800px:my-4">{props.label}</span>
      <span>
        <FaAngleRight />
      </span>
    </button>
  );
}

export default HelpButton;
