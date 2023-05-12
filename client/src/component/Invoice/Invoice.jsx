import React from "react";
import "./Invoice.scss";

function Invoice({ data }) {
  const content = data;
  return (
    <div className="Invoice">
      <div className="invoice__wrapper">
        <p className="title">XLCAB Invoices</p>
        <div className="invoice__con">
          <div className="file__header flex box-shadow">
            <p className="bold-text col-1">Invoice no</p>
            <p className="bold-text col-2">Date</p>
            <p className="bold-text col-3">Due date</p>
            <p className="bold-text col-4">Total sum</p>
            <p className="bold-text col-5">PDF</p>
          </div>
          <div className="file__box-con">
            {!data ? (
              <div className="p-text">Inovice</div>
            ) : (
              <div className="box__container">
                {data.map((datum, index) => {
                  return (
                    <div className="data__box flex" key={index}>
                      <p className="p-text col-1 fw-500">{datum.number}</p>
                      <p className="p-text col-2 fw-500">{datum.date}</p>
                      <p className="p-text col-3 fw-500">{datum.due}</p>
                      <p className="p-text col-4 fw-500">${datum.sum}</p>
                      <a
                        className="p-text col-4 pdf fw-700"
                        href={"download"}
                        download
                      >
                        Download
                      </a>
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

export default Invoice;
