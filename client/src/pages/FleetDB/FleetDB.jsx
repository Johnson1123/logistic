import React from "react";
import "./FleetDB.scss";

import { useSelector } from "react-redux";
import DBNav from "../../component/DBNav/DBNav";
import { Outlet } from "react-router-dom";
import FleetMobileController from "../../component/MobileControllers/FleetMobileController";
import UserInfo from "../../component/UserInfo/UserInfo";
import FleetDBController from "../../component/FleetControllers/FleetControllers";

function FleetDB() {
  const menu = useSelector((state) => state.toggleReducer.dashboarMenu);
  const user = useSelector((state) => state.toggleReducer.user);

  return (
    <div className="FleetDB">
      <div className="FleetDB__wrapper">
        <DBNav />
        {menu && <FleetMobileController />}
        <div className="FleetDB__content flex">
          <FleetDBController />
          <div className="tab__container">
            <Outlet />
          </div>
        </div>
        {user && <UserInfo />}
      </div>
    </div>
  );
}

export default FleetDB;
