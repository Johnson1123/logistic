import React from "react";
import { drivers } from "../../../../content/Fleet";
import "./Drivers.scss";

function Drivers() {
  return (
    <div className="content__wrapper">
      <div className="top__container flex">
        <p className="small-title">Drivers</p>
        <button className="add__driver">Add Driver</button>
      </div>
      <div className="scroll__container">
        <div className="title__container  box-shadow flex">
          <p className="small-title col-1">Name</p>
          <p className="small-title col-2">Status</p>
          <p className="small-title col-3">E-mail</p>
          <p className="small-title col-4">Mobile</p>
          <p className="small-title col-5">Cash payment</p>
        </div>
        <div className="data__container">
          {drivers.map((item, index) => {
            return (
              <div className="box flex" key={index}>
                <p className="p-text col-1">{item.name}</p>
                <p className="p-text col-2 ">
                  <span className="reject">{item.status}</span>
                </p>
                <p className="p-text col-3">{item.email}</p>
                <p className="p-text col-4">{item.phone}</p>
                <p className="p-text col-5 ">
                  <span className="success">{item.method}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Drivers;
