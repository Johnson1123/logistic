import React from "react";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import TabInput from "../../../Tabs/TabInput/TabInput";
import "./IssuerInvoice.scss";

function IssuerInvoice() {
  return (
    <div className="IssuerInvoice">
      <h4 className="title">Invoice issuer information</h4>
      <p className="small-title text fw-300">
        This information appears on invoices sent to your clients.
      </p>
      <form action="" className="form__con">
        <div className="input__group">
          <TabInput type="text" label="Type" placeholder="" name="type" />
          <TabInput
            type="text"
            label="Name"
            placeholder="SHAD AND LYA PARTNERS"
            name="Cname"
          />
        </div>
        <div className="input__group">
          <TabInput
            type="text"
            label="Address"
            placeholder="Los Angeles, United States"
            name="Address"
          />
          <TabInput
            type="text"
            label="Reg.code"
            placeholder="83210315400015"
            name="Rcode"
          />
        </div>
        <div className="input__group">
          <TabInput
            type="text"
            label="Vat. no"
            placeholder="FR21832103154"
            name="Vno"
          />
        </div>
        <SignupBtn label="Save" />
      </form>
    </div>
  );
}

export default IssuerInvoice;
