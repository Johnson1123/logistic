import React from "react";
import "./Invoice.scss";

function Invoice() {
  const isInvoice = false;
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
            {isInvoice ? (
              <div className="p-text">Inovice</div>
            ) : (
              <div className="p-text">No invoices have been issued yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
