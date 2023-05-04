import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupBtn from "../../Btn/SignupBtn/SignupBtn";
import TabInput from "../TabInput/TabInput";
import "./FourthForm.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDriverPayment,
  handlePageNumber,
  uploadDriverDetail,
} from "../../../features/driver/driver";

function FourthForm() {
  const Dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const driverPayment = useSelector(
    (state) => state.driverDetails.driverPayment
  );
  const driverDocument = useSelector(
    (state) => state.driverDetails.driverDocument
  );
  const personalInfo = useSelector((state) => state.driverDetails.personalInfo);
  const license = useSelector((state) => state.driverDetails.license);

  const billType = driverPayment.billType;
  const companyName = driverPayment.companyName || "";
  const paymentAdress = driverPayment.paymentAdress || "";
  const regCode = driverPayment.regCode || "";
  const vatNumber = driverPayment.vatNumber || "";
  const accountName = driverPayment.accountName || "";
  const xlcabPayment = driverPayment.xlcabPayment || "";
  const bankName = driverPayment.bankName || "";

  const [formData, setFormData] = useState({
    billType: billType,
    companyName: companyName,
    paymentAdress: paymentAdress,
    regCode: regCode,
    vatNumber: vatNumber,
    accountName: accountName,
    xlcabPayment: xlcabPayment,
    bankName: bankName,
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState({});

  const validate = (formData) => {
    let formError = {};

    if (!formData.billType) {
      formError.billType = "enter billing type";
    }
    if (!formData.companyName) {
      formError.companyName = "Company is required";
    }
    if (!formData.paymentAdress) {
      formError.paymentAdress = "Address is required ";
    }
    if (!formData.regCode) {
      formError.regCode = "Registration is required";
    }
    if (!formData.vatNumber) {
      formError.vatNumber = "Vat number is required";
    }
    if (!formData.accountName) {
      formError.accountName = "account name is required";
    }
    if (!formData.xlcabPayment) {
      formError.xlcabPayment = " xlcabPayment is required";
    }
    if (!formData.bankName) {
      formError.bankName = " Provide Bank name";
    }

    return formError;
  };

  const [isSumitted, setIsSumitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(formData));
    setIsSumitted(true);
  };
  const driverData = {
    vehicle: {
      name: personalInfo.vehicleName,
      plate_number: personalInfo.vehiclePlate,
      color: personalInfo.vehicleColor,
      external_picture: driverDocument.exteriorImage,
      internal_picture: driverDocument.interiorImage,
      manufacturer_and_model: personalInfo.vehicleModel,
      vehicle_year: personalInfo.vehicleYear,
    },
    first_name: personalInfo.driverFName,
    last_name: personalInfo.driverLName,
    refferal_code: personalInfo.driverReferral,
    vehicle_available: personalInfo.vehicle_available,
    driver_license: license,
    driver_license_image: driverDocument.licenseImage,
    drivers_picture: driverDocument.profileImage,
    billing_type: formData.billType,
    company_name: formData.companyName,
    address: formData.paymentAdress,
    registration_code: formData.regCode,
    vat_liability: isChecked,
    vat_number: formData.vatNumber,
    bank_account_holder_name: formData.accountName,
    bank_account_number: formData.xlcabPayment,
    bank_name_or_bic_swift: formData.bankName,
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSumitted) {
      Dispatch(
        handleDriverPayment({
          billType: formData.billType,
          companyName: formData.companyName,
          paymentAdress: formData.paymentAdress,
          regCode: formData.regCode,
          vatNumber: formData.vatNumber,
          accountName: formData.accountName,
          xlcabPayment: formData.xlcabPayment,
          bankName: formData.bankName,
          vat_liability: isChecked,
        })
      );
      Dispatch(uploadDriverDetail(driverData));
      navigator("/wattogo");
    }
  }, [formData, Dispatch, isSumitted, error]);

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
    <form className="fouthForm" onSubmit={handleSubmit}>
      <div className="input__group">
        <div className="input-error-con">
          <div className="form__select">
            <p className="form-text bill-text">Billing type</p>
            <div className="select">
              <select name="billType" onChange={handleOnchange}>
                <option name="billType" value="company">
                  Company
                </option>
                <option name="billType" value="personal">
                  Personal
                </option>
              </select>
            </div>
          </div>
          {error.billType && <p className="error">{error.billType}</p>}
        </div>
        <div className="input-error-con">
          <TabInput
            label="Company Name"
            type="text"
            placeholder="Technovix Ride"
            name={`companyName`}
            onChange={handleOnchange}
          />
          {error.companyName && <p className="error">{error.companyName}</p>}
        </div>
      </div>

      <div className="input__group">
        <div className="singleInput">
          <TabInput
            label="Address"
            type="text"
            placeholder=""
            name={`paymentAdress`}
            onChange={handleOnchange}
          />
          {error.paymentAdress && (
            <p className="error">{error.paymentAdress}</p>
          )}
          <p className="p-text">If someone referred you, enter their code.</p>
        </div>
        <div className="vat">
          <p className="form-bold">Registration code?</p>
          <TabInput
            type="text"
            placeholder=""
            name={`regCode`}
            onChange={handleOnchange}
          />
          {error.regCode && <p className="error">{error.regCode}</p>}
          <div className="vat__checkbox p-text">
            <input type="checkbox" name="vat" onChange={handleCheck} />
            VAT liability
          </div>
        </div>
      </div>
      {toggle && (
        <>
          <div className="input__group">
            <div className="input-error-con">
              <TabInput
                label="VAT number"
                type="number"
                placeholder="89754"
                name={`vatNumber`}
                onChange={handleOnchange}
              />
              {error.vatNumber && <p className="error">{error.vatNumber}</p>}
            </div>
            <div className="input-error-con">
              <TabInput
                label="Bank account holder name"
                type="text"
                placeholder="Technovix Innovations"
                name={`accountName`}
                onChange={handleOnchange}
              />
              {error.accountName && (
                <p className="error">{error.accountName}</p>
              )}
            </div>
          </div>

          <div className="input__group">
            <div className="input-error-con">
              <TabInput
                label="Technovix Innovations"
                type="number"
                placeholder="3874646099383335"
                name={`xlcabPayment`}
                onChange={handleOnchange}
              />
              {error.xlcabPayment && (
                <p className="error">{error.xlcabPayment}</p>
              )}
            </div>
            <div className="input-error-con">
              <TabInput
                label="Bank name or BIC/SWIFT"
                type="text"
                placeholder="TRANS BANK"
                name={`bankName`}
                onChange={handleOnchange}
              />
              {error.bankName && <p className="error">{error.bankName}</p>}
            </div>
          </div>
        </>
      )}
      <SignupBtn label="PROCEED" type="submit" />
    </form>
  );
}

export default FourthForm;
