import React from "react";
import "./Badges.scss";

function Badges(props) {
  return (
    <div className="Badges" style={{ backgroundColor: `${props.color}` }}>
      <p className="p-text text">{props.text}</p>
      <p className="p-text text balance">{props.balance}</p>
      <p className="accepted">
        {props.numAccepted}
        <small>{props.total}</small>
      </p>
      <p className="p-text amount">{props.amount}</p>
      <p className="p-text duration">{props.duration}</p>
    </div>
  );
}

export default Badges;
