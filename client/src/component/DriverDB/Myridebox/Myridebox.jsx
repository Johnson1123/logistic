import React from "react";
import { myrides } from "../../../content/myride";
import "./Myridebox.scss";
import { IoLocationSharp } from "react-icons/io5";

function Myridebox() {
  return (
    <div className="Myridebox">
      {myrides.map((ride, index) => {
        return (
          <div className="ride flex" key={index}>
            <div className="left__box">
              <div className="p-text flex">
                <div className="location_icon">
                  <IoLocationSharp />
                </div>
                <p className="p-text fw-500 address">{ride.address}</p>
              </div>
              <div className="left__con flex">
                <div className="p-text">
                  <p className="p-text fw-500">Payment:</p>
                  <p className="p-text payment-method">{ride.payment}</p>
                </div>
                <div className="p-text t-center">
                  <p className="p-text fw-500">Distance:</p>
                  <p className="p-text distance">{ride.distance}</p>
                </div>
              </div>
            </div>
            <div className="right__box flex">
              <div className="p-text">{ride.date}</div>
              <p className="p-text status fw-500">{ride.status}</p>
              <p className="p-text price fw-900">${ride.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Myridebox;
