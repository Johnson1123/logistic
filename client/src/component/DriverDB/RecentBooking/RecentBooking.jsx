import React from "react";
import { recents } from "../../../content/recent";
import "./RecentBooking.scss";

function RecentBooking() {
  return (
    <div className="RecentBooking">
      <div className="col__title flex">
        <div className="p-text col-1">Date</div>
        <div className="p-text col-2">Time</div>
        <div className="p-text col-3">Address</div>
      </div>
      {recents.map((recent, index) => {
        return (
          <div className="recent__box flex" key={index}>
            <div className="box p-text col-1">{recent.date}</div>
            <div className="box p-text col-2">{recent.time}</div>
            <div className="box p-text col-3">{recent.address}</div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentBooking;
