import React from "react";
import { riderinvoices } from "../../../content/invoices";
import "./Payout.scss";

function Payouts() {
  return (
    <div className="Payouts">
      <div className="Payouts__wrapper">
        <p className="title">Payouts</p>
        <p className="text-md font-bold">
          Here you can download your daily reports.
        </p>
        <div className="files__con">
          <div className="file__header flex box-shadow">
            <p className="bold-text col-1">Period</p>
            <p className="bold-text bold-text w-[50%] !text-center">Download</p>
          </div>
          <div className="file__box-con">
            {riderinvoices.map((invoice, index) => {
              return (
                <div className="file__box flex" key={index}>
                  <p className="p-text col-1">23.02.2023</p>
                  <a
                    className="p-text bold-text w-[50%] !text-center pdf"
                    download
                  >
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

export default Payouts;
