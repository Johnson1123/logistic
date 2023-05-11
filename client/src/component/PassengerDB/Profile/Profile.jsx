import React, { useState } from "react";
import { images } from "../../../asset";
import "./Profile.scss";
import { useSelector } from "react-redux";

function Profile() {
  const profile = useSelector((state) => state.getCustomerProfile.getProfile);
  console.log(profile);
  return (
    <div className="Profile">
      <h4 className="title">My Profile</h4>
      <p className="p- small-title">
        Here you can check your driver profile details and modify some if they
        are outdated.
      </p>
      <div className="profile__content">
        <img
          src={
            profile?.data?.image_url ? profile?.data?.image_url : images.avatar
          }
          alt="Elia"
        />

        {profile?.data?.first_name && (
          <p className="small-title name">{`${profile?.data?.data?.first_name} ${profile?.data?.data?.last_name}`}</p>
        )}
        <div className="profile__box flex">
          <p className="p-text">Email address</p>
          {profile?.data?.data?.email && (
            <p className="small-title">{profile?.data?.data?.email}</p>
          )}
        </div>
        <div className="profile__box flex">
          <p className="p-text">Phone number</p>
          {profile?.data?.data?.phone && (
            <p className="small-title">{profile?.data?.data?.phone}</p>
          )}
        </div>
        <div className="profile__box flex">
          <p className="p-text">Home address</p>
          {profile?.data?.data?.home_address && (
            <p className="small-title">{profile?.data?.data?.home_address}</p>
          )}
        </div>
        <div className="profile__box flex">
          <p className="p-text">Gender</p>
          {profile?.data?.data?.gender && (
            <p className="small-title">{profile?.data?.data?.gender}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
