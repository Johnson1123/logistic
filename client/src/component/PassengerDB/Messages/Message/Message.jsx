import React from 'react'
import { images } from '../../../../asset'
import './Message.scss'

function Message() {
  return (
    <div className='Message__container Message__reverse'> 
        <img src={images.James} alt="" />
        <div className="message__details">
            <p className="message p-text">I’’ll be there in a few mins</p>
            <p className="p-text time">08:00Pm</p>
        </div>
    </div>
  )
}

export default Message