import React from "react";
import { fleetDrivers } from "../../../../content/Fleet";
import "./Fleet.scss";

function Fleet() {
  return (
    <div className="fleetDriver">
      <div className="top__container flex">
        <p className="small-title">Drivers</p>
        <button className="add__driver">Add Driver</button>
      </div>
      <div className="scroll__container">
        <div className="title__container  box-shadow flex">
          <p className="small-title col-1">Name</p>
          <p className="small-title col-2">Driver score</p>
          <p className="small-title col-3">Finished orders</p>
          <p className="small-title col-4">Total acceptance</p>
          <p className="small-title col-5">Required acceptance</p>
          <p className="small-title col-6">Online hours</p>
        </div>
        <div className="data__container">
          {fleetDrivers.map((item, index) => {
            return (
              <div className="box flex" key={index}>
                <p className="p-text col-1">{item.name}</p>
                <p className="p-text col-2 ">{item.order}</p>
                <p className="p-text col-3">{item.score}</p>
                <p className="p-text col-4">{item.total}</p>
                <p className="p-text col-5 ">{item.required}</p>
                <p className="p-text col-6 ">
                  <span>{`${item.hour}h`}</span>
                  <span>{`${item.min}mins`}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Fleet;
