import React, { useState } from "react";

import "./AppFeatures.scss";

import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Appfeatures } from "../../../../../content/AboutXcab";

import Overlay from "../../../../Overlay/Overlay";
import HelpButton from "../HelpButton";
import Modal from "../Modal/Modal";

function AppFeatures() {
  const navigate = useNavigate();
  const [idx, setidx] = useState(0);
  const [toggle, setToggle] = useState(false);
  const content = Appfeatures.filter((item) => {
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
    <div className="AppFeatures">
      <div className="title flex">
        <div
          className="arrow__back"
          onClick={() => navigate("/customer/help/")}
        >
          <FaAngleLeft />
        </div>
        App and Features
      </div>
      <div className="btn__container">
        <div className="AboutXcab">
          {Appfeatures.map((AppFeature) => {
            return (
              <HelpButton
                label={AppFeature.title}
                handler={() => handleContent(AppFeature._id)}
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

export default AppFeatures;
