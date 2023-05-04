import React, { useState } from "react";
import "./PaymentPricing.scss";

import { FaAngleLeft } from "react-icons/fa";
import { PaymentPrice } from "../../../../../content/AboutXcab";
import Overlay from "../../../../Overlay/Overlay";
import HelpButton from "../HelpButton";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

function PaymentPricing() {
  const navigate = useNavigate();
  const [idx, setidx] = useState(3);
  const [toggle, setToggle] = useState(false);
  const content = PaymentPrice.filter((item) => {
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
        <p>Payment and pricing</p>
      </div>
      <div className="btn__container">
        <div className="AccountData">
          {PaymentPrice.map((data) => {
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

export default PaymentPricing;
