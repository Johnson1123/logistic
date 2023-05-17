import React from "react";
import Background from "../../../component/Background/Background";
import Newpwduser from "../../../component/Newpwduser/Newpwduser";
import Overlay from "../../../component/Overlay/Overlay";
import SuccessNewpwd from "../../../component/SuccessNewpwd/SuccessNewpwd";
import "./Newpwd.scss";
import { useSelector } from "react-redux";

function Newpwd() {
  const toggle = useSelector((state) => state.toggle.newPwdToggle);
  return (
    <div className="newpwd__con">
      <Background />
      <Newpwduser />
      {true && <Overlay />}
      {true && <SuccessNewpwd url={"wattogo"} />}
    </div>
  );
}

export default Newpwd;
