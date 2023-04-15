import React from "react";
import ThirdForm from "../../../Tabs/ThirdForm/ThirdForm";

import "./ThirdTab.scss";

function ThirdTab() {
  return (
    <div className="thirdTab flex">
      <p className="form-bold ">Documents</p>
      <p className="p-text thirdTab-text">
        We are legally requred to ask you for some documents to sign you up as a
        driver. Documents scans and quality photos are accepted.
      </p>
      <ThirdForm />
    </div>
  );
}

export default ThirdTab;
