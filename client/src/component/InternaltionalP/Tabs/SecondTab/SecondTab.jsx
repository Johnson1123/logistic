import React from "react";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import TabInput from "../../../Tabs/TabInput/TabInput";

import "./SecondTab.scss";

function SecondTab() {
  return (
    <div className="secondTab flex">
      <p className="form-bold fw-700">Private and licensing details</p>
      <p className="small-title p-text">
        Your national ID and license details will be kept private
      </p>
      <TabInput label="Driver license" placeholder="AB235235" type="text" />
      <p className="form-text license-text">
        License Number on your driver’s documents
      </p>
      <SignupBtn label="PROCEED" />
    </div>
  );
}

export default SecondTab;
