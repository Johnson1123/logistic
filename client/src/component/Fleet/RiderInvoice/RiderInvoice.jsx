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
        <p className="text-md font-bold">
          Invoices that have been issued to riders from you.
        </p>
        <div className="input__con flex">
          <SelectComponent options={options} className="size" />
          <SelectComponent options={options} className="size" />
          <SelectComponent options={options} className="size" />
        </div>
        <div className="files__con">
          <div className="file__header flex box-shadow">
            <p className="bold-text w-[15%] truncate text-left">Date</p>
            <p className="bold-text w-[20%] truncate text-center">Driver</p>
            <p className="bold-text w-[30%] truncate text-center">
              Pickup address
            </p>
            <p className="bold-text w-[10%] truncate text-center">Sum</p>
            <p className="bold-text w-[15%] truncate text-center">
              Payment method
            </p>
            <p className="bold-text w-[10%] truncate !text-right">PDF</p>
          </div>
          <div className="file__box-con">
            {riderinvoices.map((invoice, index) => {
              return (
                <div className="file__box flex" key={index}>
                  <p className="p-text w-[15%] truncate text-center">
                    {invoice.date}
                  </p>
                  <p className="p-text w-[20%] truncate text-center">
                    {invoice.method}
                  </p>
                  <p className="p-text w-[30%] truncate text-center">
                    {invoice.pickUp}
                  </p>
                  <p className="p-text  w-[10%] truncate text-center">
                    ${invoice.sum}
                  </p>
                  <p className="p-text  w-[15%] truncate text-center">Paypal</p>
                  <p className="p-text pdf fw-900 w-[10%] truncate text-right">
                    {invoice.format}
                  </p>
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
