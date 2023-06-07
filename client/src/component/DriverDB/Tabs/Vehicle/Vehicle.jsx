import React, { useState } from "react";
import { BiUpload } from "react-icons/bi";
import { TbFileInvoice } from "react-icons/tb";
import { vehicles } from "../../../../content/Vehicle";
import "./Vehicle.scss";
import { styles } from "../../../../style/style";
import VehiclesForm from "../../../driver/VehiclesForm.jsx";

function Vehicle() {
  const [toggle, setToggle] = useState(0);
  const [open, setOpen] = useState(false);
  const handleToggle = (n) => {
    console.log(vehicles[n].model);
    return setToggle(n);
  };
  const Details = () => {
    return (
      <div className="details__con">
        {/* <div className="flex details__properties">
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
        </div> */}
        {/* <div className="vehicle__documents">
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
                      <p className="p-text doc-name">{doc.name}</p>
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
        </div> */}
      </div>
    );
  };
  return (
    <div className="Vehicle">
      <div className="control__con">
        <p className="title">Vehicles</p>
        <div className="w-[100%] bg-[#f3f3f3] py-3 px-4 800px:w-[80%] rounded-md shadow-sm flex justify-between mt-4">
          <p className="small-title fw-300 text">vehicles Overviews</p>
          <button
            className={`${styles.button} py-1`}
            onClick={() => setOpen(!open)}
          >
            Add New
          </button>
        </div>
        <div className="mt-7">
          {vehicles.map((vehicle, index) => {
            return (
              <div
                key={index}
                className="bg-slate-100 flex py-3 px-3 round-sm w-[80%] mb-3 justify-between"
              >
                <h4 className="text-sm font-[400]">{vehicle.model}</h4>
                <h5 className="text-sm font-[400]">{vehicle.plate}</h5>
                <h5 className="text-sm font-[400]">{vehicle.color}</h5>
                <h5 className="text-sm font-[400]">{vehicle.year}</h5>
                <h5 className="text-sm font-[400]">{vehicle.seats}</h5>
              </div>
            );
          })}
        </div>

        {/* <div className="control__box-con">
          <div className="flex box__header">
            <div className="small-title fw-500">Model</div>
            <div className="small-title fw-500">License Plate</div>
          </div>
          {/* {vehicles.map((vehicle, index) => {
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
        </div> */}
      </div>
      {open && <VehiclesForm setOpen={setOpen} open={open} />}
      {toggle >= 0 && <Details />}
    </div>
  );
}

export default Vehicle;
