import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleMenu,
  closeSearch,
  closeToggle,
} from "../../features/toggleSlice/toggleSlice";
import "./Navbar.scss";
import "./menu.scss";
import { images } from "../../asset";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import NavLink from "./NavLink";
import NavLinkLg from "./NavLinkLg";
import DownApp from "./nav/DownApp/DownApp";
import Company from "./nav/Company/Company";
import { logoutUser } from "../../features/Auths";
import { useEffect } from "react";
import { loadProfile } from "../../features/customer/putCustomer";

function Navbar() {
  // const cart = useSelector((state) => state.cartItem.cartItems);
  const authToggle = useSelector((state) => state.toggleReducer.menuValue);
  const searchToggle = useSelector((state) => state.toggleReducer.closeValue);
  const auth = useSelector((state) => state.auth);
  const getCustomerProfile = useSelector((state) => state.getCustomerProfile);
  const authenticate = useSelector((state) => state.auth.isAuthenticate);
  const user = useSelector((state) => state?.profile?.profile);
  const role = auth.role;

  const [toggle, setToggle] = useState(authToggle);
  const Dispatch = useDispatch();

  const closeAppMenu = () => Dispatch(toggleMenu());
  useEffect(() => {
    setToggle(toggle);
  }, [Dispatch, auth]);

  useEffect(() => {
    Dispatch(loadProfile());
  }, []);

  const handleLogout = () => {
    Dispatch(toggleMenu());
    Dispatch(logoutUser());
  };
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
            {authenticate && (
              <div className="nav__items-con">
                <Link to="/about">About</Link>
              </div>
            )}
            {authenticate ? (
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
                <Link
                  to={role === "driver" ? "/driver/help" : "/customer/help"}
                >
                  F&Q
                </Link>
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
                <Link to="/login/customer">Log in</Link>
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
              <span className="p-text">
                <Link
                  to={role === "driver" ? "/driver" : "/customer"}
                  className="user-link "
                >
                  Dashboard
                </Link>
              </span>
            </div>
          </div>
        )}
      </div>
      {authToggle && (
        <div className={`app__menu `} onClick={() => Dispatch(closeToggle())}>
          <div className="app__menu-wrapper wrapper">
            <AiOutlineClose className="menu__close" onClick={closeAppMenu} />

            <ul className="menu__items">
              {auth.user_id && (
                <div className="mobile__user flex-center">
                  <div className="user__container flex center">
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
                    <span className="p-text">
                      <Link
                        to={role === "driver" ? "/driver" : "/customer"}
                        className="user-link "
                      >
                        Dashboard
                      </Link>
                    </span>
                  </div>
                </div>
              )}
              <div className="meun__items-con">
                <Link to="/" onClick={closeAppMenu}>
                  Home
                </Link>
              </div>
              {/* {true && (
                <div className="meun__items-con">
                  <Link to="/" onClick={() => Dispatch(toggleMenu())}>
                    Partnership
                  </Link>
                </div>
              )} */}
              <div className="meun__items-con">
                <Link to="/about" onClick={closeAppMenu}>
                  About
                </Link>
              </div>
              <div className="meun__items-con">
                <Link to="/service" onClick={closeAppMenu}>
                  Our Service
                </Link>
              </div>{" "}
              <div className="meun__items-con">
                <Link to="/testimonial" onClick={closeAppMenu}>
                  Testimonial
                </Link>
              </div>
              {auth.user_id && (
                <div className="meun__items-con">
                  <Link
                    to={role === "driver" ? "/driver/help" : "/customer/help"}
                    onClick={closeAppMenu}
                  >
                    F&Q
                  </Link>
                </div>
              )}
              <div className="meun__items-con" onClick={closeAppMenu}>
                <Link to="https://www.apple.com/app-store/">iOS App</Link>
              </div>
              <div className="meun__items-con" onClick={closeAppMenu}>
                <Link to="https://play.google.com/store/games?hl=en&gl=US&pli=1">
                  Android App
                </Link>
              </div>
              {!auth.user_id && (
                <div className="meun__items-con" onClick={closeAppMenu}>
                  <Link to={`/login/customer`}>Login</Link>
                </div>
              )}
              {auth.user_id && (
                <div className="meun__items-con" onClick={handleLogout}>
                  <button className="logout">Logout</button>
                </div>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
