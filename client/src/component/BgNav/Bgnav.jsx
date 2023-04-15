import React from "react";
import { images } from "../../asset";
import { Link } from "react-router-dom";
import "./Bgnav.scss";

function Bgnav() {
  return (
    <div className="Form__navbar">
      <Link to="/" className="form__logo">
        <img src={images.logo} alt="" />
      </Link>
    </div>
  );
}

export default Bgnav;
