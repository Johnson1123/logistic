import React from "react";
import { images } from "../../../../asset";
import "./Safety.scss";

function Safety() {
  return (
    <div className="safety-container flex">
      <div className="top-section">
        <div className="img-con">
          <img src={images.bgSvg} alt="" />
        </div>
        <div className="overlay"></div>
      </div>
      <div className="content-section box-shadow">
        <h2 className="title section-title">
          How we protect your personal data
        </h2>
        <div className="content ">
          <p className="content-text p-text">
            We take your personal data privacy very seriously and have
            implemented strict security measures to ensure that your information
            is protected at all times.
          </p>
        </div>
        <div className="content-1 content">
          <p className="content-text p-text">
            We only collect the necessary personal data required to provide our
            services and will never share or sell your information to third
            parties without your explicit consent.
          </p>
        </div>
        <div className="content-1 content">
          <p className="content-text p-text">
            We use advanced encryption methods to safeguard your data during
            transmission and storage, including SSL (Secure Socket Layer)
            encryption and data anonymization techniques.
          </p>
        </div>
        <div className="content-1 content">
          <p className="content-text p-text">
            Our employees undergo regular training on data privacy and security
            protocols, and access to your personal data is restricted to only
            authorized personnel on a need-to-know basis.
          </p>
        </div>
        <div className="content-1 content">
          <p className="content-text p-text">
            We regularly review and update our privacy policy to ensure that it
            complies with all relevant data protection laws and regulations.
          </p>
        </div>
        <div className="content-1 content">
          <p className="content-text p-text">
            If you have any questions or concerns about how we protect your
            personal data, please do not hesitate to contact us.
          </p>
        </div>
        <div className="content-2 content">
          <p className="content-text p-text">
            We may use cookies and other tracking technologies to improve your
            user experience, personalize content and ads, and analyze site
            traffic. You can control the use of these technologies by adjusting
            your browser settings or using opt-out mechanisms provided by
            third-party vendors.
          </p>
        </div>
        <div className="content-2 content">
          <p className="content-text p-text">
            We may also collect non-personal information such as IP addresses
            and device information to help us diagnose technical issues and
            improve our services.
          </p>
        </div>
        <div className="content-2 content">
          <p className="content-text p-text">
            By using our services, you acknowledge and consent to the collection
            and processing of your personal data as outlined in our privacy
            policy.
          </p>
        </div>
        <div className="content-2 content">
          <p className="content-text p-text">
            We reserve the right to modify our privacy policy at any time, and
            any updates will be posted on our website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Safety;
