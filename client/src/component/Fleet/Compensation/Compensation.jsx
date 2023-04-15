import { Select } from "antd";
import React from "react";
import { riderinvoices } from "../../../content/invoices";
import "./Compensation.scss";

function RiderInvoice() {
  return (
    <div className="Compensation">
      <div className="RiderInvoice__wrapper">
        <p className="title">Compensation Invoices</p>
        <p className="p-text">
          Compensation invoices that have been issued to you.
        </p>
        <div className="files__con">
          <div className="file__header flex box-shadow">
            <p className="bold-text col-1">Date</p>
            <p className="bold-text col-2">Description</p>
            <p className="bold-text col-3">Total Sum</p>
            <p className="bold-text col-4">Pdf</p>
          </div>
          <div className="file__box-con">
            {riderinvoices.map((invoice, index) => {
              return (
                <div className="file__box flex" key={index}>
                  <p className="p-text col-1">23.02.2023</p>
                  <p className="p-text col-2">{invoice.method}</p>
                  <p className="p-text col-3">$17.08</p>
                  <a className="p-text col-4 pdf" download>
                    PDF
                  </a>
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
