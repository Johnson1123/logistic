import React, { useState } from "react";
import Background from "../../../component/Background/Background";
import Newpwduser from "../../../component/Newpwduser/Newpwduser";
import Overlay from "../../../component/Overlay/Overlay";
import SuccessNewpwd from "../../../component/SuccessNewpwd/SuccessNewpwd";
import "./Newpwd.scss";
import { useSelector } from "react-redux";

function Newpwd() {
  const [open, setOpen] = useState(false);
  return (
    <div className="newpwd__con">
      <Background />
      <Newpwduser setOpen={setOpen} />
      {open && <Overlay />}
      {open && <SuccessNewpwd url={"/login/customer"} />}
    </div>
  );
}

export default Newpwd;
