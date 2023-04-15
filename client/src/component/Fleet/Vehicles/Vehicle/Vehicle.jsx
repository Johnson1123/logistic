import React from "react";
import { vehicle } from "../../../../content/Fleet";
import "./Vehicle.scss";

function Vehicle() {
  return (
    <div className="Vehicle__wrapper">
      <div className="top__container flex">
        <p className="small-title">Drivers</p>
        <button className="add__driver">Add Vehicle</button>
      </div>
      <div className="scroll__container">
        <div className="title__container  box-shadow flex">
          <p className="small-title col-1">Name</p>
          <p className="small-title col-2">Status</p>
          <p className="small-title col-3">Mobile</p>
        </div>
        <div className="data__container">
          {vehicle.map((item, index) => {
            return (
              <div className="box flex" key={index}>
                <p className="p-text col-1">{item.name}</p>
                <p className="p-text col-2 ">
                  <span className="reject">{item.status}</span>
                </p>
                <p className="p-text col-3">{item.plate}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
