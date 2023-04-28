import React from "react";
import DropLink from "../../DropLink";
import { useDispatch } from "react-redux";
import {
  closeToggle,
  toggleMenu,
} from "../../../../features/toggleSlice/toggleSlice";

function Company() {
  const Dispatch = useDispatch();
  return (
    <ul
      className="menu__drop box-shadow"
      onClick={() => Dispatch(closeToggle())}
    >
      <DropLink
        label="About"
        links="about"
        handleToggle={() => Dispatch(toggleMenu())}
      />
      <DropLink
        label="Service"
        links="service"
        onClick={() => Dispatch(closeToggle())}
      />
      <DropLink label="Testimonial" onClick={() => Dispatch(closeToggle())} />
      <DropLink label="App Features" onClick={() => Dispatch(closeToggle())} />
      <DropLink label="Our Brand" onClick={() => Dispatch(closeToggle())} />
    </ul>
  );
}

export default Company;
