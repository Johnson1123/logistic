import React from "react";
import { taxreport } from "../../../../content/Taxreport";
import "./TaxReport.scss";

function TaxReport() {
  return (
    <div className="TaxReport dbtab">
      <div className="taxReport__wrapper">
        <h4 className="title">Tax Reports</h4>
        <p className="small-title text fw-300">
          Here you see list of tax reports for recent months.
        </p>
        <div className="pagination"></div>
        <div className="tax__con">
          <div className="tax__header flex box-shadow">
            <p className="bold-text col-1">Period</p>
            <p className="bold-text col-2">PDF</p>
          </div>
          <div className="tax__box-con">
            {taxreport.map((report, index) => {
              return (
                <div className="taxes__box flex" key={index}>
                  <p className="p-text col-1 fw-500">{report.period}</p>
                  <p className="p-text col-2 pdf fw-700">{report.format}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxReport;
