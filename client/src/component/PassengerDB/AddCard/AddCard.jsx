import React from "react";
import "./AddCard.scss";

import SignupBtn from "../../Btn/SignupBtn/SignupBtn";

function AddCard() {
  return (
    <div className="AddCard">
      <p className="title">Add credit card</p>
      <p className="small-title">
        Choose desired vehicle type. We offer cars suitable for most every day
        needs.
      </p>
      <div className="card__form">
        <form action="">
          <div className="input__con">
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input__con">
            <label htmlFor="cardNum">Credit card number</label>
            <input type="text" id="cardNum" name="cardNum" />
          </div>
          <div className="group__input">
            <div className="input__con">
              <label htmlFor="Edate">Expiring Date</label>
              <input type="text" id="Edate" name="Edate" />
            </div>
            <div className="input__con">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" />
            </div>
          </div>
          <SignupBtn label="Save" />
        </form>
      </div>
    </div>
  );
}

export default AddCard;
