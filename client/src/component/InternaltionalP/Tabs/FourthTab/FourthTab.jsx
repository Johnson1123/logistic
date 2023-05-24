import React from "react";
import FourthForm from "../../../Tabs/FouthForm/FourthForm";

import "./FourthTab.scss";

function FouthTab() {
  return (
    <div className="forthTab inter flex">
      <p className="form-title">Payment details</p>
      <p className="p-text forthTab-text">
        We need your payment details to pay you
      </p>
      <FourthForm />
    </div>
  );
}

export default FouthTab;
