import React from "react";
import { Link } from "react-router-dom";
import { closeToggle } from "../../features/toggleSlice/toggleSlice";
import { useDispatch } from "react-redux";

export default function DropLink(props) {
  const Dispatch = useDispatch();
  const handleToggle = () => {
    Dispatch(closeToggle());
  };
  return (
    <li className="dropDown">
      <Link to={props.links} target="_blank" onClick={handleToggle}>
        {props.label}
      </Link>
    </li>
  );
}
