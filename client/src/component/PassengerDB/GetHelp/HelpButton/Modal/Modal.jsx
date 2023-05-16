import React, { useEffect, useRef, useState } from "react";
import "./Modal.scss";
import { Rate } from "antd";
import image from "../../../../../asset/image";
import { images } from "../../../../../asset";

function Modal(props) {
  const modalDiv = useRef();
  const [toggle, setToggle] = useState(true);
  const [responseToggle, setResponseToggle] = useState("");

  const openYes = () => {
    setToggle(false);
    setResponseToggle("yes");
  };
  const openNo = () => {
    setToggle(false);
    setResponseToggle("no");
  };
  useEffect(() => {
    modalDiv.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  }, []);

  return (
    <div className="container">
      {toggle ? (
        <div className="modal__box box-shadow" ref={modalDiv}>
          {props.content.title && (
            <p className="title">{props.content.title}</p>
          )}
          {props.content.label && (
            <p className="subtitle">{props.content.label}</p>
          )}
          {props.content.content && (
            <p className="modal__content p-text">{props.content.content}</p>
          )}
          {props.content.subContent && (
            <p className="modal__content p-text">{props.content.subContent}</p>
          )}
          {props.content.label2 && (
            <p className="modal__content p-text">{props.content.label2}</p>
          )}
          {props.content.labelText && (
            <p className="modal__content p-text">{props.content.labelText}</p>
          )}
          {props.content.labelText2 && (
            <p className="modal__content p-text">{props.content.labelText2}</p>
          )}

          {props.content.subTitle && (
            <p className="title subtitle">{props.content.subTitle}</p>
          )}
          {props.content.para && (
            <p className="modal__content p-text">{props.content.para}</p>
          )}
          {props.content.list && (
            <ul className="p-text">
              {props.content.list.map((item, indx) => {
                return (
                  <li key={indx} className="modal__content p-text">
                    {item}
                  </li>
                );
              })}
            </ul>
          )}

          {props.content.subPara && (
            <p className="modal__content p-text">{props.content.subPara}</p>
          )}
          {props.content.endPara && (
            <p className="modal__content p-text">{props.content.endPara}</p>
          )}

          <div className="divider"></div>
          <div className="feedback">
            <p className="title ">{props.content.feedback}</p>
            <div className="feedback__btn-con">
              <button onClick={openYes}>Yes</button>
              <button onClick={openNo}>No</button>
            </div>
          </div>
        </div>
      ) : responseToggle === "no" ? (
        <div className="modal__box modal-response box-shadow" ref={modalDiv}>
          <div>
            <h4>
              we're sorry <span className="sorry">😞</span> about that
            </h4>
          </div>
          <div>
            <span> for more detail, please contact our </span>
            <a href="mailto:technovixtechnogies@gmail.com"> Support Service </a>
          </div>
          <button onClick={props.handler} className="go_btn p-text">
            Go Back
          </button>
        </div>
      ) : (
        <div className="modal__box modal-response box-shadow" ref={modalDiv}>
          <div>
            <h4>Thank you for finding this content helpful</h4>
          </div>
          <div>
            <img src={images.glad} alt="" className="glad" />
          </div>
          <button onClick={props.handler} className="go_btn p-text">
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
