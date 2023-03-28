import React from 'react'

// icons
import { BsSearch } from 'react-icons/bs'
import {BsThreeDotsVertical} from 'react-icons/bs'

// file import
import './Messages.scss'
import { images } from '../../../asset'
import Message from './Message/Message'

// antd
import {Select} from 'antd'
import { Option } from 'antd/es/mentions'

function Messages() {
  return (
    <div className='Messages__container'>
        <div className="Messages__wrapper">
            <div className="chat__left box-shadow">
                <h3 className="p-text title">Message</h3>
                <div className="search__container">
                    <div className="search__box box-shadow">
                        <BsSearch />
                        <input type="text" placeholder='Search' className='input'/>
                        <div className="search__control">
                        <Select
                             labelInValue
                             defaultValue={{
                               value: 'All',
                               label: 'All',
                             }}
                             style={{
                               width: 60,
                             }} 
                             className='select'
                             >
                                <Option value="All">All</Option>
                                <Option value="Other">Other</Option>
                             </Select>
                        </div>
                    </div>
                    <div className="search__result">
                        <div className="chat__info">
                            <div className="info__image-box">
                                <img src={images.Elia} alt="" />
                                <span></span>
                            </div>
                            <div className="info__details">
                                <p className="p-text name">David James</p>
                                <p className="p-text message">Hello where are you</p>
                            </div>
                        </div>
                        <p className="p-text time">09:00<span>pm</span></p>
                    </div>
                </div>
                <div className="chats">
                    <div className="chat">
                        <div className="chat__info">
                            <div className="info__image-box">
                                <img src={images.James} alt="" />
                                <span></span>
                            </div>
                            <div className="info__details">
                                <p className="p-text name">David James</p>
                                <p className="p-text message">Hello where are you</p>
                            </div>
                        </div>
                        <p className="p-text time">09:00<span>pm</span></p>
                    </div>
                    <div className="chat">
                        <div className="chat__info">
                            <div className="info__image-box">
                                <img src={images.James} alt="" />
                                <span></span>
                            </div>
                            <div className="info__details">
                                <p className="p-text name">David James</p>
                                <p className="p-text message">Hello where are you</p>
                            </div>
                        </div>
                        <p className="p-text time">09:00<span>pm</span></p>
                    </div>
                </div>
            </div>

            <div className="chat__right box-shadow">
                <div className="messages__nav box-shadow">
                    <div className="chat__info">
                        <div className="info__image-box">
                            <img src={images.James} alt="" />
                            <span></span>
                        </div>
                        <div className="info__details">
                            <p className="p-text name">David James</p>
                            <p className="p-text message">online</p>
                        </div>
                    </div>
                    <BsThreeDotsVertical />
                </div>
                <div className="message__container">
                    <Message /> 
                </div>
                <div className="send__message box-shadow">
                    <input type="text" />
                    <button className="btn-send p-text flex">send <img src={images.angleRight} alt="" /></button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Messages