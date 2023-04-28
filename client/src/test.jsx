import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleMenu,
  closeSearch,
} from "../../features/toggleSlice/toggleSlice";
import "./navbar.scss";
import "./menu.scss";
import { images } from "../../asset";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";
import NavLink from "./NavLink";
import NavLinkLg from "./NavLinkLg";
import DownApp from "./nav/DownApp/DownApp";
import Company from "./nav/Company/Company";
import { logoutUser } from "../../features/Auths";

function Navbar() {
  // const cart = useSelector((state) => state.cartItem.cartItems);
  const toggle = useSelector((state) => state.toggleReducer.menuValue);
  const searchToggle = useSelector((state) => state.toggleReducer.closeValue);
  const auth = useSelector((state) => state.auth);

  const Dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    Dispatch(logoutUser());
  };

  console.log(toggle);
  return (
    <div className="app__navbar flex">
      <div className="app__navbar-wrapper-sm flex flex-center">
        <div className="navbar__logo flex">
          <Link to="/">
            <img src={images.logo} alt="logistic logo" />
          </Link>
          <div onClick={() => Dispatch(toggleMenu())}>
            <AiOutlineMenu />
          </div>
        </div>

        <div className="nav__list flex">
          <ul className="nav__items flex">
            <div className="nav__items-con">
              <Link to="/">Home</Link>
            </div>
            {auth.user_id && (
              <div className="nav__items-con">
                <Link to="/about">About</Link>
              </div>
            )}
            {auth.user_id ? (
              ""
            ) : (
              <div className="nav__items-con">
                <Link to="/">Partnership</Link>
              </div>
            )}

            {auth.user_id && (
              <div className="nav__items-con">
                <Link to="/service">Our service</Link>
              </div>
            )}
            {auth.user_id && (
              <div className="nav__items-con">
                <Link to="/testimonial">Testimonial</Link>
              </div>
            )}
            {auth.user_id && (
              <div className="nav__items-con">
                <Link to="/passengerdb/help/">F&Q</Link>
              </div>
            )}
            {auth.user_id ? (
              ""
            ) : (
              <div className="nav__items-con">
                <NavLinkLg label="Company" />
                <Company />
              </div>
            )}
            {auth.user_id ? (
              ""
            ) : (
              <div className="nav__items-con">
                <Link to="/login">Log in</Link>
              </div>
            )}

            {auth.user_id ? (
              ""
            ) : (
              <div className="nav__items-con">
                <NavLinkLg label="Download app" />
                <DownApp />
              </div>
            )}
          </ul>
        </div>

        {auth.user_id && (
          <div className="navbar__user flex-center">
            <div className="user__container flex center">
              <img src={images.Elia} alt="user image" />
              <span className="p-text">
                <Link to="/driver/dashboard" className="user-link ">
                  Dashboard
                </Link>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
