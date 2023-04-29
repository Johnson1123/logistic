import React from "react";
import { images } from "../../../../asset";
import "./About.scss";

function About() {
  return (
    <div className="about-container flex">
      <div className="top-section">
        <div className="img-con">
          <img src={images.bgSvg} alt="" />
        </div>
        <div className="overlay"></div>
      </div>
      <div className="content-section box-shadow">
        <h2 className="title section-title">About XLCAB</h2>
        <div className="content-1 content">
          <h3 className="title"> Our Story</h3>
          <p className="content-text p-text">
            Our humble beginnings and how we got started in the transportation
            industry Milestones and significant events that shaped our company's
            growth The challenges we faced and how we overcame them How we
            evolved and adapted to the changing market and customer needs
          </p>
        </div>
        <div className="content-2 content">
          <h3 className="title">Our Team:</h3>
          <p className="content-text p-text">
            Introduce the key members of our team and their roles Share their
            backgrounds and experience in the transportation industry Highlight
            their passion and commitment to providing the best service to our
            customers Include their photos and brief personal bios to make it
            more personable
          </p>
        </div>
        <div className="content-2 content">
          <h3 className="title">Our Mission:</h3>
          <p className="content-text p-text">
            State our company's mission and values Explain how we aim to make a
            difference in the transportation industry Emphasize our commitment
            to providing safe, reliable, and affordable transportation
            servicesOutline our long-term goals and vision for the future
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
