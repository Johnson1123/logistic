import React from "react";
import Background from "../../../component/Background/Background";
import Newpwduser from "../../../component/Newpwduser/Newpwduser";
import Overlay from "../../../component/Overlay/Overlay";
import SuccessNewpwd from "../../../component/SuccessNewpwd/SuccessNewpwd";
import "./SetPwd.scss";
import { useSelector } from "react-redux";

function SetForgetPwd() {
  //   const toggle = useSelector((state) => state.toggle.newPwdToggle);
  return (
    <div className="newpwd__con">
      <Background />
      <Newpwduser />
      {true && <Overlay />}
      {true && (
        <SuccessNewpwd text="Password Changed Successfully" url={"login"} />
      )}
    </div>
  );
}

export default SetForgetPwd;
