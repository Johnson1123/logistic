import React, { useEffect, useState } from "react";
import SignupBtn from "../../Btn/SignupBtn/SignupBtn";
import "./ThirdForm.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDocument,
  handlePageNumber,
} from "../../../features/driver/driver";
function ThirdForm() {
  const Dispatch = useDispatch();
  const driver = useSelector((state) => state.driverDetails);

  const licenseImage = driver.licenseImage || "";
  const interiorImage = driver.interiorImage || "";
  const exteriorImage = driver.exteriorImage || "";
  const profileImage = driver.profileImage || "";
  const insuranceImage = driver.insuranceImage || "";

  const [formData, SetFormData] = useState({
    licenseImage: licenseImage,
    interiorImage: interiorImage,
    exteriorImage: exteriorImage,
    profileImage: profileImage,
    insuranceImage: insuranceImage,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState({});

  const validate = (formData) => {
    let formError = {};

    if (!formData.licenseImage) {
      formError.licenseImage = "license photo is required";
    }
    if (!formData.interiorImage) {
      formError.interiorImage = "interior photo is required";
    }
    if (!formData.exteriorImage) {
      formError.exteriorImage = "exterior photo is required";
    }
    if (!formData.insuranceImage) {
      formError.insuranceImage = "Valid Insurance Policy Documents is required";
    }
    if (!formData.profileImage) {
      formError.profileImage = "profile picture is required";
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
      Dispatch(handlePageNumber(4));
      Dispatch(
        handleDocument({
          licenseImage: formData.licenseImage,
          interiorImage: formData.interiorImage,
          exteriorImage: formData.exteriorImage,
          profileImage: formData.profileImage,
          insuranceImage: formData.insuranceImage,
        })
      );
    }
  }, [formData, Dispatch, error, isSumitted]);
  return (
    <div className="Thirdform inter">
      <form onSubmit={handleSubmit}>
        <div className="input__file-group w-full">
          <p className="form-text">Driver’s license</p>
          <input
            type="file"
            id="file1"
            name={`licenseImage`}
            onChange={handleChange}
          />
          <div className="w-full flex justify-between items-center mt-5">
            <label htmlFor="file1" className="p-text upload">
              + Upload file
            </label>
            <div className=" req-text w-1/2 text-right">Required *</div>
          </div>

          {error.licenseImage && <p className="error">{error.licenseImage}</p>}
        </div>
        <div className="input__file-group">
          <p className="form-text">Interior picture of your Car</p>
          <p className="p-text">
            Provide a clear interior picture of your car.
          </p>
          <input
            type="file"
            id="file2"
            name={`interiorImage`}
            onChange={handleChange}
          />
          <div className="w-full flex justify-between items-center">
            <label htmlFor="file2" className="p-text upload">
              + Upload file
            </label>
            <div className=" req-text w-1/2 text-right">Required *</div>
          </div>
          {error.interiorImage && (
            <p className="error">{error.interiorImage}</p>
          )}
        </div>
        <div className="input__file-group mt-5">
          <p className="form-text">Driver’s profile picture</p>
          <p className="p-text">
            Please provide a clear portrait picture (not a full body picture) of
            yourself. It should show your full face, front veiw with eyes open.
          </p>
          <input
            type="file"
            id="file3"
            name={`profileImage`}
            onChange={handleChange}
          />
          <div className="w-full flex justify-between items-center mt-5">
            <label htmlFor="file3" className="p-text upload">
              + Upload file
            </label>
            <div className=" req-text w-1/2 text-right">Required *</div>
          </div>
          {error.profileImage && <p className="error">{error.profileImage}</p>}
        </div>
        <div className="input__file-group">
          <p className="form-text">Valid Insurance Policy Documents</p>
          <div className="p-text">
            <p className="p-text">
              All four corners of the page should be captured. Ensure the
              following are clear after photographing
            </p>
            <ol className="third__ul" type="1">
              <li>Policy number and insurance company name </li>
              <li>
                Start and expiry dates. Confirm the policy has been updated on
                askniid.org
              </li>
            </ol>
          </div>
          <input
            type="file"
            id="file4"
            name="insuranceImage"
            onChange={handleChange}
          />
          <div className="w-full flex justify-between items-center my-1">
            <label htmlFor="file4" className="p-text upload">
              + Upload file
            </label>
            <div className=" req-text w-1/2 text-right">Required *</div>
          </div>
          {error.insuranceImage && (
            <p className="error">{error.insuranceImage}</p>
          )}
        </div>
        <div className="input__file-group">
          <p className="form-text">Exterior picture of your Car</p>
          <p className="p-text">
            Provide a clear exterior picture of your car.
          </p>
          <input
            type="file"
            id="file5"
            name="exteriorImage"
            onChange={handleChange}
          />
          <div className="w-full flex justify-between items-center mt-5">
            <label htmlFor="file5" className="p-text upload">
              + Upload file
            </label>
            <div className=" req-text w-1/2 text-right">Required *</div>
          </div>
          {error.exteriorImage && (
            <p className="error">{error.exteriorImage}</p>
          )}
        </div>
        <div className="btn__wrapper">
          <SignupBtn label="PROCEED" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ThirdForm;
