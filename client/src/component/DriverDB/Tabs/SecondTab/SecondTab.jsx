import React from "react";
import { images } from "../../../../asset";
import "./SecondTab.scss";
import { useSelector } from "react-redux";

export default function SecondTab() {
  const user = useSelector((state) => state?.auth?.userInfo);
  const user_type = useSelector((state) => state?.auth?.user?.user_type);
  return (
    <div className="SecondTab">
      <h4 className="font-bold text-md mb-3 800px:text-[20px] ">My Profile</h4>
      <p className="text-sm font-[400] w-[90%] 800px:text-lg">
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
        <div className="profile__box flex w-[100%] 800px:w-[70%]">
          <p className="text-sm font-bold w-[30%] 800px:text-[16px] ">
            Email address
          </p>
          <p className="text-sm truncate w-[65%] text-right 800px:text-[16px]">
            {user?.email}
          </p>
        </div>
        <div className="profile__box flex w-[100%] 800px:w-[70%]">
          <p className="text-sm font-bold w-[30%] 800px:text-[16px] ">
            Phone number
          </p>
          <p className="text-sm truncate w-[65%] text-right 800px:text-[16px]">
            {user?.phone}
          </p>
        </div>
        <div className="profile__box flex w-[100%] 800px:w-[70%]">
          <p className="text-sm font-bold w-[30%] 800px:text-[16px] ">
            Home address
          </p>
          <p className="small-title truncate w-[65%] text-right 800px:text-[16px]">
            {user?.address}
          </p>
        </div>
        <div className="profile__box flex w-[100%] 800px:w-[70%] ">
          <p className="text-sm font-bold w-[30%] 800px:text-[16px] ">
            Date of birth
          </p>
          <p className="small-title truncate w-[65%] text-right 800px:text-[16px]">
            {user?.birth_date}
          </p>
        </div>
        <div className="profile__box flex w-[100%] 800px:w-[70%]">
          <p className="text-sm font-bold w-[30%] 800px:text-[16px] ">
            Driver license
          </p>
          <p className="text-sm truncate w-[65%] text-right 800px:text-[16px]">
            {user?.lincese}
          </p>
        </div>
      </div>
    </div>
  );
}
