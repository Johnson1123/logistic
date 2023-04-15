import { Select } from "antd";
import React from "react";
import { bussiness } from "../../../../content/bussiness";
import "./BalanceReport.scss";

function BalanceReport() {
  const PagiNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="BalanceReport">
      <div className="balanceReport__wrapper">
        <h4 className="title">Balance Reports</h4>
        <p className="small-title text fw-300">
          Here you see list of balance reports for recent weeks.
        </p>
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
            <p className="page-num">/ 10</p>
          </div>
        </div>
        <div className="balance__con">
          <div className="balance__header flex box-shadow">
            <p className="bold-text col-1">Period</p>
            <p className="bold-text col-2">PDF</p>
          </div>
          <div className="reports__box-con">
            {bussiness.map((report, index) => {
              return (
                <div className="report__box flex" key={index}>
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

export default BalanceReport;
