import React from "react";
import { activities } from "../../content/activities";
import { FiClock } from "react-icons/fi";
import "./Lessonbox.scss";
import SignupBtn from "../Btn/SignupBtn/SignupBtn";

function Lessonbox() {
  return (
    <>
      {activities.map((lesson, index) => {
        return (
          <div className="Lessonbox flex box-shadow">
            <div className="p-text flex time__con">
              <span>{lesson.id}. Lesson</span>
              <span className="time-span">
                <FiClock />
                {lesson.minute}mins
              </span>
            </div>
            <div className="small-title">{lesson.title}</div>
            <SignupBtn label="Start Lesson" />
          </div>
        );
      })}
    </>
  );
}

export default Lessonbox;
