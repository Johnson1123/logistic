import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";
import "./CombineInput.scss";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../features/Auths";
import OtpInput from "react-otp-input";

function CombineInput() {
  const [otp, setOtp] = useState("");
  const [getEmail, setEmail] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const localData = localStorage.getItem("userEmail");
      const otpData = {
        code: otp,
        email: localData,
      };
      console.log(localData.email);
      const token = await dispatch(verifyUser(otpData)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="combine__con flex center" onSubmit={handleOtp}>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span></span>}
        renderInput={(props) => <input {...props} />}
      />
      <SignupBtn label="PROCEED" />
    </form>
  );
}

export default CombineInput;
