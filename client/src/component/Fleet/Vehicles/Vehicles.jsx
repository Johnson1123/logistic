import React, { useState } from "react";
import "./Vehicles.scss";
import "./Vehicle.scss";
import "./Application.scss";
import { drivers, vehicle } from "../../../content/Fleet";
import { styles } from "../../../style/style";

function Vehicles() {
  const [tab, setTab] = useState("Vehicles");
  return (
    <div className="Vehicles">
      <div className="Vehicles__wrapper">
        <p className="title">Drivers</p>
        <p className="text-md">Here you see overview of your drivers.</p>
        <div className="Vehicles__content">
          <div className="controls__container">
            {["Vehicles", "Applications"].map((item, index) => {
              return (
                <button
                  className={`control-btn ${tab === item ? "active" : ""}`}
                  key={index}
                  onClick={() => setTab(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {tab === "Vehicles" && <Vehicle />}
          {tab === "Applications" && <Application />}
        </div>
      </div>
    </div>
  );
}
function Vehicle() {
  return (
    <div className="Vehicle__wrapper">
      <div className="top__container flex !px-5">
        <p className="small-title">Drivers</p>
        <button
          className={`${styles.button} py-1`}
          // onClick={() => setOpen(!open)}
        >
          Add New
        </button>
      </div>
      <div className="scroll__container">
        <div className="title__container  box-shadow flex">
          <p className="small-title w-[50%]  !text-left">Name</p>
          <p className="small-title  w-[25%] ">Status</p>
          <p className="small-title w-[25%] text-right 800px:text-left">
            Plate Number
          </p>
        </div>
        <div className="data__container">
          {vehicle.map((item, index) => {
            return (
              <div className="box flex items-center" key={index}>
                <p className="p-text w-[50%]  !text-left">{item.name}</p>
                <p className="p-text w-[25%] flex ">
                  <span
                    className={`${
                      item.status.toLowerCase() === "enable"
                        ? "bg-green-600"
                        : "bg-red-600"
                    } px-3 text-center py-2 text-white rounded-md !w-[80px]`}
                  >
                    {item.status}
                  </span>
                </p>
                <p className="p-text w-[25%] text-right 800px:text-left">
                  {item.plate}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function Application() {
  const application = false;
  return (
    <div className="SApplication">
      <div className="top__container flex items-center">
        <div className="desc w-[70%] 800px:w-[80%]">
          <p className="title">Vehicle Applications</p>
          <p className="p-text">
            You can find all drivers applications in this section. You can see
            their contact information, uploaded documents, and document
            statuses.
          </p>
        </div>
        <button className="add__driver w-[100px] 800px:w-[150px] !bg-[green] h-[40px] !text-white rounded-md">
          Add Driver
        </button>
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
            vehicle.map((item, index) => {
              return (
                <div className="box flex" key={index}>
                  <p className="p-text col-1 !text-left">{item.name}</p>
                  <p className="p-text col-2 ">
                    <span
                      className={`${
                        item.status.toLowerCase() === "enable"
                          ? "bg-green-600"
                          : "bg-red-600"
                      } px-3 text-center py-2 text-white rounded-md `}
                    >
                      {item.status}
                    </span>
                  </p>
                  <p className="p-text col-3">{item.plate}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
export default Vehicles;
