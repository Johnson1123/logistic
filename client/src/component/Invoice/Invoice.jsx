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
            <p className="font-bold text-sm  w-[25%] truncate">Invoice no</p>
            <p className="font-bold text-sm  w-[15%] truncate">Date</p>
            <p className="font-bold text-sm  w-[20%] truncate text-center">
              Due date
            </p>
            <p className="font-bold text-sm  w-[25%] truncate">Total sum</p>
            <p className="font-bold text-sm truncate">PDF</p>
          </div>
          <div className="file__box-con">
            {!data ? (
              <div className="p-text">Inovice</div>
            ) : (
              <div className="box__container mt-5">
                {data.map((datum, index) => {
                  return (
                    <div
                      className="flex justify-between py-4 px-2 border-b-2 border-[#f3f0f0]"
                      key={index}
                    >
                      <p className="font-bold text-[12px]  w-[25%] truncate">
                        {datum.number}
                      </p>
                      <p className="w-[22%] text-[12px] font-bold truncate text-center">
                        {datum.date}
                      </p>
                      <p className="w-[22%] text-[12px] font-bold truncate text-center">
                        {datum.due}
                      </p>
                      <p className="w-[15%] text-[12px] font-bold truncate text-center">
                        ${datum.sum}
                      </p>
                      <a
                        className="font-[700] text-sm w-[25%] pdf cursor-pointer text-[green] text-right truncate"
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
