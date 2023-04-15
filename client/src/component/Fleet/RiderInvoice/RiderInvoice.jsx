import { Select } from "antd";
import React from "react";
import { riderinvoices } from "../../../content/invoices";
import InputDropGroup from "../../InputDropGroup/InputDropGroup";
import SelectComponent from "../Select/Select";
import "./RiderInvoice.scss";

function RiderInvoice() {
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
    <div className="FRiderInvoice ">
      <div className="FRiderInvoice__wrapper">
        <p className="title">Rider Invoices</p>
        <p className="p-text">
          Invoices that have been issued to riders from you.
        </p>
        <div className="input__con flex">
          <SelectComponent options={options} className="size" />
          <SelectComponent options={options} className="size" />
          <SelectComponent options={options} className="size" />
        </div>
        <div className="files__con">
          <div className="file__header flex box-shadow">
            <p className="bold-text col-1">Date</p>
            <p className="bold-text col-2">Driver</p>
            <p className="bold-text col-3">Pickup address</p>
            <p className="bold-text col-4">Sum</p>
            <p className="bold-text col-5">Payment method</p>
            <p className="bold-text col-6">PDF</p>
          </div>
          <div className="file__box-con">
            {riderinvoices.map((invoice, index) => {
              return (
                <div className="file__box flex" key={index}>
                  <p className="p-text col-1">{invoice.date}</p>
                  <p className="p-text col-2">{invoice.method}</p>
                  <p className="p-text col-3">{invoice.pickUp}</p>
                  <p className="p-text col-4">${invoice.sum}</p>
                  <p className="p-text col-5">Paypal</p>
                  <p className="p-text col-6 pdf fw-900">{invoice.format}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderInvoice;
