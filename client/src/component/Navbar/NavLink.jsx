import React from "react";
import { TfiAngleRight } from "react-icons/tfi";

export default function NavLink(props) {
  return (
    <div className="menu__item flex">
      <li className="link normal-text">{props.label}</li>
      <TfiAngleRight />
    </div>
  );
}
