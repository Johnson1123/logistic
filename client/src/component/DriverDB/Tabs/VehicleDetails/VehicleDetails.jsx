import React from "react";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import TabInput from "../../../Tabs/TabInput/TabInput";
import "./VehicleDetails.scss";

function VehicleDetails() {
  return (
    <div className="VehicleDetails">
      <h4 className="title">Driver vehicle</h4>
      <p className="small-title text fw-300">
        Driver can currently select this vehicle in the app.
      </p>
      <form action="" className="form__con">
        <div className="input__group">
          <TabInput
            type="text"
            label="Model"
            placeholder="Toyota C-HR"
            name="Model"
          />
          <TabInput type="text" label="Year" placeholder="2022" name="year" />
        </div>
        <div className="input__group">
          <TabInput
            type="text"
            label="Number plate"
            placeholder="GG-081-JW"
            name="plate"
          />
          <TabInput type="text" label="Seat" placeholder="4" name="seat" />
        </div>
        <SignupBtn label="Save" />
      </form>
    </div>
  );
}

export default VehicleDetails;
