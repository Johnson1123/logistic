import React from "react";
import { charts } from "../../../content/chart";
import "./Chat.scss";

function Chat() {
  return (
    <div className="chart__con box-shadow">
      <p className="title p-text">Chart</p>
      {charts.map((chart, index) => {
        return (
          <div className="chart__box flex" key={index}>
            <div className="box p-text col-1">
              <img src={chart.image} alt={chart.name} />{" "}
              <div className="dot"></div>
            </div>
            <div className="box p-text col-2">
              <p className="small-title">{chart.name}</p>
              <p>{chart.lMessage}</p>
            </div>
            <div className="box p-text col-3">{chart.time}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Chat;
