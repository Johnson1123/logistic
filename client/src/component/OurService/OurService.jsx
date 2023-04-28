import React from "react";
import { ourService } from "../../content/ourService";
import ReadMore from "../Btn/ReadMore/ReadMore";
import "./OurService.scss";

function OurService() {
  return (
    <div className="ourservice__container flex">
      <h3 className="p-text title">
        <span>Our</span>Service
      </h3>
      <div className="ourservice__inner-container flex">
        {ourService.map((service, index) => {
          return (
            <div className="ourservice__box flex" key={index}>
              <div className="service__img-ellis center flex">
                <img src={service.image} alt="" />
              </div>
              <div className="service__content">
                <h4 className="bold-text">{service.title}</h4>

                <p className="text para">
                  {service.content}
                  <ReadMore href="/service" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurService;
