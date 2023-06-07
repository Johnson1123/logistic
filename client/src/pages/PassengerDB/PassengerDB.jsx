import React from "react";
import "./PassengerDB.scss";

import { useSelector } from "react-redux";
import DBNav from "../../component/DBNav/DBNav";
import { Outlet, useNavigate } from "react-router-dom";
import PassengerController from "../../component/DriverDB/PassengerController/PassengerController";
import PMobileControllers from "../../component/MobileControllers/PMobileControllers";
import UserInfo from "../../component/UserInfo/UserInfo";
import { useEffect } from "react";

function PassengerDB() {
  const navigate = useNavigate();
  const menu = useSelector((state) => state.toggleReducer.dashboarMenu);
  const authenticate = useSelector((state) => state.auth.isAuthenticate);
  const user = useSelector((state) => state.toggleReducer.user);
  const auth = useSelector((state) => state?.auth?.token?.data?.user);

  useEffect(() => {
    if (!auth?.user_id) {
      navigate("/");
    }
  }, [authenticate, navigate]);
  return (
    <div className="PassengerDB">
      <div className="PassengerDB__wrapper">
        <DBNav />
        {menu && <PMobileControllers />}
        <div className="PassengerDB__content flex">
          <PassengerController />
        
          <Outlet />
         
        </div>
        {user && <UserInfo />}
      </div>
    </div>
  );
}

export default PassengerDB;
