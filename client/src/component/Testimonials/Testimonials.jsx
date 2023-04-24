import { Rate } from "antd";
import React from "react";
import { testimonials } from "../../content/testimonials";
import "./Testimonial.scss";

function Testimonials() {
  return (
    <div className="testionial__container box-shadow">
      <h3 className="p-text title">Testimonials</h3>
      <div className="test__inner-con flex">
        {testimonials.slice(0, 2).map((test, index) => {
          return (
            <div className="test__box" key={index}>
              <div className="test__img-con">
                <div className="test__ell"></div>
                <img src={test.image} alt={test.name} className="test-img" />
              </div>
              <h2 className="bold-text">{test.name}</h2>
              <p className="para-text text">{test.content}</p>
              <div className="rating__container">
                <Rate
                  allowHalf
                  count={5}
                  value={test.rating}
                  style={{ color: "green" }}
                  disabled
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
