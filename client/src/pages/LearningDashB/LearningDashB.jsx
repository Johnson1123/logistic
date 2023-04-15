import React from "react";
import Bgnav from "../../component/BgNav/Bgnav";
import Mylearningbox from "../../component/Mylearningbox/Mylearningbox";
import "./LearningDashB.scss";

function LearningDashB() {
  return (
    <div className="LearningDashB flex">
      <Bgnav />
      <div className="LearningDashB__wrapper">
        <h3 className="form-title">MY LEARNING DASHBOARD</h3>
        <p className="p-text small-title">MY COURSES</p>
        <Mylearningbox />
      </div>
    </div>
  );
}

export default LearningDashB;
