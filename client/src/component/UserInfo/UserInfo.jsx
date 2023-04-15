import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsThreeDots } from "react-icons/bs";
import { Rate } from "antd";

import "./UserInfo.scss";
import { images } from "../../asset";
import { userInActive } from "../../features/toggleSlice/toggleSlice";

function UserInfo() {
  const dispatch = useDispatch();

  return (
    <div className="info__container" onClick={() => dispatch(userInActive())}>
      <div className="info__wrapper box-shadow">
        <p className="icon ">
          <BsThreeDots onClick={() => dispatch(userInActive())} />
        </p>
        <div className="info__img">
          <img src={images.Elia} alt="Ellia" />
        </div>
        <p className="name title">Elite James</p>
        <p className="p-text text">Passanger</p>

        <div className="review__container flex">
          <p className="small-title">Reviews</p>
          <Rate allowHalf value={4} style={{ color: "green" }} />
        </div>

        <div className="basic__info">
          <p className="small-title">Basic Information</p>
          <div className="info__details">
            <div className="box">
              <p className="detail-title">Email</p>
              <p className="p-text">Christianajames@gmail.com</p>
            </div>
            <div className="box">
              <p className="detail-title">Mobile</p>
              <p className="p-text">+891 009 784 8763</p>
            </div>
            <div className="box">
              <p className="detail-title">Gender</p>
              <p className="p-text">Female</p>
            </div>
            <div className="box">
              <p className="detail-title">Address</p>
              <p className="p-text">University La Pascal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
