import React from "react";
import Upcoming from "../Trip/Upcoming";
import "./Trip.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCustomerTrip } from "../../../features/toggleSlice/toggleSlice";

function Trip() {
  const Dispatch = useDispatch();
  const tripParams = useSelector((state) => state.toggleReducer.trip);

  return (
    <div className="Trip">
      <p className="title">My Trips</p>
      <div className="control__con box-shadow flex">
        {["upcoming", "completed", "canceled"].map((control) => {
          return (
            <button
              className={`
                ${
                  tripParams === control
                    ? "control-btn p-text active"
                    : "control-btn p-text"
                }
                text-sm
                font-light
              `}
              key={control}
              onClick={() => Dispatch(setCustomerTrip(control))}
            >
              {control.toUpperCase()}
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
