import React from "react";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import TabInput from "../../../Tabs/TabInput/TabInput";
import "./Billing.scss";

function Billing() {
  return (
    <div className="Billing">
      <h4 className="title">Billing information</h4>
      <p className="small-title fw-300 text">
        This information appears on invoices sent to you and your clients.
      </p>
      <form action="" className="form__con">
        <div className="input__group">
          <TabInput
            type="text"
            label="Company name"
            placeholder="SHAD AND LYA PARTNERS"
            name="Cname"
          />
          <TabInput
            type="email"
            label="Company email"
            placeholder="Jameswilliams@gmail.com"
            name="Cemail"
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

export default Billing;
