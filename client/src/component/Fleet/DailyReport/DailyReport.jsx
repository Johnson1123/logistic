import React from "react";
import { riderinvoices } from "../../../content/invoices";
import "./DailyReport.scss";

function DailyReport() {
  return (
    <div className="DailyReport">
      <div className="DailyReport__wrapper">
        <p className="title">Daily Invoices</p>
        <p className="">Here you can download your daily reports.</p>
        <div className="files__con">
          <div className="file__header flex box-shadow">
            <p className="bold-text w-[50%]">Period</p>
            <p className="bold-text w-[50%] !text-center">Download</p>
          </div>
          <div className="file__box-con">
            {riderinvoices.map((invoice, index) => {
              return (
                <div className="file__box flex" key={index}>
                  <p className="p-text w-[50%] text-left">23.02.2023</p>
                  <a className="p-text w-[50%] pdf text-center" download>
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

export default DailyReport;
