import React from "react";
import { paymentMethod } from "../../../content/AboutXcab";
import "./PaymentMethod.scss";

function PaymentMethod() {
  return (
    <div className="payment__method flex">
      {paymentMethod.map((method, index) => {
        return (
          <div className="method flex" key={index}>
            {method.isTrue ? (
              <div className="img">
                <img src={method.img} />
              </div>
            ) : (
              <div className="img">{method.img}</div>
            )}
            <div className="method_detail">
              {method.num && <p className="p-text">{method.num}</p>}
              {method.expire && <p className="p-text">{method.expire}</p>}
              {method.email && <p className="p-text">{method.email}</p>}
              {method.text && <p className="p-text">{method.text}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PaymentMethod;
