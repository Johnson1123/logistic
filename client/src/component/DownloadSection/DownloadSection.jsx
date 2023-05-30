import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../asset";
import "./DownloadSection.scss";
import { andriodStore, iosStore } from "../../server";

function DownloadSection() {
  const iosUrl = iosStore;
  const androidUrl = andriodStore;
  return (
    <div className="DownloadSection__container flex">
      <div className="Download__content">
        <p className="p-text title">Download App</p>
        <p className="para-text text fw-500">
          Install the app and start ordering now!!
        </p>
        <div className="store_con flex">
          <Link to={andriodStore}>
            <img src={images.playStore} alt="play store" />
          </Link>
          <Link to={iosStore}>
            <img src={images.appleStore} alt="play store" />
          </Link>
        </div>
      </div>
      <img src={images.iphones} alt="combine phones" />
    </div>
  );
}

export default DownloadSection;
