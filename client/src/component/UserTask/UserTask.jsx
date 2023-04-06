import React from "react";
import { userTask } from "../../content/userTask";

import "./UserTask.scss";
function UserTask() {
  return (
    <div className="userTask__container flex box-shadow">
      {userTask.map((task, index) => {
        return (
          <div className="task__box flex" key={index}>
            <div className={`task__img-box box-${index + 1}`}>
              <img src={task.image} alt="" />
            </div>
            <h3 className="p-text">{task.title}</h3>
            <div className="task__p-text">
              <p className="text">{task.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserTask;
