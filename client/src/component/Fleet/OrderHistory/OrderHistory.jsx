import { Space } from "antd";
import React from "react";
import SelectComponent from "../Select/Select";
import "./OrderHistory.scss";

function OrderHistory() {
  const options = [
    {
      label: "January 2032",
      value: 1,
    },
    {
      label: "March 2032",
      value: 2,
    },
    {
      label: "febuary 2032",
      value: 3,
    },
    {
      label: "June 2032",
      value: 4,
    },
  ];

  const driverOptions = [
    {
      label: "Johnson Onifade",
      value: "Johnson Onifade",
    },
    {
      label: "Smaith Llone",
      value: "Smaith Llone",
    },
    {
      label: "Johnson Onifade",
      value: "Johnson Onifade",
    },
    {
      label: "Smaith Llone",
      value: "Smaith Llone",
    },
  ];
  return (
    <div className="Order">
      <div className="order__wrapper">
        <p className="title">Order history</p>
        <p className="p-text !text-sm">
          Here you can download order history of your drivers.
        </p>
        <div className=" flex flex-col 800px:flex-row 800px:items-end mt-5">
          <div className="input__container w-[100%] flex !800px:mt-5">
            <form action="" className="flex px-10px w-[100%] justify-between">
              <div className="flex flex-col gap-1 mr-3 ">
                <label htmlFor="" className="text-sm">
                  From
                </label>
                <select
                  name=""
                  id=""
                  className="w-[100%] py-2 px-5 border-[1px] border-[#ebebeb] focus:outline-none"
                >
                  <option>Under G</option>
                  <option>Adenike </option>
                  <option>Kuye</option>
                  <option>Stadium G</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 mr-3">
                <label htmlFor="" className="text-sm">
                  To
                </label>
                <select
                  name=""
                  id=""
                  className="w-[100%] py-2 px-5 border-[1px] border-[#ebebeb] focus:outline-none"
                >
                  <option className="text-sm">Under G</option>
                  <option>Adenike </option>
                  <option>Kuye</option>
                  <option>Stadium G</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 mr-3">
                <label htmlFor="" className="text-sm">
                  Driver
                </label>
                <select
                  name=""
                  id=""
                  className="w-[100%] py-2 px-5 border-[1px] border-[#ebebeb] focus:outline-none"
                >
                  <option>Under G</option>
                  <option>Adenike </option>
                  <option>Kuye</option>
                  <option>Stadium G</option>
                </select>
              </div>
            </form>
          </div>
          <div className="flex justify-center 800px:min-w-[150px] mt-7 800px:mt-0">
            <a href="" download className="w-[50%] text-center 800px:w-[100%]">
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
