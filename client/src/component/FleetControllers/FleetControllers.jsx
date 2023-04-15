import React, { Component, useEffect, useState } from "react";
import "./FleetControllers.scss";
import { RxDashboard } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FleetDB } from "../../content/DBcontroller";
import Tabcontroller from "../DriverDB/Tabcontroller/Tabcontroller";
import { images } from "../../asset";

function FleetDBController() {
  const navigate = useNavigate();
  const handleDB = (n) => {
    navigate(n);
  };
  return (
    <div className="FleetDB__controller">
      <div className="FleetDB__con">
        {FleetDB.map((item, index) => {
          return (
            <Tabcontroller
              label={item.label}
              icon={item.icon}
              key={index}
              handler={() => handleDB(item.href)}
            />
          );
        })}

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

export default FleetDBController;
