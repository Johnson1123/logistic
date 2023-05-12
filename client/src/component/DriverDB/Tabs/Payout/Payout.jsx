import React from "react";
import "./Payout.scss";

function Payout() {
  const data = [
    {
      _id: 1,
      number: "265537762y87",
      date: "23-05-2023",
      due: "24-06-24",
      sum: "400.00",
    },
    {
      _id: 2,
      number: "265537762y87",
      date: "23-05-2023",
      due: "24-06-24",
      sum: "400.00",
    },
    {
      _id: 3,
      number: "265537762y87",
      date: "23-05-2023",
      due: "24-06-24",
      sum: "400.00",
    },
    {
      _id: 4,
      number: "265537762y87",
      date: "23-05-2023",
      due: "24-06-24",
      sum: "400.00",
    },
  ];
  return (
    <div className="Payout">
      <div className="payout__wrapper">
        <h4 className="title">Tax Reports</h4>
        <p className="small-title text fw-300">
          Here you see list of tax reports for recent months.
        </p>
        <div className="payout__con">
          <div className="payout__header flex box-shadow">
            <p className="bold-text col-1">Amount</p>
            <p className="bold-text col-2">Paid Out</p>
          </div>
          <div className="payout__box-con">
            {!data ? (
              <div className="p-text">Inovice</div>
            ) : (
              <div className="box__container">
                {data.map((datum, index) => {
                  return (
                    <div className="data__box flex" key={index}>
                      <p className="p-text col-1 fw-500">${datum.sum}</p>
                      <p className="p-text col-2 fw-500">{datum.date}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payout;
