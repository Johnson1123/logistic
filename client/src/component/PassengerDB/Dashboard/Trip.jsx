import React from "react";
import Upcoming from "../Trip/Upcoming";
import "./Trip.scss";

function Trip() {
  return (
    <div className="Trip">
      <p className="title">My Trips</p>
      <div className="control__con box-shadow flex">
        {["Upcoming", "Completed", "Canceled"].map((control) => {
          return (
            <button className="control-btn p-text" key={control}>
              {control}
            </button>
          );
        })}
      </div>
      <div className="scroll__container">
        <Upcoming />
      </div>
    </div>
  );
}

export default Trip;
