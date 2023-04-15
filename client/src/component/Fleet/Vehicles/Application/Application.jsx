import React from "react";
import { drivers } from "../../../../content/Fleet";
import "./Application.scss";

function Application() {
  const application = false;
  return (
    <div className="SApplication">
      <div className="top__container flex">
        <div className="desc">
          <p className="title">Vehicle Applications</p>
          <p className="p-text">
            You can find all drivers applications in this section. You can see
            their contact information, uploaded documents, and document
            statuses.
          </p>
        </div>
        <button className="add__driver">Add Driver</button>
      </div>
      <div className="scroll__container">
        <div className="title__container  box-shadow flex">
          <p className="small-title col-1">Name</p>
          <p className="small-title col-2">License Plate</p>
        </div>
        <div className="data__container">
          {!application ? (
            <p className="p-text">No pending driver applications.</p>
          ) : (
            drivers.map((item, index) => {
              return (
                <div className="box flex" key={index}>
                  <p className="p-text col-1">{item.name}</p>
                  <p className="p-text col-2 ">{item.status}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Application;
