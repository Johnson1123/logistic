import React from "react";
import { Link } from "react-router-dom";
import {
  closeToggle,
  toggleMenu,
} from "../../features/toggleSlice/toggleSlice";
import { useDispatch } from "react-redux";

export default function DropLink(props) {
  const handler = props.handler;
  const Dispatch = useDispatch();
  const handleToggle = () => {
    Dispatch(closeToggle());
  };
  console.log();
  return (
    <li className="dropDown">
      <Link to={props.links} target="_blank">
        {props.label}
      </Link>
    </li>
  );
}
