import React from "react";
import { bookings } from "../../../../content/booking";
import "./BookingActivities.scss";
import { trips } from "../../../../content/trips";

function BookingActivities() {
  return (
    <div className="BookingActivities box-shadow">
      <div className="col__title flex">
        <div className="p-text col-1">Driver Name</div>
        <div className="p-text col-2"> Origin</div>
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
              <p
                className={
                  recent.takeOffPlace.length > 15
                    ? " p-text trucate name"
                    : " p-text"
                }
              >
                {recent.name}
              </p>
            </div>
            <div
              className={
                recent.takeOffPlace.length > 20
                  ? "box p-text col-2 trucate"
                  : "box p-text col-2"
              }
            >
              {recent.takeOffPlace}
            </div>
            <div
              className={
                recent.takeOffPlace.length > 20
                  ? "box p-text col-3 trucate"
                  : "box p-text col-3"
              }
            >
              {recent.destination}
            </div>
            <div
              className={
                recent.takeOffPlace.length > 20
                  ? "box p-text col-4 trucate"
                  : "box p-text col-4"
              }
            >
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
