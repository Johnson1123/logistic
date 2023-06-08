import React from "react";
import { images } from "../../../../asset";
import "./SecondTab.scss";
import { useSelector } from "react-redux";

export default function SecondTab() {
  const user = useSelector((state) => state?.auth?.userInfo);
  const user_type = useSelector((state) => state?.auth?.user?.user_type);
  return (
    <div className="SecondTab">
      <h4 className="font-bold text-md mb-3">My Profile</h4>
      <p className="text-sm font-[400] w-[90%] ">
        Here you can check your driver profile details and modify some if they
        are outdated.
      </p>
      <div className="profile__content">
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
        <p className=" name mt-3 text-[16px]">{`${user?.first_name}  ${user?.last_name}`}</p>
        <div className="profile__box flex">
          <p className="text-sm font-bold w-[30%]">Email address</p>
          <p className="text-sm truncate w-[65%] text-right">{user?.email}</p>
        </div>
        <div className="profile__box flex">
          <p className="text-sm font-bold w-[30%]">Phone number</p>
          <p className="text-sm truncate w-[65%] text-right">{user?.phone}</p>
        </div>
        <div className="profile__box flex">
          <p className="text-sm font-bold w-[30%]">Home address</p>
          <p className="small-title truncate w-[65%] text-right">
            {user?.address}
          </p>
        </div>
        <div className="profile__box flex">
          <p className="text-sm font-bold w-[30%]">Date of birth</p>
          <p className="small-title truncate w-[65%] text-right">
            {user?.birth_date}
          </p>
        </div>
        <div className="profile__box flex">
          <p className="text-sm font-bold w-[30%]">Driver license</p>
          <p className="text-sm truncate w-[65%] text-right">{user?.lincese}</p>
        </div>
      </div>
    </div>
  );
}
