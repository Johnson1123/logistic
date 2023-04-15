import React, { useState } from "react";
import Application from "./Application/Application";
import Vehicle from "./Vehicle/Vehicle";
import "./Vehicles.scss";

function Vehicles() {
  const [tab, setTab] = useState("Vehicles");
  return (
    <div className="Vehicles">
      <div className="Vehicles__wrapper">
        <p className="title">Drivers</p>
        <p className="p-text">Here you see overview of your drivers.</p>
        <div className="Vehicles__content">
          <div className="controls__container">
            {["Vehicles", "Applications"].map((item, index) => {
              return (
                <button
                  className="control-btn active"
                  key={index}
                  onClick={() => setTab(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {tab == "Vehicles" && <Vehicle />}
          {tab == "Applications" && <Application />}
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
