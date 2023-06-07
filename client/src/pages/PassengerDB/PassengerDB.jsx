import React from "react";
import "./PassengerDB.scss";

import { useDispatch, useSelector } from "react-redux";
import DBNav from "../../component/DBNav/DBNav";
import { Outlet, useNavigate } from "react-router-dom";
import PassengerController from "../../component/DriverDB/PassengerController/PassengerController";
import PMobileControllers from "../../component/MobileControllers/PMobileControllers";
import UserInfo from "../../component/UserInfo/UserInfo";
import { useEffect } from "react";

function PassengerDB() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.toggleReducer.dashboarMenu);
  const userModalInfo = useSelector((state) => state.toggleReducer.user);

  const user_id = useSelector((state) => state?.auth?.user?.user_id);

  useEffect(() => {
    if (!user_id) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="PassengerDB">
      <div className="PassengerDB__wrapper">
        <DBNav />
        {menu && <PMobileControllers />}
        <div className="PassengerDB__content flex">
          <PassengerController />
          <div className="tab__container">
            <Outlet />
          </div>
        </div>
        {userModalInfo && <UserInfo />}
      </div>
    </div>
  );
}

export default PassengerDB;
