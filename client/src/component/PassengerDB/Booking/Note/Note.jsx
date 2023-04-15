import React from "react";
import "./Note.scss";

function Note() {
  return (
    <div className="Note">
      <h3 className="small-title">Note: </h3>
      <ul>
        <li className="p-text">
          Immediate Pick-Up allow you to order a ride any where you are, with
          our nearest driver pciking you up.
        </li>
        <li className="p-text">
          Schedule Ride is a booking in advance system which you to book a ride
          in advance within the city of Paris. You can also book in advance from
          your host country.
        </li>
        <li className="p-text">
          Users coming in to paris should kindly book according to their ticket
          scheduled to avoid delay in both party.
        </li>
      </ul>
    </div>
  );
}

export default Note;
