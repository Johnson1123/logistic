import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { images } from "../../../../asset";
import TabInput from "../../../Tabs/TabInput/TabInput";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import "./ProfileSetting.scss";
import { useNavigate } from "react-router-dom";

function ProfileSetting() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="ProfileSetting">
      <p className="title">Profile Settings</p>
      <div className="ProfileSetting__con flex">
        <div className="img__control">
          <div className="img__con">
            {selectedFile ? <img src={preview} /> : <img src={images.James} />}
          </div>
          <input type="file" id="img-upload" onChange={onSelectFile} />
          <label
            htmlFor="img-upload"
            className="custom-upload flex center p-text fw-500"
          >
            <MdOutlineEdit />
          </label>
        </div>
        <form className="ProfileSetting__form">
          <div className="input__group">
            <TabInput
              type="text"
              label="First Name"
              placeholder="James"
              name="Fname"
            />
            <TabInput
              type="text"
              label="Last Name"
              placeholder="Williams"
              name="Lname"
            />
          </div>
          <div className="input__group">
            <TabInput
              type="email"
              label="Email"
              placeholder="jameswilliams@gmail.com"
              name="email"
            />
            <TabInput
              type="tel"
              label="Phone number"
              placeholder="+33758336521"
              name="phone"
            />
          </div>
          <div className="input__group">
            <TabInput
              type="text"
              label="Address"
              placeholder="960978300034"
              name="Address"
            />
            <TabInput
              type="text"
              label="Date of birth"
              placeholder="18.01.2033"
              name="date"
            />
          </div>
          <SignupBtn label="Save" />
        </form>
      </div>
    </div>
  );
}
export default ProfileSetting;
