import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { images } from "../../../../asset";
import TabInput from "../../../Tabs/TabInput/TabInput";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import "./ProfileSetting.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProfile,
  putUser,
} from "../../../../features/customer/putCustomer";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../../../../features/customer/getUser";

function ProfileSetting() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const putCustomer = useSelector((state) => state.setCustomerProfile);
  const [selectedFile, setSelectedFile] = useState();
  const user = useSelector((state) => state?.profile?.profile);

  useEffect(() => {
    Dispatch(loadProfile());
  }, []);

  const [img, setImg] = useState("");

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    home_address: "",
    gender: "",
  });

  const accessToken = localStorage.getItem("authToken");
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
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };
  values.image_url = img ? img : user?.image_url;
  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      const res = Dispatch(putUser(values));
      if (res.status === 200) {
        navigate("/customer/profile");
      }
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
            {selectedFile ? (
              <img src={preview} />
            ) : (
              <img src={user?.image_url ? user?.image_url : images.avatar} />
            )}
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
              placeholder={user?.first_name}
              value={user?.first_name}
              name="first_name"
              onChange={handleChange}
            />
            <TabInput
              type="text"
              label="Last Name"
              placeholder={user?.last_name}
              name="last_name"
              value={user?.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="input__group">
            <TabInput
              type="text"
              label="Address"
              placeholder={user?.home_address}
              name="home_address"
              value={user?.home_address}
              onChange={handleChange}
            />
            <TabInput
              type="text"
              label="Gender"
              placeholder={user?.gender}
              name="gender"
              value={user?.gender}
              onChange={handleChange}
            />
          </div>
          {putCustomer?.putUserStatus === "rejected" ? (
            <p className="error" style={{ textAlign: "center" }}>
              {putCustomer?.putUserError}
            </p>
          ) : (
            ""
          )}
          <SignupBtn
            label={
              putCustomer?.putUserStatus === "pending" ? (
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
