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
    <div className="GetHelp py-4 px-4">
      <p className="title">Browse help topics</p>
      <HelpButton
        label="How do I book a ride with XLCAB?"
        handler={() => handleNavigate("ride")}
      />
      {/* <HelpButton
        label="App and Features"
        handler={() => handleNavigate("app")}
      /> */}
      <HelpButton
        label="XCLEB Security"
        handler={() => handleNavigate("account")}
      />
      <HelpButton
        label="Payments and pricing"
        handler={() => handleNavigate("payment")}
      />
      {/* <HelpButton
        label="Using XLCAB Rid"
        handler={() => handleNavigate("using/ride")}
      /> */}
    </div>
  );
}

export default GetHelp;
