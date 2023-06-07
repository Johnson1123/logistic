import React from "react";
import NewpwdForm from "../NewpwdForm/NewpwdForm";
import "./Newpwduser.scss";
import ForgetPwdForm from "../ForgetPwdForm/ForgetPwdForm";

function Newpwduser({ setOpen }) {
  return (
    <div className="NewpwdForm flex center">
      <div className="NewpwdForm__con">
        <p className="form-title">Create a New Password</p>
        <p className="form-text">
          We strongly recommend more than 6 characters consisting of both upper
          and lower case
        </p>
        {/* <NewpwdForm /> */}
        <ForgetPwdForm setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Newpwduser;
