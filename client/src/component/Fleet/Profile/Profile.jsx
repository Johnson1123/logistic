import React from "react";
import "./Profile.scss";

import { images } from "../../../asset";

function Profile() {
  return (
    <div className="Profile">
      <p className="title">Driver Profile</p>
      <p className="p-text">Here you see overview of your Driver Details.</p>
      <div className="user__img-info">
        <div className="user__img">
          <img src={images.Elia} alt="elia" />
        </div>
        <div className="user__info">
          <p className="name small-title">Mohammed Tahir</p>
          <p className="p-text">Active</p>
        </div>
      </div>
      <div className="personal__details">
        <p className="small-title">Personal Destails</p>
        <div className="details__con">
          <div className="box">
            <p className="personal-title">First Name</p>
            <p className="p-text">Mohammed</p>
          </div>
          <div className="box">
            <p className="personal-title">Last Name</p>
            <p className="p-text">Tahir</p>
          </div>
          <div className="box">
            <p className="personal-title">Username</p>
            <p className="p-text">Tahir22</p>
          </div>
          <div className="box">
            <p className="personal-title">Email</p>
            <p className="p-text">mtahirho75@gmail.com</p>
          </div>
          <div className="box">
            <p className="personal-title">Phone Number</p>
            <p className="p-text">+33628566911</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
