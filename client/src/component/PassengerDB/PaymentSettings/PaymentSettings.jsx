import React from "react";
import "./PaymentSettings.scss";

import { images } from "../../../asset";

function PaymentSetting() {
  return (
    <div className="PaymentSettings">
      <p className="title">Payment Settings</p>
      <p className="small-title">
        Choose desired vehicle type. We offer cars suitable for most every day
        needs.
      </p>
      <div className="payment__con">
        <div className="payment box-shadow">
          <img src={images.master} alt="" />
          <div className="payment__content">
            <div className="p-text">**** **** **** 5467</div>
            <p className="p-text sm-text">Expires 09/25</p>
          </div>
          <div className="checked"></div>
        </div>
        <div className="payment box-shadow">
          <img src={images.visa} alt="" />
          <div className="payment__content">
            <div className="p-text">**** **** **** 5467</div>
            <p className="p-text sm-text">Expires 09/25</p>
          </div>
          <div className="checked"></div>
        </div>
        <div className="payment box-shadow">
          <img src={images.paypal} alt="" />
          <p className="p-text">technovix@gmail.com</p>
        </div>
        <div className="payment box-shadow">
          <img src={images.cash} alt="" />
          <p className="p-text">Cash</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSetting;
