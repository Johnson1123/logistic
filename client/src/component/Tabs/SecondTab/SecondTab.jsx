import React, { useEffect, useState } from "react";
import SignupBtn from "../../Btn/SignupBtn/SignupBtn";
import TabInput from "../TabInput/TabInput";
import "./SecondTab.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLicense,
  handlePageNumber,
} from "../../../features/driver/driver";

function SecondTab() {
  const Dispatch = useDispatch();

  const driver = useSelector((state) => state.driverDetails);

  const license = driver.license || "";

  const [formData, setFormData] = useState("");

  const [error, setError] = useState({});

  const validate = (formData) => {
    let formError = {};

    if (!formData) {
      formError.license = "license number is required";
    }
    return formError;
  };

  const [isSumitted, setIsSumitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(formData));
    setIsSumitted(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSumitted) {
      Dispatch(handlePageNumber(3));

      Dispatch(handleLicense(formData));
    }
  }, [formData, Dispatch, error, isSumitted]);

  return (
    <div className="secondTab flex">
      <p className="form-bold fw-700">Private and licensing details</p>
      <p className="small-title p-text">
        Your national ID and license details will be kept private
      </p>
      <form onSubmit={handleSubmit}>
        <TabInput
          label="Driver license"
          placeholder="AB235235"
          type="text"
          name="license"
          onChange={(e) => setFormData(e.target.value)}
        />
        {error.license && <p className="error">{error.license}</p>}
        <p className="form-text license-text">
          License Number on your driver’s documents
        </p>
        <SignupBtn label="PROCEED" type="submit" />
      </form>
    </div>
  );
}

export default SecondTab;
