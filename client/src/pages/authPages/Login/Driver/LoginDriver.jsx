import React from "react";
import Loginuser from "../../../../component/Loginuser/Loginuser";
import Background from "../../../../component/Background/Background";
import Overlay from "../../../../component/Overlay/Overlay";
import "./LoginDriver.scss";
import { loginDriver } from "../../../../features/Auths";

function LoginDriver() {
  return (
    <div className="login__Driver">
      <Background />
      <Loginuser role="driver" handler={loginDriver} />
      {false && <Overlay />}
    </div>
  );
}

export default LoginDriver;
