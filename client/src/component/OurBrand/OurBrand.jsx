import React from "react";
import { Ourbrand } from "../../content/OurBrand";
import "./OurBrand.scss";

function OurBrand() {
  return (
    <div className="OurBrand flex center">
      <div className="wrapper">
        <h3 className="p-text title">
          <span>Our</span>Brand
        </h3>
        <div className="brand__box-con flex">
          {Ourbrand.map((brand, index) => {
            return (
              <div className="brand__box" key={index}>
                <div className="content__box">
                  <img src={brand.image} alt={`${brand.title} with us`} />
                  <div className="text__content">
                    <h2 className="bold-text title">{brand.title}</h2>
                    <p className="p-text text">{brand.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurBrand;
