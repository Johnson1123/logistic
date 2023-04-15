import React from "react";
import Bgnav from "../../component/BgNav/Bgnav";
import { FaAngleLeft } from "react-icons/fa";
import { videos } from "../../content/Videocontent";
import Lessonbox from "../../component/Lessonbox/Lessonbox";
import "./LessonVideo.scss";
import { images } from "../../asset";

function LessonVideo() {
  const numActivites = Number(videos[0].activities);
  let List = () => {
    return [...Array(numActivites)].map((e, i) => {
      return (
        <div key={i} className="list-dot flex center">
          {++i}
        </div>
      );
    });
  };
  return (
    <div className="LessonVideo flex">
      <Bgnav />
      <div className="LessonVideo__wrapper flex">
        <div className="LessonVideo__title-con flex">
          <span>
            <FaAngleLeft />
          </span>
          <p className="lesson-title p-text">
            Introduction to the XLCABTRANSFER Partner app
          </p>
        </div>
        <div className="profile__con flex">
          <div className="img__con">
            <img src={images.womanlearn} alt="" />
          </div>
          <div className="profile__content flex">
            <p className="small-title">Info Session for new Driver-Partners</p>
            <div className="activities__con flex">
              <List />
            </div>
            <p className="p-text activity-qyt">
              <span>{numActivites}</span>activities
            </p>
          </div>
        </div>
        <div className="Lessonbox__con">
          <div className="small-title">YOU HAVE 4 ACTIVITIES TO DO</div>

          <Lessonbox />
        </div>
      </div>
    </div>
  );
}

export default LessonVideo;
