import React from "react";
import "./Profile.scss";

import { images } from "../../../asset";

function Profile() {
  return (
    <div className="FleetDriver">
      <p className="title">My Profile</p>
      <p className="p-text">Here you see overview of your Driver Details.</p>
      <div className="user__img-info">
        <div className="">
          <img
            src={images.Elia}
            alt="elia"
            className="w-[120px] h-[120px] rounded-full object-cover"
          />
        </div>
        <div className="user__info">
          <p className="name small-title">Mohammed Tahir</p>
          <p className="p-text">Active</p>
        </div>
      </div>
      <div className="personal__details">
        <p className="text-[20px] font-bold">Personal Destails</p>
        <div className="details__con">
          <div className="box w-[90%] 800px:w-[50%] items-center">
            <p className="personal-title 800px:w-[30%] w-[40%] truncate">
              First Name
            </p>
            <p className="p-text !text-left">Mohammed</p>
          </div>
          <div className="box box w-[90%] 800px:w-[50%] items-center">
            <p className="personal-title 800px:w-[30%] w-[40%] truncate">
              Last Name
            </p>
            <p className="p-text  !text-left">Tahir</p>
          </div>
          <div className="box box w-[90%] 800px:w-[50%] items-center">
            <p className="personal-title w-[30%]">Email</p>
            <p className="p-text !text-left">mtahirho75@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="company__container mt-7 800px:mt-10">
        <p className="text-[20px] font-bold border-b-[1px] border-slate-400 800px:w-[50%] py-3 ">
          Company
        </p>
        <div className="companies">
          <p className="p-text">Paris Fleet SHAD AND LYA PARTNERS</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
