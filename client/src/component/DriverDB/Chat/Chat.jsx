import React from "react";
import { charts } from "../../../content/chart";
import "./Chat.scss";
import { recents } from "../../../content/recent";

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
              <p
                className={
                  chart.name.length > 15
                    ? "small-title name trucate"
                    : "small-title name"
                }
              >
                {chart.name}
              </p>
              <p className="message">{chart.lMessage}</p>
            </div>
            <div className="box p-text col-3">{chart.time}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Chat;
