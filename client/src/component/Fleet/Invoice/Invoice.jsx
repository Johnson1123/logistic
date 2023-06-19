import React from "react";
import Invoice from "../../Invoice/Invoice";
import { fleetInvoices } from "../../../content/invoices.js";

function fleetInvoice() {
  const isInvoice = false;
  return (
    <>
      <Invoice data={fleetInvoices} />
    </>
  );
}

export default fleetInvoice;
