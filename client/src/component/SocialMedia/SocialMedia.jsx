import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import "./SocialMedia.scss";

function SocialMedia() {
  return (
    <div className="media_con flex center">
      <Link to="" className="linkedIn">
        <BsLinkedin />
      </Link>
      <Link to="" className="google">
        <AiOutlineGooglePlus />
      </Link>
      <Link to="" className="facebook">
        <BsFacebook />
      </Link>
    </div>
  );
}

export default SocialMedia;
