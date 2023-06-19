import React from "react";
import { riderinvoices } from "../../../content/invoices";
import "./WeeklyReport.scss";

function WeeklyReport() {
  return (
    <div className="WeeklyReport">
      <div className="WeeklyReport__wrapper">
        <p className="title">Weekly Invoices</p>
        <p className="p-text">Here you can download your weekly reports.</p>
        <div className="files__con">
          <div className="file__header flex box-shadow">
            <p className="bold-text w-[50%]">Period</p>
            <p className="bold-text w-[50%] !text-center">Download</p>
          </div>
          <div className="file__box-con">
            {riderinvoices.map((invoice, index) => {
              return (
                <div className="file__box flex " key={index}>
                  <p className="p-text col-1 w-[50%] !text-left">23.02.2023</p>
                  <a className="p-text pdf w-[50%] text-center" download>
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

export default WeeklyReport;
