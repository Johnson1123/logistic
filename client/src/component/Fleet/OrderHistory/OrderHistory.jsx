import { Space } from "antd";
import React from "react";
import SelectComponent from "../Select/Select";
import "./OrderHistory.scss";

function OrderHistory() {
  const options = [
    {
      label: "January 2032",
      value: 1,
    },
    {
      label: "March 2032",
      value: 2,
    },
    {
      label: "febuary 2032",
      value: 3,
    },
    {
      label: "June 2032",
      value: 4,
    },
  ];
  return (
    <div className="Order">
      <div className="order__wrapper">
        <p className="title">Order history</p>
        <p className="p-text">
          Here you can download order history of your drivers.
        </p>
        <div className="content__wrapper flex">
          <div className="input__container flex">
            <Space wrap align split className="con">
              <div className="select__input">
                <p className="p-text">From</p>
                <SelectComponent options={options} className="size" />
              </div>
              <div className="select__input">
                <p className="p-text">To</p>

                <SelectComponent options={options} />
              </div>
              <div className="select__input">
                <p className="p-text">Driver</p>
                <SelectComponent options={options} />
              </div>
            </Space>
          </div>
          <a href="" download>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
