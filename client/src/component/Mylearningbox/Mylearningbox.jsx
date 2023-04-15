import React from "react";
import { videos } from "../../content/Videocontent";
import "./Mylearningbox.scss";

function Mylearningbox() {
  return (
    <div className="learning__box-con ">
      {videos.map((video, index) => {
        return (
          <div className="learning__box flex box-shadow" key={index}>
            <div className="img__con">
              <img src={video.image} alt="" />
            </div>
            <div className="learning__content">
              <h4 className="form-text">{video.title}</h4>
              <p className="p-text">
                {video.activities} <span>activities</span>
              </p>
              <div className="p-text status">{video.status}</div>
              <div className="progress"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Mylearningbox;
