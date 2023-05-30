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

  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState("");
  const [modal, setModal] = useState(false);

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
    setModal(true);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      const { name } = e.target;
      SetFormData({ ...formData, [name]: reader.result });
    };
  };
  // console.log(formData);
  const handleModal = () => {
    setModal(!modal);
  };

  console.log(modal);
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
    <>
      <div className="Thirdform">
        <form onSubmit={handleSubmit}>
          <div className="input__file-group w-full">
            <p className="form-text">Driver’s license</p>
            <input
              type="file"
              id="file1"
              name={`licenseImage`}
              onChange={onSelectFile}
            />
            <div className="w-full flex justify-between items-center mt-5">
              <label htmlFor="file1" className="p-text upload px-5 py-2">
                + Upload file
              </label>
              <div className=" req-text w-1/2 text-right">
                {formData.licenseImage ? (
                  <p className="text-green-500 text-md text-bold">Selected</p>
                ) : (
                  "Required *"
                )}
              </div>
            </div>

            {error.licenseImage && (
              <p className="error">{error.licenseImage}</p>
            )}
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
              onChange={onSelectFile}
            />
            <div className="w-full flex justify-between items-center">
              <label htmlFor="file2" className="p-text upload px-5 py-2">
                + Upload file
              </label>
              <div className=" req-text w-1/2 text-right">
                {formData.interiorImage ? (
                  <p className="text-green-500 text-md text-bold">Selected</p>
                ) : (
                  "Required *"
                )}
              </div>
            </div>
            {error.interiorImage && (
              <p className="error">{error.interiorImage}</p>
            )}
          </div>
          <div className="input__file-group mt-5">
            <p className="form-text">Driver’s profile picture</p>
            <p className="p-text">
              Please provide a clear portrait picture (not a full body picture)
              of yourself. It should show your full face, front veiw with eyes
              open.
            </p>
            <input
              type="file"
              id="file3"
              name={`profileImage`}
              onChange={onSelectFile}
            />
            <div className="w-full flex justify-between items-center mt-5">
              <label htmlFor="file3" className="p-text upload px-5 py-2">
                + Upload file
              </label>
              <div className=" req-text w-1/2 text-right">
                {formData.profileImage ? (
                  <p className="text-green-500 text-md text-bold">Selected</p>
                ) : (
                  "Required *"
                )}
              </div>
            </div>
            {error.profileImage && (
              <p className="error">{error.profileImage}</p>
            )}
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
              onChange={onSelectFile}
            />
            <div className="w-full flex justify-between items-center my-1">
              <label htmlFor="file4" className="p-text upload">
                + Upload file
              </label>
              <div className=" req-text w-1/2 text-right">
                {formData.insuranceImage ? (
                  <p className="text-green-500 text-md text-bold">Selected</p>
                ) : (
                  "Required *"
                )}
              </div>
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
              onChange={onSelectFile}
            />
            <div className="w-full flex justify-between items-center mt-5">
              <label htmlFor="file5" className="p-text upload px-5">
                + Upload file
              </label>
              <div className=" req-text w-1/2 text-right">
                {formData.exteriorImage ? (
                  <p className="text-green-500 text-md text-bold">Selected</p>
                ) : (
                  "Required *"
                )}
              </div>
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
      {modal && (
        <div className="fixed w-full h-screen bg-green-100 top-0 left-0  z-50 flex justify-center  items-center px-6 py-2">
          <div className="h-[95%]">
            <div className="sm:w-full md:w-[800px]  rounded-lg p-6 py-10 md:py-5 bg-[rgba(0,0,0,0.4)]">
              <img
                src={preview}
                alt="data uploaded"
                className="object-contain mx-auto w-[500px] h-[300px]"
              />
            </div>
            <h3 className="text-gray-700 text-xl font-extrabold text-center font-roboto mt-5">
              Check readability
            </h3>
            <p className="text-sm font-light text-black-500 px-5 text-center mt-3">
              Make sure document details are clear to read, without blur and
              glare.
            </p>
            <button
              className="flex items-center px-4 w-80 mx-auto justify-center bg-green-600 text-white text-sm rounded-xl mt-10 cursor-pointer py-3 hover:text-green-600 hover:border-2 hover:border-green-600 hover:bg-transparent"
              onClick={handleModal}
            >
              My Photo is Readable
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ThirdForm;
