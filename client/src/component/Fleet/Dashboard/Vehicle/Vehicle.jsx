import React from "react";
import { vehicle } from "../../../../content/Fleet";
import "./Vehicle.scss";

function Vehicle() {
  return (
    <div className="dashboard__vehicle box-shadow">
      <p className="title">Vehicle</p>
      <div className="vehicle__con">
        <div className="vehicle__header flex box-shadow">
          <p className="small-title col-1">Model</p>
          <p className="small-title col-2">Status</p>
        </div>
        <div className="vehicleList__content">
          {vehicle.map((item, index) => {
            return (
              <div className="vehicle flex" key={index}>
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

export default Vehicle;
