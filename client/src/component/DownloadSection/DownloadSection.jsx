import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../asset";
import "./DownloadSection.scss";

function DownloadSection() {
  return (
    <div className="DownloadSection__container flex">
      <div className="Download__content">
        <p className="p-text title">Download App</p>
        <p className="para-text text fw-500">
          Install the app and start ordering now!!
        </p>
        <div className="store_con flex">
          <Link to="/">
            <img src={images.playStore} alt="play store" />
          </Link>
          <Link to="/">
            <img src={images.appleStore} alt="play store" />
          </Link>
        </div>
      </div>
      <img src={images.iphones} alt="combine phones" />
    </div>
  );
}

export default DownloadSection;
