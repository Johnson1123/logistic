import React from "react";
import "./Modal.scss";
import { Rate } from "antd";

function Modal(props) {
  return (
    <div className="container">
      <div className="modal__box box-shadow">
        {props.content.title && <p className="title">{props.content.title}</p>}
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
            <button>Yes</button>
            <button onClick={props.handler}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
