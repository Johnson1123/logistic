import React, { useState } from "react";
import "./PMobileControllers.scss";

import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../asset";
import { passengercontroller } from "../../content/DBcontroller";
import { handleMenuClose } from "../../features/toggleSlice/toggleSlice";
import Tabcontroller from "../DriverDB/Tabcontroller/Tabcontroller";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { logout } from "../../features/slice/auth/auth";

function PMobileControllers() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const user = useSelector((state) => state?.auth?.userInfo);
  const user_type = useSelector((state) => state?.auth?.user?.user_type);
  const handleDB = (n) => {
    navigate(n);
    Dispatch(handleMenuClose());
    setActive(n);
  };

  const handleClose = () => {
    Dispatch(handleMenuClose());
  };

  const handleLogout = () => {
    Dispatch(logout());
    navigate("/");
  };
  const name = `${user?.first_name}`;
  return (
    <div className="PNav__menu-container" onClick={handleClose}>
      <div className="MobileControllers">
        <div className="db__close">
          <AiOutlineClose onClick={handleClose} />
        </div>
        <div className="DBNav__box user__img-details flex">
          <div className="user__img flex center">
            <img
              src={
                user
                  ? user?.image_url
                    ? user?.image_url
                    : images.avatar
                  : images.avatar
              }
              alt={user?.first_name}
            />
          </div>
          <div className="user__details">
            <h2 className="username-text p-text truncate">{name}</h2>
            <p className="p-text small-text">{user_type}</p>
          </div>
        </div>
        <div>
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

export default PMobileControllers;
