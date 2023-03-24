import React from 'react'
import { userTask } from '../../content/userTask'

import './UserTask.scss'
function UserTask() {
  return (
    <div className='userTask__container flex box-shadow'>
        {
            userTask.map((task, index) => {
                return(
                    <div className={`task__box flex box-${index + 1}`} key={index}>
                        <div className="task__img-box">
                            <img src={task.image} alt="" />
                        </div>
                        <h3 className='p-text'>
                            {task.title}
                        </h3>
                        <div className="task__p-text">
                            <p className="p-text">
                                {task.content}
                            </p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UserTask