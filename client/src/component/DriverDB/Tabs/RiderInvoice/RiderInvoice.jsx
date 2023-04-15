import { Select } from "antd";
import React from "react";
import { riderinvoices } from "../../../../content/invoices";
import InputDropGroup from "../../../InputDropGroup/InputDropGroup";
import "./RiderInvoice.scss";

function RiderInvoice() {
  const PagiNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="RiderInvoice ">
      <div className="RiderInvoice__wrapper">
        <p className="title">Rider Invoices</p>
        <div className="input__con flex">
          <InputDropGroup />
          <a href="" className="download" download>
            Download PDF
          </a>
        </div>
        <div className="pagination flex">
          <p className="small-title">Pages</p>
          <div className="page__con flex">
            <Select
              defaultValue={PagiNum[0]}
              style={{ width: 50, marginLeft: 10, marginRight: 10 }}
              options={PagiNum.map((province) => ({
                label: province,
                value: province,
              }))}
            />
            <p>/10</p>
          </div>
        </div>
        <div className="files__con">
          <div className="file__header flex box-shadow">
            <p className="bold-text col-1">Date</p>
            <p className="bold-text col-2">Pickup address</p>
            <p className="bold-text col-3">Sum</p>
            <p className="bold-text col-4">Payment method</p>
            <p className="bold-text col-5">PDF</p>
          </div>
          <div className="file__box-con">
            {riderinvoices.map((invoice, index) => {
              return (
                <div className="file__box flex" key={index}>
                  <p className="p-text col-1">{invoice.date}</p>
                  <p className="p-text col-2">{invoice.pickUp}</p>
                  <p className="p-text col-3">${invoice.sum}</p>
                  <p className="p-text col-4">{invoice.method}</p>
                  <p className="p-text col-5 pdf fw-700">{invoice.format}</p>
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
