import React from "react";
import { document } from "../../../../content/document";
import { TbFileInvoice } from "react-icons/tb";
import { BiUpload } from "react-icons/bi";
import "./Mydocument.scss";

function Mydocument() {
  return (
    <div className="Mydocument">
      <div className="title">My Documents</div>
      <p className="small-title p-text fw-300">
        Here are documents associated with your driver profile.
      </p>
      <div className="documents con">
        {document.map((doc, index) => {
          return (
            <div className="doc__box" key={index}>
              <h4 className="title">{doc.type}</h4>
              <div className="doc__content flex">
                <div className="left__con">
                  <p className="p-text fw-500">Verified Document</p>
                  <div className="doc__icon flex">
                    <TbFileInvoice />
                    <p className="p-text">{doc.name}</p>
                  </div>
                  <p className="p-text">Uploaded: {doc.Uploaded}</p>
                  <p className="p-text">Expired: {doc.Expires}</p>
                </div>
                <div className="right__con flex">
                  <label
                    htmlFor="file-upload"
                    className="custom-upload flex center p-text fw-500"
                  >
                    <BiUpload /> Upload file
                  </label>
                  <input id="file-upload" type="file" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mydocument;
