import React from "react";

import "./Dashboard.scss";
import { drivers } from "../../../content/Fleet";
import Driver from "./Driver/Driver";
import Vehicle from "./Vehicle/Vehicle";
import Chat from "../../DriverDB/Chat/Chat";
import Chart from "react-google-charts";

function Dashboard() {
  const LineData = [
    ["x", "dogs", "cats"],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
  ];
  const LineChartOptions = {
    series: {
      1: { curveType: "function" },
    },
  };
  return (
    <div className="fleetDashboard">
      <p className="p-text">
        Here you see overview of your drivers and vehicles.
      </p>
      <div className="fleet__wrapper">
        <div className="top__sec">
          <div className="topItem__wrapper">
            <Driver />
          </div>
          <div className="topItem__wrapper">
            <Vehicle />
          </div>
        </div>
        <div className="bottom__sec">
          <div className="bottomItem__wrapper">
            <Chart
              width={"400px"}
              height={"300px"}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={LineData}
              options={LineChartOptions}
              rootProps={{ "data-testid": "2" }}
            />
          </div>
          <div className="bottomItem__wrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
