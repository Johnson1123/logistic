import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetHelp.scss";

import HelpButton from "./HelpButton/HelpButton";

function GetHelp() {
  const navigate = useNavigate();
  const handleNavigate = (n) => {
    return navigate(n);
  };
  return (
    <div className="GetHelp px-4">
      <p className="title">Get Help</p>
      <p className="text-md font-bold my-3">How can we help?</p>
      <HelpButton label="Customer services" />
      <p className="text-md font-bold my-3">Get help with something else?</p>
      <HelpButton
        label="How do I book a ride with XLCAB?"
        handler={() => handleNavigate("become/driver")}
      />
      <HelpButton
        label="App and Features"
        handler={() => handleNavigate("app")}
      />
      <HelpButton
        label="XCLEB Security"
        handler={() => handleNavigate("account")}
      />
      <HelpButton
        label="Payments and pricing"
        handler={() => handleNavigate("payment")}
      />
      <HelpButton
        label="Using XLCAB Rid"
        handler={() => handleNavigate("using/ride")}
      />
    </div>
  );
}

export default GetHelp;
