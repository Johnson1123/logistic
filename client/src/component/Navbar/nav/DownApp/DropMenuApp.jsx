import React from "react";
import DropLink from "../../DropLink";
import { closeToggle } from "../../../../features/toggleSlice/toggleSlice";

function DownApp() {
  return (
    <ul className="menu__drop box-shadow">
      <DropLink
        label="Android"
        links="https://play.google.com/store/games?hl=en&gl=US&pli=1"
        handler={closeToggle}
      />
      <DropLink
        label="IOS"
        links="https://www.apple.com/app-store/"
        handler={closeToggle}
      />
    </ul>
  );
}

export default DownApp;
