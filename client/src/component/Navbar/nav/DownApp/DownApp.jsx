import React from "react";
import DropLink from "../../DropLink";

function DownApp() {
  return (
    <ul className="menu__drop box-shadow">
      <DropLink
        label="Android"
        links="https://play.google.com/store/games?hl=en&gl=US&pli=1"
      />
      <DropLink label="IOS" links="https://www.apple.com/app-store/" />
    </ul>
  );
}

export default DownApp;
