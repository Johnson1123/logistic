import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { images } from "../../../../asset";
import TabInput from "../../../Tabs/TabInput/TabInput";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import "./ProfileSetting.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfileSetting() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    home_address: "",
    gender: "",
    image_url: "",
  });

  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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

  const handleSumit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const body = JSON.stringify(values);
    try {
      const res = await axios.put(
        "https://techvonix.onrender.com/api/v1/profile/",
        body,
        config
      );
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log(error.response.data);
        return error.response.data;
      } else {
        console.log(error.response.data.message);
        return error.response.data.message;
      }
    }
  };

  return (
    <div className="ProfileSetting">
      <p className="title">Profile Settings</p>
      <div className="ProfileSetting__con flex">
        <div className="img__control">
          <div className="img__con">
            {selectedFile ? <img src={preview} /> : <img src={images.James} />}
          </div>
          <input
            type="file"
            id="img-upload"
            name="image_url"
            onChange={onSelectFile}
          />
          <label
            htmlFor="img-upload"
            className="custom-upload flex center p-text fw-500"
          >
            <MdOutlineEdit />
          </label>
        </div>
        <form className="ProfileSetting__form" onSubmit={handleSumit}>
          <div className="input__group">
            <TabInput
              type="text"
              label="First Name"
              placeholder="first name"
              name="first_name"
            />
            <TabInput
              type="text"
              label="Last Name"
              placeholder="last name"
              name="last_name"
            />
          </div>
          <div className="input__group">
            <TabInput
              type="text"
              label="Address"
              placeholder="home address"
              name="home_address"
            />
            <TabInput
              type="text"
              label="Gender"
              placeholder="gender"
              name="gender"
            />
          </div>
          <SignupBtn label="Save" />
        </form>
      </div>
    </div>
  );
}
export default ProfileSetting;
