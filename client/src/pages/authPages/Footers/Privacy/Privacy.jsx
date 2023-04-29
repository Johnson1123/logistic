import React from "react";
import { images } from "../../../../asset";
import "./Privacy.scss";

function Privacy() {
  return (
    <div className="privacy-container flex">
      <div className="top-section">
        <div className="img-con">
          <img src={images.bgSvg} alt="" />
        </div>
        <div className="overlay"></div>
      </div>
      <div className="content-section box-shadow">
        <h2 className="title section-title">XLCAB Privacy and Policy</h2>
        <div className="content ">
          <p className="content-text p-text">
            XLCAB respects the privacy of its users and is committed to
            protecting their personal information. This policy outlines the
            types of information we collect from users and how we use, disclose,
            and protect that information.
          </p>
        </div>
        <div className="content-1 content">
          <h3 className="bold-text"> Information We Collect</h3>
          <p className="content-text p-text">
            We may collect personal information, such as your name, email
            address, phone number, and payment information, when you use our
            services. We also collect non-personal information, such as your
            device type, IP address, and usage data, which may be collected
            through cookies or other tracking technologies.
          </p>
        </div>
        <div className="content-2 content">
          <h3 className="bold-text">How We Use Your Information</h3>
          <p className="content-text p-text">
            We use your personal information to provide you with our services,
            process payments, communicate with you about your account, and send
            you promotional offers. We may also use your non-personal
            information to improve our services and website.
          </p>
        </div>
        <div className="content-2 content">
          <h3 className="bold-text">Disclosure of Your Information</h3>
          <p className="content-text p-text">
            We may disclose your personal information to our service providers,
            such as payment processors and marketing partners, as necessary to
            provide our services. We may also disclose your information in
            response to legal requests or to protect our rights or the rights of
            our users.
          </p>
        </div>
        <div className="content-2 content">
          <h3 className="bold-text">Security of Your Information</h3>
          <p className="content-text p-text">
            We use industry-standard security measures to protect your personal
            information from unauthorized access and disclosure. However, no
            security system is foolproof, and we cannot guarantee the security
            of your information
          </p>
        </div>
        <div className="content-2 content">
          <h3 className="bold-text">Your Rights</h3>
          <p className="content-text p-text">
            You have the right to access, correct, or delete your personal
            information at any time. You may also opt-out of receiving
            promotional emails from us.
          </p>
        </div>
        <div className="content-2 content">
          <h3 className="bold-text">Changes to Our Policy</h3>
          <p className="content-text p-text">
            We may update this policy from time to time to reflect changes in
            our practices or applicable laws. We encourage you to review this
            policy periodically.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
