import React, { useState } from "react";
import { images } from "../../../../asset";
import "./Testimonial.scss";
import { testimonials } from "../../../../content/testimonials";
function Testimonial() {
  const [count, setCount] = useState("");
  console.log(count);
  return (
    <div className="testimonial-container flex">
      <div className="top-section">
        <div className="img-con">
          <img src={images.bgSvg} alt="" />
        </div>
        <div className="overlay"></div>
      </div>
      <div className="content-section box-shadow">
        <h2 className="title section-title">Customer testimonials </h2>
        <div className="top__container flex">
          {testimonials.map((item, index) => {
            return (
              <div key={index} className="testimonial-box box-shadow">
                <div className="top flex">
                  <div className="header">
                    <img src={item.image} />
                  </div>
                  <div className="identity">
                    <p className="bold-text">{item.name}</p>
                  </div>
                </div>
                <div className="bottom">
                  <p className="p-text">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
