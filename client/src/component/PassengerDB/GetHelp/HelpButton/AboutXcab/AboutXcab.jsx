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
          onClick={() => navigate("/customer/help/")}
        >
          <FaAngleLeft />
        </div>
        <p> About XLCAB?</p>
      </div>
      <HelpButton
        label="How do I book a ride with XLCAB?"
        className="mt-2"
        handler={() => handleContent(1)}
      />
      <HelpButton
        label="What types of vehicles does XLCAB offer?"
        handler={() => handleContent(2)}
      />
      <HelpButton
        label="Can I request a specific driver for my ride?"
        handler={() => handleContent(3)}
      />
      {toggle && <Overlay />}
      {toggle && <Modal content={content[0]} handler={handleToggle} />}
    </div>
  );
}

export default AboutXcab;
