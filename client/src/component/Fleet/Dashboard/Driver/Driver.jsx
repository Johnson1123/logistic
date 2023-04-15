import React from "react";

import "./Driver.scss";
import { drivers } from "../../../../content/Fleet";

function Driver() {
  return (
    <div className="dashboard__driver box-shadow">
      <p className="title">Drivers</p>
      <div className="driver__con">
        <div className="driver__header flex box-shadow">
          <p className="small-title col-1">Name</p>
          <p className="small-title col-2">Status</p>
        </div>
        <div className="driverList__content">
          {drivers.map((item, index) => {
            return (
              <div className="driver flex" key={index}>
                <p className="bold-text col-1">{item.name}</p>
                <p className="bold-text col-2">
                  <span className="disable">{item.status}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Driver;
