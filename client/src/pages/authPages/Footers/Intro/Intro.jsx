import React from "react";
import { images } from "../../../../asset";
import "./Intro.scss";

function Intro() {
  return (
    <div className="intro-container flex">
      <div className="top-section">
        <div className="img-con">
          <img src={images.bgSvg} alt="" />
        </div>
        <div className="overlay"></div>
      </div>
      <div className="content-section box-shadow">
        <h2 className="title section-title">Introduction to XLCAB</h2>
        <div className="content ">
          <p className="content-text p-text">
            Welcome to XLCAB, the innovative and reliable mobile app for long
            distance travel. We're dedicated to providing a high-quality shuttle
            service for passengers who need to travel up to 80kms with a minimum
            of 4 persons per cab, and an average of 6 rides per day. With XLCAB,
            you can avoid the stress and hassle of urban traffic, while enjoying
            the comfort of our qualified and responsible drivers.
          </p>
        </div>
        <div className="content-1 content">
          <p className="content-text p-text">
            Our mission is to provide a top-notch transportation service that
            prioritizes customer care and safety. We carefully select and vet
            our drivers to ensure they meet our high standards of
            professionalism, and we offer a cancellations-free policy that
            guarantees you won't be left stranded. With XLCAB, you can have
            peace of mind knowing you're in good hands.
          </p>
        </div>
        <div className="content-1 content">
          <p className="content-text p-text">
            In addition to our standard shuttle service, we offer a premium
            service for travel agencies that provides dedicated support for
            groups arriving at international airports. Our passenger chatbot
            allows you to easily book and schedule rides, and our website
            provides a wealth of information about our services, drivers, and
            pricing.
          </p>
        </div>
        <div className="content-1 content">
          <p className="content-text p-text">
            We're excited to welcome you to the XLCAB community and to provide
            you with a transportation experience that exceeds your expectations.
            Book your ride today and experience the XLCAB difference!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
