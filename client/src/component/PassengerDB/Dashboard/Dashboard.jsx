import React from "react";
import "./Dashboard.scss";
import Chat from "../../DriverDB/Chat/Chat";
import Review from "../../DriverDB/Review/Review";
import RecentActivities from "./RecentActivities/RecentActivities";
import BookingActivities from "./BookingActivities/BookingActivities";

function Dashboard() {
  return (
    <div className="Dashboard flex">
      <div className="left__content">
        <div className="badge__con flex">
          <div className="first__badge badge box-shadow flex">
            <div className="badge__content">
              <p className="badge__title">Number of Booking Completed</p>
              <p className="badge__para">
                32/<small>57</small>
              </p>
            </div>
            <div className="badge__span"></div>
          </div>
          <div className="second__badge box-shadow badge">
            <p className="badge__title">Number of Bookings Canceled</p>
            <p className="p-text badge__para">
              25/<small>25</small>
            </p>
          </div>
        </div>
        <div className="recent__act">
          <RecentActivities />
        </div>
        <p className="recent-booking-text title">Recent Booking</p>
        <div className="booking__activities">
          <BookingActivities />
        </div>
      </div>
      <div className="chart__group flex">
        <Chat />
        <Review />
      </div>
    </div>
  );
}

export default Dashboard;
