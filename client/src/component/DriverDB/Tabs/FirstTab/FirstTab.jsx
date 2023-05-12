import React from "react";
import { images } from "../../../../asset";
import Badges from "../../../Badges/Badges";
import Booking from "../../Booking/Booking";
import Chat from "../../Chat/Chat";
import RecentBooking from "../../RecentBooking/RecentBooking";
import Review from "../../Review/Review";
import "./FirstTab.scss";
import Chart from "react-google-charts";
import ChartLine from "../../../ChartLine/ChartLine";
import { trips } from "../../../../content/trips";

const LineData = [
  ["x", "", "cats"],
  ["Mon", 0, 0],
  ["Tue", 10, 5],
  ["Wed", 23, 15],
  ["Thr", 17, 9],
  ["Fri", 18, 10],
  ["Sat", 9, 5],
  ["Sun", 11, 3],
];
const LineChartOptions = {
  series: {
    1: { curveType: "function" },
  },
};
// const data = "";
function FirstTab() {
  const totalRide = trips.length;
  const canceledRide = trips.filter((item) => item.ride_status === "canceled");
  const acceptedRide = trips.filter((item) => item.ride_status === "completed");
  const data = trips.filter((item) => item.ride_status === "completed");
  const numCanceledRide = canceledRide.length;
  const numAcceptedRide = acceptedRide.length;
  return (
    <div className="FirstTab flex">
      <div className="left__content">
        <div className="badge__con flex">
          <Badges
            duration="This Week Income"
            amount="0"
            balance="BALANCE"
            color="#f3f3f3"
          />
          <Badges
            numAccepted={`${numAcceptedRide}/`}
            total={totalRide}
            text="Number of Booking Accepted"
            color="#3AB54A"
          />
          <Badges
            numAccepted={`${numCanceledRide}/`}
            total={`${totalRide}`}
            text="Number of Bookings Denied"
            color="red"
          />
        </div>
        <div className="graph__group flex">
          <div className="graph__con">
            <div className="chart box-shadow">
              <ChartLine />
            </div>
          </div>
          <div className="recent__ride box-shadow">
            {!data ? (
              <p className="p-text title flex empty-ride">No Recent ride</p>
            ) : (
              <p className="p-text title">Recent Rides</p>
            )}
            {data && <RecentBooking />}
          </div>
        </div>

        {!data ? (
          <p className="recent-booking-text title">no booking yet</p>
        ) : (
          <>
            <p className="recent-booking-text title">Recent Booking</p>
            <div className="scroll__container">
              <Booking />
            </div>
          </>
        )}
      </div>

      <div className="chart__group flex">
        <Chat />
        <Review />
      </div>
    </div>
  );
}

export default FirstTab;
