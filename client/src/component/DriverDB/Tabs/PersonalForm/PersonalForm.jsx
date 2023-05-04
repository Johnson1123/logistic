import React, { useEffect, useState } from "react";
import { BiCloudUpload, BiUpload } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { images } from "../../../../asset";
import TabInput from "../../../Tabs/TabInput/TabInput";
import SignupBtn from "../../../Btn/SignupBtn/SignupBtn";
import "./PersonalForm.scss";

function PersonalForm() {
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

  const handleSubmit = () => {};
  return (
    <div className="PersonalForm flex">
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
      <form className="personal__form">
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
            type="text"
            label="Home Address"
            placeholder="Central Paris"
            name="home"
          />
          <TabInput
            type="text"
            label="Gender"
            placeholder="Male / Female"
            name="gender"
          />
        </div>
        {/* <div className="input__group group__detail">
          <p className="small-title">Driver documents</p>
          <p className="bold-text">
            Driver and taxi license details. Keep an eye on expiration dates.
          </p>
        </div>
        <div className="input__group">
          <TabInput
            type="text"
            label="Driver license number"
            placeholder="960978300034"
            name="email"
          />
          <TabInput
            type="text"
            label="Driver license expires"
            placeholder="18.01.2033"
            name="phone"
          />
        </div> */}
        <SignupBtn label="save" />
      </form>
    </div>
  );
}
export default PersonalForm;
