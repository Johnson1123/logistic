import React from "react";
import DropLink from "../../DropLink";

function DownApp() {
  return (
    <ul className="menu__drop box-shadow">
      <DropLink label="Android" />
      <DropLink label="IOS" />
    </ul>
  );
}

export default DownApp;
