import React, { useState } from "react";
import "./DBMobileControllers.scss";

import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../asset";
import { DBcontroller } from "../../content/DBcontroller";
import { handleMenuClose } from "../../features/toggleSlice/toggleSlice";
import Tabcontroller from "../DriverDB/Tabcontroller/Tabcontroller";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { logoutUser } from "../../features/Auths";

function DBMobileControllers() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const tab = useSelector((state) => state.toggleReducer.dashboarMenu);
  const [active, setActive] = useState("/driver");
  const handleDB = (n) => {
    navigate(n);
    Dispatch(handleMenuClose());
    setActive(n);
  };

  const handleClose = () => {
    Dispatch(handleMenuClose());
  };
  const handleLogout = (n) => {
    Dispatch(logoutUser());
  };
  return (
    <div className="dbNav__menu-container">
      <div className="MobileControllers">
        <div className="db__close">
          <AiOutlineClose onClick={handleClose} />
        </div>
        <div className="DBNav__box user__img-details flex">
          <div className="user__img flex center">
            <img src={images.Elia} alt="Technovix driver" />
          </div>
          <div className="user__details">
            <h2 className="username-text p-text">Christiana James</h2>
            <p className="p-text small-text">Driver</p>
          </div>
        </div>
        <div>
          {DBcontroller.map((item, index) => {
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
          <button onClick={handleLogout} className="logout-btn p-text">
            <span>
              <IoLogOutOutline />
            </span>
            <span>logout</span>
          </button>
        </div>
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

export default DBMobileControllers;
