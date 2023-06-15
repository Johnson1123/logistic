import { Select } from "antd";
import React from "react";
import { bussiness } from "../../../../content/bussiness";
import "./BalanceReport.scss";
import { trips } from "../../../../content/trips";

function BalanceReport() {
  const PagiNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tripData = JSON.stringify(trips);
  console.log(tripData);
  const arrangeData = (tripData) => trips.map((trip) => trip);
  console.log(arrangeData(tripData));
  const data = new Blob([arrangeData(trips)], { type: "text/csv" });

  const csvURL = URL.createObjectURL(data);

  return (
    <div className="BalanceReport">
      <div className="balanceReport__wrapper">
        <h4 className="title">Balance Reports</h4>
        <p className="text-sm font-[400] my-2 mb-3 800px:text-[18px]">
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
            <p className=" 800px:text-lg text-sm">Period</p>
            <p className=" 800px:text-lg text-sm">PDF</p>
          </div>
          <div className="reports__box-con">
            {bussiness.map((report, index) => {
              return (
                <div className="report__box flex py-3" key={index}>
                  <p className=" 800px:text-[16px]">{report.period}</p>
                  <p className="800px:text-[16px] cursor-pointer text-[green] font-extrabold text-sm">
                    <a href={csvURL} download>
                      Download
                    </a>
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

export default BalanceReport;
