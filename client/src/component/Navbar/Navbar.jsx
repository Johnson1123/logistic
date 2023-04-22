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
                <Link to="/">About</Link>
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
                <Link to="/">Our service</Link>
              </div>
            )}
            {auth.user_id && (
              <div className="nav__items-con">
                <Link to="/">Testimonial</Link>
              </div>
            )}
            {auth.user_id && (
              <div className="nav__items-con">
                <Link to="/">F&Q</Link>
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
                <Link to="/loginuser">Log in</Link>
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
      {toggle && (
        <div className={`app__menu `}>
          <motion.div
            // whileInView={{x: [-300, 0] }} transition={{duration: 0.55, ease: 'easeIn'}}
            className="app__menu-wrapper wrapper"
          >
            <AiOutlineClose
              className="menu__close"
              onClick={() => Dispatch(toggleMenu())}
            />
            <ul className="menu__items">
              <div className="meun__items-con">
                <Link to="/">Home</Link>
              </div>
              {true && (
                <div className="meun__items-con">
                  <Link to="/">Partnership</Link>
                </div>
              )}
              {false && (
                <div className="meun__items-con">
                  <Link to="/">About</Link>
                </div>
              )}
              {false && (
                <div className="meun__items-con">
                  <Link to="/">Our Service</Link>
                </div>
              )}
              {false && (
                <div className="meun__items-con">
                  <Link to="/">Testimonial</Link>
                </div>
              )}
              {false && (
                <div className="meun__items-con">
                  <Link to="/">F&Q</Link>
                </div>
              )}
              <div className="meun__items-con">
                <NavLink label="Company" />
                <Company />
              </div>
              {true && (
                <div className="meun__items-con">
                  <Link to="/">Login</Link>
                </div>
              )}
              <div className="meun__items-con">
                <NavLink label="Download App" />
                <DownApp />
              </div>
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
