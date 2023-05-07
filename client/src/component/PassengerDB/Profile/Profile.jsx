import React from "react";
import { images } from "../../../asset";
import "./Profile.scss";
import { useSelector } from "react-redux";

function Profile() {
  const stateProfile = useSelector((state) => state.profile);
  return (
    <div className="Profile">
      <h4 className="title">My Profile</h4>
      <p className="p- small-title">
        Here you can check your driver profile details and modify some if they
        are outdated.
      </p>
      <div className="profile__content">
        <img
          src={stateProfile.img ? stateProfile.img : images.avatar}
          alt="Elia"
        />
        <p className="small-title name">{`${stateProfile.fname} ${stateProfile.lname}`}</p>
        <div className="profile__box flex">
          <p className="p-text">Email address</p>
          <p className="small-title">{stateProfile.email}</p>
        </div>
        <div className="profile__box flex">
          <p className="p-text">Phone number</p>
          <p className="small-title">{stateProfile.phone}</p>
        </div>
        <div className="profile__box flex">
          <p className="p-text">Home address</p>
          <p className="small-title">{stateProfile.address}</p>
        </div>
        <div className="profile__box flex">
          <p className="p-text">Gender</p>
          <p className="small-title">{stateProfile.gender}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
