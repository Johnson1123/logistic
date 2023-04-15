import React from "react";
import { recentActivities } from "../../../../content/recent";
import "./RecentActivities.scss";

function RecentActivities() {
  return (
    <div className="RecentActivities box-shadow">
      <div className="col__title flex">
        <div className="p-text col-1">Name</div>
        <div className="p-text col-2">Email</div>
        <div className="p-text col-3">Today</div>
        <div className="p-text col-4">Processing</div>
      </div>
      {recentActivities.map((activity, index) => {
        return (
          <div className="recent__box flex" key={index}>
            <div className="box p-text col-1">{activity.name}</div>
            <div className="box p-text col-2">{activity.email}</div>
            <div className="box p-text col-3">{activity.Date}</div>
            <div className="box p-text col-4">{activity.Processing}</div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentActivities;
