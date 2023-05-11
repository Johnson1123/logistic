import React from "react";
import { bookings } from "../../../../content/booking";
import "./BookingActivities.scss";
import { trips } from "../../../../content/trips";

function BookingActivities() {
  return (
    <div className="BookingActivities box-shadow">
      <div className="col__title flex">
        <div className="p-text col-1">Driver Name</div>
        <div className="p-text col-2">Place of Origin</div>
        <div className="p-text col-3">Destination</div>
        <div className="p-text col-3">Time</div>
        <div className="p-text col-5">Status</div>
      </div>
      {trips.map((recent, index) => {
        return (
          <div className="booking__box flex" key={index}>
            <div className="box p-text col-1 flex">
              <div className="img__con">
                <img src={recent.image} alt="" />
              </div>
              <p className="p-text">{recent.name}</p>
            </div>
            <div className="box p-text col-2">
              {recent.takeOffPlace.slice(0, 20)}
            </div>
            <div className="box p-text col-3">
              {recent.destination.slice(0, 20)}
            </div>
            <div className="box p-text col-3">
              {recent.takeOffTime} - {recent.arrivalTime}
            </div>
            <div className="box p-text col-5">{recent.ride_status}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BookingActivities;
