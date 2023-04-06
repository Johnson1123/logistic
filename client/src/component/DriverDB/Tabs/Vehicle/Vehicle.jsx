import React, { useState } from "react";
import { BiUpload } from "react-icons/bi";
import { TbFileInvoice } from "react-icons/tb";
import { vehicles } from "../../../../content/Vehicle";
import "./Vehicle.scss";

function Vehicle() {
  const [toggle, setToggle] = useState(0);
  const handleToggle = (n) => {
    console.log(vehicles[n].model);
    return setToggle(n);
  };
  const Details = () => {
    return (
      <div className="details__con">
        <div className="flex details__properties">
          <div className="p-text detail flex">
            <p className="bold-text">Model</p>
            <p className="p-text">{vehicles[toggle].model}</p>
          </div>
          <div className="p-text detail flex">
            <p className="bold-text">Year</p>
            <p className="p-text">{vehicles[toggle].year}</p>
          </div>
          <div className="p-text detail flex">
            <p className="bold-text">License Plate</p>
            <p className="p-text">{vehicles[toggle].plate}</p>
          </div>
          <div className="p-text detail flex">
            <p className="bold-text">Color</p>
            <p className="p-text">{vehicles[toggle].color}</p>
          </div>
          <div className="p-text detail flex">
            <p className="bold-text">Seats</p>
            <p className="p-text">{vehicles[toggle].seats}</p>
          </div>
        </div>
        <div className="vehicle__documents">
          <p className="title">Vehicle Documents</p>
          {vehicles[toggle].documents.map((doc, index) => {
            return (
              <div className="doc__box" key={index}>
                {true && (
                  <div className="expired__error">Document is expired</div>
                )}
                <h4 className="title">{doc.type}</h4>
                {true && <p className="require p-text fw-500">Required*</p>}
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
  };
  return (
    <div className="Vehicle">
      <div className="control__con">
        <p className="title">Vehicles</p>
        <p className="small-title fw-300 text">
          Here you see overview of your vehicles.
        </p>
        <div className="control__box-con">
          <div className="flex box__header">
            <div className="small-title fw-700">Model</div>
            <div className="small-title fw-700">License Plate</div>
          </div>
          {vehicles.map((vehicle, index) => {
            return (
              <div
                className="control__box flex"
                onClick={() => handleToggle(index)}
                key={index}
              >
                <div className="p-text control">
                  {vehicle.model}({vehicle.year})
                </div>
                <div className="p-text control">{vehicle.plate}</div>
              </div>
            );
          })}
        </div>
      </div>
      {toggle >= 0 && <Details />}
    </div>
  );
}

export default Vehicle;
