import React from "react";
import { images } from "../../asset";
import "./ChargesBadge.scss";

function ChargesBadge() {
  return (
    <div className="Charges__container flex center">
      <img src={images.ChargesBadge} alt="" />
      <div className="charges__content">
        <h6 className="bold-text badge-title">No Hidden Charges</h6>
        <p className="text">we always follow a nornal fair price policy </p>
      </div>
    </div>
  );
}

export default ChargesBadge;
