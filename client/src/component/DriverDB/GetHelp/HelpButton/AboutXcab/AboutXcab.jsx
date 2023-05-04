import React, { useState } from "react";
import "./AboutXcab.scss";

import HelpButton from "../HelpButton";
import { FaAngleLeft } from "react-icons/fa";
import Overlay from "../../../../Overlay/Overlay";
import Modal from "../Modal/Modal";
import { aboutRides } from "../../../../../content/AboutXcab";
import { useNavigate } from "react-router-dom";

function AboutXcab() {
  const navigate = useNavigate();
  const [idx, setidx] = useState(3);
  const [toggle, setToggle] = useState(false);
  const content = aboutRides.filter((item) => {
    return idx == item._id;
  });

  const handleContent = (n) => {
    console.log(idx);
    setToggle(true);
    setidx(n);
  };
  const handleToggle = () => {
    setToggle(false);
  };

  return (
    <div className="AboutXcab">
      <div className="title flex">
        <div
          className="arrow__back"
          onClick={() => navigate("/passengerdb/help/")}
        >
          <FaAngleLeft />
        </div>
        <p> About XLCAB?</p>
      </div>
      <HelpButton
        label="How do I become a driver with XLCAB?"
        className="mt-2"
        handler={() => handleContent(1)}
      />
      <HelpButton
        label="What types of vehicles can I use to drive for XLCAB?"
        handler={() => handleContent(2)}
      />
      <HelpButton
        label="How do I get paid for driving with XLCAB?"
        handler={() => handleContent(3)}
      />
      {toggle && <Overlay />}
      {toggle && <Modal content={content[0]} handler={handleToggle} />}
    </div>
  );
}

export default AboutXcab;
