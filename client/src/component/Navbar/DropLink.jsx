import React from "react";
import { Link } from "react-router-dom";
import { closeToggle } from "../../features/toggleSlice/toggleSlice";
import { useDispatch } from "react-redux";

export default function DropLink(props) {
  const Dispatch = useDispatch();
  return (
    <li className="dropDown" onClick={() => Dispatch(closeToggle())}>
      <Link to={props.links} target="_blank">
        {props.label}
      </Link>
    </li>
  );
}
