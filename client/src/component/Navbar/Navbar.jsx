import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleMenu,
  closeToggle,
} from "../../features/toggleSlice/toggleSlice";
import "./navbar.scss";
import "./menu.scss";
import { images } from "../../asset";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import NavLinkLg from "./NavLinkLg";
import DownApp from "./nav/DownApp/DownApp";
import Company from "./nav/Company/Company";
import { useEffect } from "react";
import { loadProfile } from "../../features/customer/putCustomer";
import { logout } from "../../features/slice/auth/auth";

function Navbar() {
  const authToggle = useSelector((state) => state.toggleReducer.menuValue);
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state?.auth?.userInfo);
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
    Dispatch(logout());
  };
  const user_id = useSelector((state) => state?.auth?.user?.user_id);
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
            {user_id && (
              <div className="nav__items-con">
                <Link to="/about">About</Link>
              </div>
            )}
            {user_id ? (
              ""
            ) : (
              <div className="nav__items-con">
                <Link to="/">Partnership</Link>
              </div>
            )}

            {user_id && (
              <div className="nav__items-con">
                <Link to="/service">Our service</Link>
              </div>
            )}
            {user_id && (
              <div className="nav__items-con">
                <Link to="/testimonial">Testimonial</Link>
              </div>
            )}
            {user_id && (
              <div className="nav__items-con">
                <Link
                  to={role === "driver" ? "/driver/help" : "/customer/help"}
                >
                  F&Q
                </Link>
              </div>
            )}
            {user_id ? (
              ""
            ) : (
              <div className="nav__items-con">
                <NavLinkLg label="Company" />
                <Company />
              </div>
            )}
            {user_id ? (
              ""
            ) : (
              <div className="nav__items-con">
                <Link to="/login/customer">Log in</Link>
              </div>
            )}

            {user_id ? (
              ""
            ) : (
              <div className="nav__items-con">
                <NavLinkLg label="Download app" />
                <DownApp />
              </div>
            )}
          </ul>
        </div>

        {user_id && (
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
              {user_id && (
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
              {user_id && (
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
              {!user_id && (
                <div className="meun__items-con" onClick={closeAppMenu}>
                  <Link to={`/login/customer`}>Login</Link>
                </div>
              )}
              {user_id && (
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
