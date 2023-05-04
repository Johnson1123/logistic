import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { images } from "../../../../asset";
import TabInput from "../../../Tabs/TabInput/TabInput";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import "./ProfileSetting.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../../../../features/customer";
import { BeatLoader } from "react-spinners";

function ProfileSetting() {
  const navigate = useNavigate();
  const Dispatch = useDispatch();

  const putCustomer = useSelector((state) => state.putCustomer);
  const [selectedFile, setSelectedFile] = useState();

  const [file, setFile] = useState();
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    home_address: "",
    gender: "",
    image_url: "",
  });
  values.image_url = file;
  console.log(putCustomer.putUserStatus);

  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  console.log(accessToken.access);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
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
    setFile(e.target.value);
  };

  const handleSumit = async (e) => {
    e.preventDefault();
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${accessToken.access}`,
    //   },
    // };
    const body = JSON.stringify(values);
    try {
      const res = await Dispatch(putUser(values));
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
              onChange={handleChange}
            />
            <TabInput
              type="text"
              label="Last Name"
              placeholder="last name"
              name="last_name"
              onChange={handleChange}
            />
          </div>
          <div className="input__group">
            <TabInput
              type="text"
              label="Address"
              placeholder="home address"
              name="home_address"
              onChange={handleChange}
            />
            <TabInput
              type="text"
              label="Gender"
              placeholder="gender"
              name="gender"
              onChange={handleChange}
            />
          </div>
          {putCustomer.putUserStatus === "rejected" ? (
            <p className="error" style={{ textAlign: "center" }}>
              {putCustomer.putUserError}
            </p>
          ) : (
            ""
          )}
          <SignupBtn
            label={
              putCustomer.putUserStatus === "pending" ? (
                <BeatLoader color="#36d7b7" />
              ) : (
                "Update"
              )
            }
          />
        </form>
      </div>
    </div>
  );
}
export default ProfileSetting;
