import React from "react";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import TabInput from "../../../Tabs/TabInput/TabInput";
import "./PaymentInfo.scss";

function PaymentInfo() {
  return (
    <div className="PaymentInfo">
      <h4 className="title">Payout account information</h4>
      <form action="" className="form__con">
        <div className="input__group">
          <TabInput
            type="text"
            label="Recipient name"
            placeholder="JAmes Williams"
            name="Fname"
          />
          <TabInput
            type="email"
            label="Bank acounr number"
            placeholder="FR7616798000010000240719201"
            name="Bnum"
          />
        </div>
        <div className="input__group">
          <TabInput
            type="text"
            label="Bank Name or BIC/SWIFT"
            placeholder="TRZOFR21XXX"
            name="Bname"
          />
          <TabInput
            type="text"
            label="Transit number"
            placeholder=""
            name="Tnum"
          />
        </div>
        <SignupBtn label="Save" />
      </form>
    </div>
  );
}

export default PaymentInfo;
