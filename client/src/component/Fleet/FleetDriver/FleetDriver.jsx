import React, { useState } from "react";
import { images } from "../../../asset";
import AddFleetDriver from "../AddFleetDriver/AddFleetDriver";
import { drivers, fleetDrivers } from "../../../content/Fleet";
import "./DriversList.scss";
import "./Fleet.scss";
import "./Drivers.scss";
import "./Application.scss";

function FleetDriver() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <div className="DriversList">
      <div className="driverList__wrapper">
        <p className="title">Drivers</p>
        <p className="p-text">Here you see overview of your drivers.</p>
        <div className="driverList__content">
          <div className="controls__container">
            {["Drivers", "Fleet drivers", "Applications"].map((item, index) => {
              return (
                <button
                  className={`control-btn ${tab === index ? "active" : ""} `}
                  key={index}
                  onClick={() => setTab(index)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {tab === 0 && <Driver />}
          {tab === 1 && <Fleet />}
          {tab === 2 && <Application />}
        </div>
      </div>
      {open && <AddFleetDriver open={open} setOpen={setOpen} />}
    </div>
  );
}

function Driver() {
  return (
    <div className="content__wrapper">
      <div className="top__container flex w-[95%] mt-5">
        <p className="small-title">Drivers</p>
        <button className="add__driver">Add Driver</button>
      </div>
      <div className="scroll__container">
        <div className="title__container  box-shadow flex">
          <p className="small-title w-[27%] truncate">Name</p>
          <p className="small-title w-[10%] truncate text-center">Status</p>
          <p className="small-title w-[30%] truncate text-center">E-mail</p>
          <p className="small-title w-[20%] truncate text-center">Mobile</p>
          <p className="small-title w-[13%] truncate text-center flex justify-end">
            Cash payment
          </p>
        </div>
        <div className="data__container">
          {drivers.map((item, index) => {
            return (
              <div className="box flex items-center" key={index}>
                <p className="p-text  !text-[green] w-[27%] truncate text-left">
                  {item.name}
                </p>
                <p className="p-text w-[10%] truncate text-center flex justify-center cursor-pointer">
                  <span
                    className={`${
                      item.status.toLowerCase() === "active"
                        ? "bg-green-600"
                        : "bg-red-600"
                    } px-3 text-center py-2 text-white rounded-md !w-[80px]`}
                  >
                    {item.status}
                  </span>
                </p>
                <p className="p-text w-[30%] truncate text-center">
                  {item.email}
                </p>
                <p className="p-text w-[20%] truncate text-center">
                  {item.phone}
                </p>
                <p className="p-text w-[13%] truncate text-center flex justify-end cursor-pointer">
                  <span
                    className={`${
                      item.method.toLowerCase() === "enabled"
                        ? "bg-green-600"
                        : "bg-red-600"
                    } px-3 text-center py-2 text-white rounded-md !w-[80px]`}
                  >
                    {item.method}
                  </span>
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
    <div className="Application">
      <div className="top__container  flex 800px:w-[80%] items-center">
        <div className="desc w-[70%] 800px:w-[60%]">
          <p className="title">Drivers Applications</p>
          <p className="p-text ">
            You can find all drivers applications in this section. You can see
            their contact information, uploaded documents, and document
            statuses.
          </p>
        </div>
        <button className="add__driver w-[100px] 800px:w-[150px] !bg-[green] h-[50px] !text-white rounded-md">
          Add Driver
        </button>
      </div>
      <div className=" scroll__container 800px:w-[100%] ">
        <div className="800px:w-[100%] flex px-3 py-3 rounded-md bg-[#f3f3f3] title__container">
          <p className="text-md font-semibold w-[30%] truncate text-left">
            Name
          </p>
          <p className="text-md font-semibold w-[15%] truncate text-center">
            Status
          </p>
          <p className="text-md font-semibold w-[30%] truncate text-center">
            E-mail
          </p>
          <p className="text-md font-semibold w-[25%] truncate text-right">
            Mobile
          </p>
        </div>
        <div className="data__container 800px:w-[100%]">
          {application ? (
            <p className="p-text">No pending driver applications.</p>
          ) : (
            drivers.map((item, index) => {
              return (
                <div className="box flex 800px:w-[100%]" key={index}>
                  <p className="p-text w-[30%] text-left !text-[green]">
                    {item.name}
                  </p>
                  <p className="p-text w-[15%] text-center flex justify-center">
                    <span
                      className={`${
                        item.status.toLowerCase() === "active"
                          ? "bg-green-600"
                          : "bg-red-600"
                      } px-3 text-center py-2 text-white rounded-md w-[80px]`}
                    >
                      {item.status}
                    </span>
                  </p>
                  <p className="p-text w-[30%] text-center">{item.email}</p>
                  <p className="p-text w-[25%] text-right">{item.phone}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

function Fleet() {
  return (
    <div className="fleetDriver">
      <div className="justify-between flex w-[95%]">
        <p className="small-title">Drivers</p>
        <button className="add__driver w-[100px] 800px:w-[150px] !bg-[green] h-[40px] !text-white rounded-md">
          Add Driver
        </button>
      </div>
      <div className="scroll__container">
        <div className="title__container  box-shadow flex ">
          <p className="text-md font-semibold w-[20%] truncate text-left">
            Name
          </p>
          <p className="text-md font-semibold w-[15%] truncate text-center">
            Driver score
          </p>
          <p className="text-md font-semibold w-[15%] truncate text-center">
            Finished orders
          </p>
          <p className="text-md font-semibold w-[15%] truncate text-center">
            Total acceptance
          </p>
          <p className="text-md font-semibold w-[18%] truncate text-center">
            Required acceptance
          </p>
          <p className="text-md font-semibold w-[17%] truncate text-right">
            Online hours
          </p>
        </div>
        <div className="data__container">
          {fleetDrivers.map((item, index) => {
            return (
              <div className="box flex" key={index}>
                <p className="p-text w-[20%] text-left !text-[green]">
                  {item.name}
                </p>
                <p className="p-text w-[15%]  text-center">{item.order}</p>
                <p className="p-text w-[15%] text-center">{item.score}</p>
                <p className="p-text w-[15%] text-center">{item.total}%</p>
                <p className="p-text w-[18%] text-center">{item.required}%</p>
                <p className="p-text col-6 w-[17%] text-right">
                  <span>{`${item.hour}h`}</span>
                  <span>{`${item.min}mins`}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FleetDriver;
