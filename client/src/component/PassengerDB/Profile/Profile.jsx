import React, { useEffect, useState } from "react";
import { images } from "../../../asset";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../features/api";
import { loadProfile } from "../../../features/customer/putCustomer";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.profile?.profile);
  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);
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
            user
              ? user?.image_url
                ? user?.image_url
                : images.avatar
              : images.avatar
          }
          alt="Elia"
        />

        {user?.first_name && (
          <p className="small-title name">{`${user?.first_name} ${user?.last_name}`}</p>
        )}
        <div className="profile__box flex">
          <p className="p-text">Email address</p>
          {user?.email && <p className="small-title">{user?.email}</p>}
        </div>
        <div className="profile__box flex">
          <p className="p-text">Phone number</p>
          {user?.phone && <p className="small-title">{user?.phone}</p>}
        </div>
        <div className="profile__box flex">
          <p className="p-text">Home address</p>
          {user?.home_address && (
            <p className="small-title">{user?.home_address}</p>
          )}
        </div>
        <div className="profile__box flex">
          <p className="p-text">Gender</p>
          {user?.gender && <p className="small-title">{user?.gender}</p>}
        </div>
      </div>
    </div>
  );
}

export default Profile;
