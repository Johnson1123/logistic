import React from "react";
import "./FleetDB.scss";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import FleetMobileController from "../../component/MobileControllers/FleetMobileController";
import UserInfo from "../../component/UserInfo/UserInfo";
import FleetDBController from "../../component/FleetControllers/FleetControllers";
import FleetNav from "../../component/Fleet/FleetNav/FleetNav";

function FleetDB() {
  const menu = useSelector((state) => state.toggleReducer.dashboarMenu);
  const user = useSelector((state) => state.toggleReducer.user);

  return (
    <div className="FleetDB">
      <div className="FleetDB__wrapper">
        <FleetNav />
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
