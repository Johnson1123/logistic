import React, { useEffect, useState } from "react";

// icons
import { BsSearch } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { w3cwebsocket as W3CWebSocket } from "websocket";

// file import
import "./Messages.scss";
import { images } from "../../../asset";
import Message from "./Message/Message";

function Messages() {
  const [selectOption, setSelectOption] = useState(false);
  const [select, setSelect] = useState("all");
  const message = "Where are you now";
  const name = "Johnson Doe";

  return (
    <div className="Messages__container">
      <div className="Messages__wrapper">
        <div className="chat__left box-shadow">
          <h3 className="p-text title">Message</h3>
          <div className="search__container">
            <div className="search__box box-shadow relative h-[40px]">
              <input type="text" placeholder="Search" className="input" />
              {!selectOption ? (
                <span
                  className="px-3 py-1 cursor-pointer text-sm text-gray-500 bg-gray-100 rounded-xl"
                  onClick={() => setSelectOption(!selectOption)}
                >
                  {select}
                </span>
              ) : (
                <div className="absolute right-0 top-7 bg-gray-100 py-1 px-6 rounded-lg z-10 border-2 border-gray-200">
                  <span
                    className="py-1 block text-red-700 cursor-pointer text-gray-500"
                    onClick={(e) => {
                      setSelect("all");
                      setSelectOption(!selectOption);
                    }}
                  >
                    all
                  </span>
                  <span
                    className="py-1 block font-medium cursor-pointer text-gray-500 text-sm"
                    value="other"
                    onClick={(e) => {
                      setSelect("other");
                      setSelectOption(!selectOption);
                    }}
                  >
                    other
                  </span>
                </div>
              )}
            </div>
            <div className="search__result">
              <div className="chat__info">
                <div className="info__image-box">
                  <img src={images.Elia} alt="" />
                  <span></span>
                </div>
                <div className="info__details">
                  <p className="p-text name">
                    {name.length > 8 ? name.slice(0, 8) + "..." : name}
                  </p>
                  <p className="p-text message">
                    {message.length > 15
                      ? message.slice(0, 15) + "..."
                      : message}
                  </p>
                </div>
              </div>
              <p className="p-text time">
                09:00<span>pm</span>
              </p>
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
                  <p className="p-text name">
                    {" "}
                    {name.length > 8 ? name.slice(0, 8) + "..." : name}
                  </p>
                  <p className="p-text message">
                    {" "}
                    {message.length > 15
                      ? message.slice(0, 15) + "..."
                      : message}
                  </p>
                </div>
              </div>
              <p className="p-text time">
                09:00<span>pm</span>
              </p>
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
              <p className="p-text time">
                09:00<span>pm</span>
              </p>
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
                <p className="p-text name">
                  {" "}
                  {name.length > 15 ? name.slice(0, 15) + "..." : name}
                </p>
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
            <button className="btn-send p-text flex">
              send <img src={images.angleRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
