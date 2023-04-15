import React, { useState } from "react";
import { drivers } from "../../../content/Fleet";
import Application from "./Application/Application";
import Drivers from "./Drivers/Drivers";
import "./DriversList.scss";
import Fleet from "./Fleet/Fleet";

function DriversList() {
  const [tab, setTab] = useState(0);
  return (
    <div className="DriversList">
      <div className="driverList__wrapper">
        <p className="title">Drivers</p>
        <p className="p-text">Here you see overview of your drivers.</p>
        <div className="driverList__content">
          <div className="controls__container">
            {["Drivers", "Fleet drivers", "Applications"].map((item, index) => {
              return (
                <button
                  className="control-btn active"
                  key={index}
                  onClick={() => setTab(index)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {tab == 0 && <Drivers />}
          {tab == 1 && <Fleet />}
          {tab && 2 && <Application />}
        </div>
      </div>
    </div>
  );
}

export default DriversList;
