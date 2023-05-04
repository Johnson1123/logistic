import React, { useEffect, useState } from "react";
import TabInput from "../TabInput/TabInput";
import "./FirstForm.scss";
import SignupBtn from "../../Btn/SignupBtn/SignupBtn";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handlePageNumber,
  handlePersonalInfo,
} from "../../../features/driver/driver";

function FirstForm() {
  const Dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const driver = useSelector((state) => state.driverDetails);
  const pageNumber = driver.pageNumber;
  const driverFName = driver.Fname || "";
  const driverLName = driver.Lname || "";
  const driverReferral = driver.referral || "";
  const vehicleModel = driver.vehicleModel || "";
  const vehicleYear = driver.vehicleYear || "";
  const vehiclePlate = driver.vehiclePlate || "";
  const vehicleColor = driver.vehicleColor || "";
  const vehicleName = driver.vehicleName || "";

  const [formData, setFormData] = useState({
    driverFName: driverFName,
    driverLName: driverLName,
    driverReferral: driverReferral,
    vehicleModel: vehicleModel,
    vehicleYear: vehicleYear,
    vehiclePlate: vehiclePlate,
    vehicleColor: vehicleColor,
    vehicleName: vehicleName,
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    let formError = {};

    if (!formData.driverFName) {
      formError.driverFName = "first name is required";
    }
    if (!formData.driverLName) {
      formError.driverLName = "last name is required";
    }
    if (!formData.driverReferral) {
      formError.driverReferral = "referral is code is required";
    }
    if (isChecked && !formData.vehicleModel) {
      formError.vehicleModel = "Vehicle model is required";
    }
    if (isChecked && !formData.vehicleName) {
      formError.vehicleName = "Vehicle Name is required";
    }
    if (isChecked && !formData.vehicleYear) {
      formError.vehicleYear = "Vehicle year is required";
    }
    if (isChecked && !formData.vehiclePlate) {
      formError.vehiclePlate = "Vehicle plate number is required";
    }
    if (isChecked && !formData.vehicleColor) {
      formError.vehicleColor = "Vehicle color is required";
    }

    return formError;
  };

  const [isSumitted, setIsSumitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSumitted(true);
  };

  useEffect(() => {
    console.log(isChecked);
    if (Object.keys(errors).length === 0 && isSumitted) {
      Dispatch(handlePageNumber(2));
      Dispatch(
        handlePersonalInfo({
          driverFName: formData.driverFName,
          driverLName: formData.driverLName,
          driverReferral: formData.driverReferral,
          vehicleModel: formData.vehicleModel,
          vehicleYear: formData.vehicleYear,
          vehiclePlate: formData.vehiclePlate,
          vehicleColor: formData.vehicleColor,
          vehicle_available: isChecked,
          vehicleName: formData.vehicleName,
        })
      );
    }
  }, [formData, Dispatch, isSumitted, errors]);

  const [toggle, settoggle] = useState(false);

  const handleCheck = (e) => {
    if (e.target.checked) {
      settoggle(true);
      setIsChecked(true);
    } else {
      settoggle(false);
      setIsChecked(false);
    }
  };
  return (
    <form className="fisrtForm" onSubmit={handleSubmit}>
      <div className="input__group">
        <div className="input-error-con">
          <TabInput
            label="First name"
            type="text"
            placeholder={driverFName}
            value={driverFName}
            name="driverFName"
            onChange={handleOnchange}
          />
          {errors.driverFName && <p className="error">{errors.driverFName}</p>}
        </div>

        <div className="input-error-con">
          <TabInput
            label="Last name"
            type="text"
            placeholder={driverLName}
            value={driverLName}
            name="driverLName"
            onChange={handleOnchange}
          />
          {errors.driverLName && <p className="error">{errors.driverLName}</p>}
        </div>
      </div>
      <div className="input__group">
        <div className="input-error-con">
          <div className="singleInput">
            <TabInput
              label="Referral code"
              type="text"
              placeholder={driverReferral}
              name="driverReferral"
              onChange={handleOnchange}
            />
            <p className="form-text refer-text">
              If someone referred you, enter their code.
            </p>
            {errors.driverReferral && (
              <p className="error">{errors.driverReferral}</p>
            )}
          </div>
        </div>
        <div className="Mfleet">
          <p className="form-bold">Have multiple vehicles?</p>
          <p className="p-text">
            <Link to="signLocalP" className="link-text">
              {"Sign up as a fleet owner"}
            </Link>
            to become Local Partner
          </p>
          <div className="flex">
            <input type="checkbox" name="Mfleet" onChange={handleCheck} />
            <p className="check-text">I have a vehicle that i will drive.</p>
          </div>
        </div>
      </div>
      {toggle && (
        <>
          <div className="input__group">
            <div className="input-error-con">
              <TabInput
                label="Vehicle Name"
                type="text"
                placeholder={vehicleName}
                value={vehicleName}
                name="vehicleName"
                onChange={handleOnchange}
              />
              {errors.vehicleName && (
                <p className="error">{errors.vehicleName}</p>
              )}
            </div>
            <div className="input-error-con">
              <TabInput
                label="Vehicle Year"
                type="text"
                placeholder={vehicleYear}
                value={vehicleYear}
                name="vehicleYear"
                onChange={handleOnchange}
              />
              {errors.vehicleYear && (
                <p className="error">{errors.vehicleYear}</p>
              )}
            </div>
          </div>

          <div className="input__group">
            <div className="input-error-con">
              <TabInput
                label="License Plate"
                type="text"
                placeholder={vehiclePlate}
                value={vehiclePlate}
                name="vehiclePlate"
                onChange={handleOnchange}
              />
              {errors.vehiclePlate && (
                <p className="error">{errors.vehiclePlate}</p>
              )}
            </div>
            <div className="input-error-con">
              <TabInput
                label="Vehicle Color"
                type="text"
                placeholder={vehicleColor}
                value={vehicleColor}
                name="vehicleColor"
                onChange={handleOnchange}
              />
              {errors.vehicleColor && (
                <p className="error">{errors.vehicleColor}</p>
              )}
            </div>
          </div>
          <div className="input__group">
            <div className="input-error-con">
              <TabInput
                label="Vehicle manufacturer and model"
                type="text"
                placeholder={vehicleModel}
                value={vehicleModel}
                name="vehicleModel"
                onChange={handleOnchange}
              />
              {errors.vehicleModel && (
                <p className="error">{errors.vehicleModel}</p>
              )}
            </div>
          </div>
        </>
      )}
      <SignupBtn label="PROCEED" type="submit" />
    </form>
  );
}

export default FirstForm;
