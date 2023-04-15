import React from "react";
import "./Upcoming.scss";

import { trips } from "../../../content/trips";
import { ImLocation } from "react-icons/im";

function Upcoming() {
  return (
    <div className="Upcoming">
      <div className="col__title flex">
        <div className="p-text col-1">Full Name</div>
        <div className="p-text col-2">Full Cost</div>
        <div className="p-text col-3">Location</div>
        <div className="p-text col-4">Arrival Time</div>
        <div className="p-text col-5">Date</div>
      </div>
      {trips.map((trip, index) => {
        return (
          <div className="trip__box flex box-shadow" key={trip._id}>
            <div className="box p-text col-1 flex">
              <div className="img__con">
                <img src={trip.image} alt="" />
              </div>
              <div className="user__name-rating">
                <p className="p-text">{trip.name}</p>
                <div className="rating">{trip.rating}</div>
              </div>
            </div>
            <div className="box p-text col-2">{trip.cost}</div>
            <div className="box p-text col-3 flex">
              <div className="location__icon flex">
                <ImLocation />
                <span></span>
                <span></span>
                <span></span>
                <div className="location__box"></div>
              </div>
              <div className="col__content-3">
                <div className="pickUp flex">
                  <span>{trip.takeOffPlace}</span>
                  <span className="sm-text">{trip.takeOffTime}</span>
                </div>
                <div className="destination flex">
                  <span>{trip.destination}</span>
                  <span className="sm-text">{trip.arrivalTime}</span>
                </div>
              </div>
            </div>
            <div className="box p-text col-4">{trip.arrivalTime}</div>
            <div className="box p-text col-5 sm-text">{trip.date}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Upcoming;
