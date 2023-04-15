import React, { useState } from "react";
import "./UsingRide.scss";

import { FaAngleLeft } from "react-icons/fa";
import { UsingRides } from "../../../../../content/AboutXcab";
import Overlay from "../../../../Overlay/Overlay";
import HelpButton from "../HelpButton";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

function UsingRide() {
  const navigate = useNavigate();
  const [idx, setidx] = useState(3);
  const [toggle, setToggle] = useState(false);
  const content = UsingRides.filter((item) => {
    return idx == item._id;
  });

  const handleContent = (n) => {
    setToggle(true);
    setidx(n);
  };
  const handleToggle = () => {
    setToggle(false);
  };

  return (
    <div className="PaymentPricing">
      <div className="title flex">
        <div
          className="arrow__back"
          onClick={() => navigate("/passengerdb/help/")}
        >
          <FaAngleLeft />
        </div>
        Payment and pricing
      </div>
      <div className="btn__container">
        <div className="AccountData">
          {UsingRides.map((data) => {
            return (
              <HelpButton
                label={data.title}
                handler={() => handleContent(data._id)}
                className="mt-1"
              />
            );
          })}
        </div>
        {toggle && <Overlay />}
        {toggle && <Modal content={content[0]} handler={handleToggle} />}
      </div>
    </div>
  );
}

export default UsingRide;
