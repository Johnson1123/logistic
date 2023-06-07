import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsThreeDots } from "react-icons/bs";
import { Rate } from "antd";

import "./UserInfo.scss";
import { images } from "../../asset";
import { userInActive } from "../../features/toggleSlice/toggleSlice";
import { AiOutlineClose } from "react-icons/ai";

function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.userInfo);
  const user_type = useSelector((state) => state?.auth?.user?.user_type);

  return (
    <div className="info__container" onClick={() => dispatch(userInActive())}>
      <div className="info__wrapper box-shadow">
        <p className="icon ">
          <AiOutlineClose onClick={() => dispatch(userInActive())} />
        </p>
        <div className="info__img">
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
        <p className="name title">{user.first_name + user.last_name}</p>
        <p className="p-text text">{user_type}</p>

        <div className="review__container flex">
          <p className="small-title">Reviews</p>
          <Rate allowHalf value={4} style={{ color: "green" }} />
        </div>

        <div className="basic__info">
          <p className="small-title">Basic Information</p>
          <div className="info__details">
            <div className="box">
              <p className="detail-title">Email</p>
              <p className="w-full truncate tetx-sm text-right text-sm">
                {user?.email}
              </p>
            </div>
            <div className="box">
              <p className="detail-title">Mobile</p>
              <p className="w-full text-right text-sm">{user?.phone}</p>
            </div>
            <div className="box">
              <p className="detail-title">Gender</p>
              <p className=" w-full text-right text-sm">{user?.gender}</p>
            </div>
            <div className="box">
              <p className="detail-title">Address</p>
              <p className="w-full text-right text-xsm truncate">
                {user?.home_address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
