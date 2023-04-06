import React from "react";
import "./Payout.scss";

function Payout() {
  const isPayout = false;
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
            {isPayout ? (
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

export default Payout;
