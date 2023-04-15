import { Select } from "antd";
import React from "react";
import InputDropGroup from "../../../InputDropGroup/InputDropGroup";
import Myridebox from "../../Myridebox/Myridebox";
import "./Myride.scss";

function Myride() {
  const PagiNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="Myride">
      <div className="myride__wrapper">
        <div className="input__container">
          <InputDropGroup />
          <a href="" className="download" download>
            Download PDF
          </a>
        </div>
        <div className="input__details">
          <div className="box flex">
            <p className="small-title">Total sum:</p>
            <p className="p-text">$1876</p>
          </div>
          <div className="box flex">
            <p className="small-title">Number of Ride:</p>
            <p className="p-text">67</p>
          </div>
          <div className="box flex">
            <p className="small-title">Total distance:</p>
            <p className="p-text">957km</p>
          </div>
          <div className="box flex">
            <p className="small-title">Total cancellation fee:</p>
            <p className="p-text">$24</p>
          </div>
        </div>
        <div className="page__container flex">
          <p className="small-title">Pages</p>
          <div className="page__con flex">
            <Select
              defaultValue={PagiNum[0]}
              style={{ width: 50, marginLeft: 10, marginRight: 10 }}
              options={PagiNum.map((province) => ({
                label: province,
                value: province,
              }))}
            />
            <p className="page-num">/ 10</p>
          </div>
        </div>
        <Myridebox />
      </div>
    </div>
  );
}

export default Myride;
