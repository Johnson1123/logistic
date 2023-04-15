import React from "react";
import { bookings } from "../../../../content/booking";
import "./BookingActivities.scss";

function BookingActivities() {
  return (
    <div className="BookingActivities box-shadow">
      <div className="col__title flex">
        <div className="p-text col-1">Full Name</div>
        <div className="p-text col-2">Contact</div>
        <div className="p-text col-3">Time</div>
        <div className="p-text col-4">Status</div>
      </div>
      {bookings.map((recent, index) => {
        return (
          <div className="booking__box flex" key={index}>
            <div className="box p-text col-1 flex">
              <div className="img__con">
                <img src={recent.image} alt="" />
              </div>
              <p className="p-text">{recent.name}</p>
            </div>
            <div className="box p-text col-2">{recent.email}</div>
            <div className="box p-text col-3">{recent.time}</div>
            <div className="box p-text col-4">{recent.status}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BookingActivities;
