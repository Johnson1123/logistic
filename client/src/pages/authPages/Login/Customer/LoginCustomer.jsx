import React from "react";
import Loginuser from "../../../../component/Loginuser/Loginuser";
import Background from "../../../../component/Background/Background";
import Overlay from "../../../../component/Overlay/Overlay";
import "./Login.scss";

function LoginCustomer() {
  return (
    <div className="login__Customer">
      <Background />
      <Loginuser role="customer" />
      {false && <Overlay />}
    </div>
  );
}

export default LoginCustomer;
