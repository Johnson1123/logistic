import React, { useEffect } from "react";
import "./FleetNav.scss";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../../asset";

function FleetNav() {
  //   useEffect(() => {
  //     Dispatch(loadProfile());
  //   }, []);
  //   const menuHandler = () => {
  //     Dispatch(handleMenuOpen());
  //   };
  return (
    <div className="DBNav flex box-shadow">
      <div className="DBNav__box  DBNav__logo">
        <Link to="/">
          <img src={images.logo} alt="Technovixdriver" />
        </Link>
      </div>

      <div
        className="DBNav__box user__img-details flex"
        // onClick={() => dispatch(userActive())}
      >
        <div className="user__img flex center">
          <img
            src={
              false
                ? false?.image_url
                  ? false?.image_url
                  : images.avatar
                : images.avatar
            }
            alt={false?.first_name}
          />
        </div>
        <div className="user__details flex flex-col justify-center">
          <h2 className="username-text p-text text-sm">Johnson</h2>
          <p className="text-sm">Fleet Owner</p>
        </div>
      </div>
      <div className="DBNav__box db__menu">
        <AiOutlineMenu />
      </div>
    </div>
  );
}

export default FleetNav;
