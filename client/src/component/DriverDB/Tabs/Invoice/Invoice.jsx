import React from "react";
import "./Invoice.scss";
import Invoice from "../../../Invoice/Invoice";

function driverInvoice() {
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
    <div className="driver__invoice">
      <Invoice data={data} />
    </div>
  );
}

export default driverInvoice;
