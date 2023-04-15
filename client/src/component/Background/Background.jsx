import React from "react";
import { images } from "../../asset";
import Bgnav from "../BgNav/Bgnav";
import "./Background.scss";
function Background() {
  return (
    <div className="bg__con">
      <Bgnav />
      <div className="bg__white"></div>
      <div className="bg__clip"></div>
    </div>
  );
}

export default Background;
