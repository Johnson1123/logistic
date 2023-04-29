import React, { useState } from "react";
import { images } from "../../../../asset";
import "./Service.scss";
import { service } from "../../../../content/ServicePage";
function Service() {
  const [count, setCount] = useState("");
  console.log(count);
  return (
    <div className="service-container flex">
      <div className="top-section">
        <div className="img-con">
          <img src={images.bgSvg} alt="" />
        </div>
        <div className="overlay"></div>
      </div>
      <div className="content-section box-shadow">
        <h2 className="title section-title">XLCAB Service</h2>
        <div className="list__container">
          {service.map((list, index) => {
            return (
              <div className="serviceList" key={index}>
                <p className="list-title" onClick={() => setCount(index)}>
                  {list.title.length < 65
                    ? list.title
                    : `${list.title.slice(0, 65)}...`}
                </p>
                {count === index && list.content && (
                  <div className="list__content">
                    <p className="list__content-text p-text content-text">
                      {list.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
