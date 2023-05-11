import React from "react";
import { recentActivities } from "../../../../content/recent";
import "./RecentActivities.scss";
import { trips } from "../../../../content/trips";

function RecentActivities() {
  const completedRide = trips.filter(
    (item) => item.ride_status === "completed"
  );

  return (
    <div className="RecentActivities box-shadow">
      <div className="col__title flex">
        <div className="p-text col-1">Date</div>
        <div className="p-text col-2">Email</div>
        <div className="p-text col-3">Today</div>
        <div className="p-text col-4">Status</div>
      </div>
      {completedRide.map((activity, index) => {
        return (
          <div className="recent__box flex" key={index}>
            <div className="box p-text col-1">{activity.date.slice(0, 25)}</div>
            <div className="box p-text col-2">
              {activity.takeOffPlace.slice(0, 25)}
            </div>
            <div className="box p-text col-3">
              {activity.destination.slice(0, 25)}
            </div>
            <div className="box p-text col-4">
              {activity.ride_status.slice(0, 25)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentActivities;
