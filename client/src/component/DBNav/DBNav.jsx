import React, { useEffect } from "react";
import { images } from "../../asset";
import "./DBNav.scss";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  handleMenuOpen,
  userActive,
} from "../../features/toggleSlice/toggleSlice";
import { loadProfile } from "../../features/customer/putCustomer";

function DBNav() {
  const dispatch = useDispatch();
  const Dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.userInfo);

  useEffect(() => {
    Dispatch(loadProfile());
  }, []);
  const menuHandler = () => {
    Dispatch(handleMenuOpen());
  };
  return (
    <div className="DBNav flex box-shadow">
      <div className="DBNav__box  DBNav__logo">
        <Link to="/">
          <img src={images.logo} alt="Technovixdriver" />
        </Link>
      </div>

      <div
        className="DBNav__box user__img-details flex"
        onClick={() => dispatch(userActive())}
      >
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
        <div className="user__details flex flex-col justify-center">
          <h2 className="username-text p-text">{user?.first_name}</h2>
          <p className="text-sm">customer</p>
        </div>
      </div>
      <div className="DBNav__box db__menu" onClick={() => menuHandler()}>
        <AiOutlineMenu />
      </div>
    </div>
  );
}

export default DBNav;
