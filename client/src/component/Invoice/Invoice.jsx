import React from "react";
import "./Invoice.scss";

function Invoice({ data }) {
  const content = data;
  return (
    <div className="Invoice">
      <div className="invoice__wrapper">
        <p className="title">XLCAB Invoices</p>
        <div className="invoice__con">
          <div className="file__header w-[100%] flex box-shadow rounded-[20px] px-3">
            <p className="font-bold text-sm  w-[20%] truncate 800px:text-[16px] 800px:w-[20%]">
              Invoice no
            </p>
            <p className="font-bold text-sm text-center  w-[25%] truncate 800px:text-[16px] 800px:w-[25%]">
              Date
            </p>
            <p className="font-bold text-sm  w-[25%] truncate text-center 800px:text-[16px] 800px:w-[25%]">
              Due date
            </p>
            <p className="font-bold text-sm  w-[15%] truncate 800px:text-[16px] 800px:w-[15%] text-center">
              Total sum
            </p>
            <p className="font-bold text-sm w-[15%] truncate 800px:text-[15px] 800px:w-[15%] text-right">
              PDF
            </p>
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
                      <p className="text-[12px]  w-[20%] truncate 800px:text-[14px] 800px:font-[400] ">
                        {datum.id}
                      </p>
                      <p className="w-[25%] text-[12px] font-bold truncate text-center 800px:text-[14px] 800px:font-[400]">
                        {datum.date}
                      </p>
                      <p className="w-[25%] text-[12px] font-bold truncate text-center 800px:text-[14px] 800px:font-[400]">
                        {datum.due_date}
                      </p>
                      <p className="w-[15%] text-[12px] font-bold truncate text-center 800px:text-[14px] 800px:font-[400]">
                        $12,000
                      </p>
                      <a
                        className="font-[700] text-sm w-[15%] pdf cursor-pointer text-[green] text-right truncate 800px:text-[14px] 800px:font-[400]"
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
