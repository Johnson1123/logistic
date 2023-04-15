import React from "react";

import FirstForm from "../../../Tabs/FirstForm/FirstForm";
import "./FirstTab.scss";

function FirstTab() {
  return (
    <div className="firstTab flex">
      <p className="form-bold p-text">
        Personal information and vehicle details
      </p>
      <p className="form-text p-text">
        Only your first name and vehicle details are visible to clients during
        the booking
      </p>
      <FirstForm />
    </div>
  );
}

export default FirstTab;
