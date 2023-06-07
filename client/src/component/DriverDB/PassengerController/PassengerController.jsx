import React, { Component, useEffect, useState } from "react";
import "./PassengerController.scss";
import Tabcontroller from "../Tabcontroller/Tabcontroller";
import { passengercontroller } from "../../../content/DBcontroller";
import { images } from "../../../asset";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/slice/auth/auth";

function PassengerController() {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const [active, setActive] = useState("/customer");

  const handleDB = (n) => {
    navigate(n);
    setActive(n);
  };
  const handleDispatch = (n) => {
    Dispatch(logout());
    navigate("/");
  };
  return (
    <div className="Passenger__controller">
      <div className="Tabcontrollers__con">
        {passengercontroller.map((item, index) => {
          return (
            <Tabcontroller
              label={item.label}
              icon={item.icon}
              key={index}
              handler={() => handleDB(item.href)}
              active={active}
              href={item.href}
            />
          );
        })}
        <button onClick={handleDispatch} className="logout-btn p-text">
          <span>
            <IoLogOutOutline />
          </span>
          <span>logout</span>
        </button>
        <div className="getApp flex">
          <div className="getApp__content">
            <p className="small-title p-text">Get Mobile App</p>
            <div className="img__con flex">
              <img src={images.playStoreLogo} alt="play store" />
              <img src={images.appLogo} alt="apple store" />
            </div>
          </div>
          <img src={images.iphones} alt="" className="iphones" />
        </div>
      </div>
    </div>
  );
}

export default PassengerController;
