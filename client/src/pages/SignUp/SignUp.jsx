// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Background from "../../component/Background/Background";
// import CreateAccout from "../../component/CreateAccout/CreateAccout";
// import Overlay from "../../component/Overlay/Overlay";
// import SuccessSignUp from "../../component/SuccessSignUp/SuccessSignUp";
// import "./SignUp.scss";
// import FORM_SIGN from "../../component/Form_Signup/FORM_SIGNUP";
// import { Link, useNavigate } from "react-router-dom";
// import SocialMedia from "../../component/SocialMedia/SocialMedia";
// import OTP from "../OTP/OTP";
// import { useEffect } from "react";
// import {
//   closeOtpToggle,
//   closeSignUp,
// } from "../../features/toggleSlice/toggleSlice";

// function SignUp({ type }) {
//   const signUptoggle = useSelector((state) => state.toggleReducer.signUp);
//   const Dispatch = useDispatch();
//   const navigate = useNavigate();
//   const auth = useSelector((state) => state.auth);
//   useEffect(() => {
//     if (auth.user_id) {
//       navigate("/");
//     }
//   }, [auth.user_id, navigate]);
//   return (
//     <>
//       <div className="signUp__con">
//         <Background />
//         {signUptoggle && (
//           <div className="signup__content">
//             <p className="form-bold">START FOR FREE</p>
//             <p className="form-title p-text">CREATE AN ACCOUNT</p>
//             <p className="form-text">
//               Please fill in Your Accurate Information
//             </p>
//             <FORM_SIGN />
//             <p className="form-text login_here">
//               Already have an account?<Link to="/login">Login here!</Link>
//             </p>
//             <div className=" connect_sign flex center">
//               <div></div>
//               <p className="small-text">Connect With</p>
//               <div></div>
//             </div>
//             <SocialMedia />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default SignUp;
