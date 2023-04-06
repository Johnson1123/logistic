import React from "react";
import DropLink from "../../DropLink";
import { motion } from "framer-motion";

function Company() {
  return (
    <ul className="menu__drop box-shadow">
      <DropLink label="About" />
      <DropLink label="Services" />
      <DropLink label="Testimonial" />
      <DropLink label="App Features" />
      <DropLink label="Our Brand" />
    </ul>
  );
}

export default Company;
