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
import { usePutProfileMutation } from "../../../../features/slice/profile/profileApiSlice";

function ProfileSetting() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const user = useSelector((state) => state?.auth?.userInfo);
  const putCustomer = useSelector((state) => state.setCustomerProfile);

  const [first_name, setFirst_name] = useState(user?.first_name);
  const [last_name, setLast_name] = useState(user?.last_name);
  const [home_address, setHome_address] = useState(user?.home_address);
  const [gender, setGender] = useState(user?.gender);
  const [image_url, setImage_url] = useState(user?.image_url);
  const [phone, setPhone] = useState(user?.phone);

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
      setImage_url(reader.result);
    };
  };

  const [putUser, { isLoading, error }] = usePutProfileMutation();
  const handleSumit = async (e) => {
    e.preventDefault();
    const body = {
      first_name,
      last_name,
      home_address,
      gender,
      image_url,
    };
    const res = await putUser(body);
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
              placeholder={first_name}
              value={first_name}
              name="first_name"
              onChange={(e) => setFirst_name(e.target.value)}
            />
            <TabInput
              type="text"
              label="Last Name"
              placeholder={last_name}
              name="last_name"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
            />
          </div>
          <div className="input__group">
            <TabInput
              type="text"
              label="Address"
              placeholder={home_address}
              name="home_address"
              value={home_address}
              onChange={(e) => setHome_address(e.target.value)}
            />
            <TabInput
              type="text"
              label="Gender"
              placeholder={gender}
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          {error ? (
            <p className="error" style={{ textAlign: "center" }}>
              {error?.data}
            </p>
          ) : (
            ""
          )}
          <SignupBtn
            label={isLoading ? <BeatLoader color="#36d7b7" /> : "Update"}
          />
        </form>
      </div>
    </div>
  );
}
export default ProfileSetting;
