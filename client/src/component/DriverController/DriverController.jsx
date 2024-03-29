import React, { useState } from "react";
import "./DriverController.scss";
import Tabcontroller from "../DriverDB/Tabcontroller/Tabcontroller";

import { useNavigate } from "react-router-dom";
import { DBcontroller } from "../../content/DBcontroller";
import { images } from "../../asset";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/Auths";
import { AiOutlineLogout } from "react-icons/ai";
import { logout } from "../../features/slice/auth/auth";

function DriverController() {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const [active, setActive] = useState("/customer");

  const handleDB = (n) => {
    navigate(n);
    setActive(n);
  };
  const handleLogout = () => {
    Dispatch(logout());
    navigate("/");
  };
  return (
    <div className="DriverController">
      <div className="Tabcontrollers__con">
        {DBcontroller.map((item, index) => {
          return (
            <Tabcontroller
              label={item.label}
              icon={item.icon}
              key={index}
              handler={
                item.href ? () => handleDB(item.href) : () => handleLogout
              }
              active={active}
              href={item.href}
            />
          );
        })}
        <button onClick={handleLogout} className="logout-btn p-text">
          <span>
            <AiOutlineLogout size={20} />
          </span>
          <span className="text-[16px]">logout</span>
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

export default DriverController;
