import React from "react";
import { images } from "../../../asset";
import "./Profile.scss";

function Profile() {
  return (
    <div className="Profile">
      <h4 className="title">My Profile</h4>
      <p className="p- small-title">
        Here you can check your driver profile details and modify some if they
        are outdated.
      </p>
      <div className="profile__content">
        <img src={images.Elia} alt="Elia" />
        <p className="small-title name">Christiana James</p>
        <div className="profile__box flex">
          <p className="p-text">Email address</p>
          <p className="small-title">christianajames12@gmail.com</p>
        </div>
        <div className="profile__box flex">
          <p className="p-text">Phone number</p>
          <p className="small-title">+33758336521</p>
        </div>
        <div className="profile__box flex">
          <p className="p-text">Home address</p>
          <p className="small-title">Los Angeles, United States</p>
        </div>
        <div className="profile__box flex">
          <p className="p-text">Date of birth</p>
          <p className="small-title">12/03/1987</p>
        </div>
        <div className="profile__box flex">
          <p className="p-text">Driver license number</p>
          <p className="small-title">960978300034</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
