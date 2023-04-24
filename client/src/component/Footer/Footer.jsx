import "./Footer.scss";

import { Link } from "react-router-dom";
import { images } from "../../asset";
import { GrLanguage } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer__container flex">
      <div className="foo_box box__1">
        <Link to="/">
          <img src={images.logo} alt="" />
        </Link>
        <div className="lang flex">
          <GrLanguage />
          <span className="p-text">English</span>
        </div>
      </div>
      <div className="foo_box box__2">
        <p className="footer-title small-title">Company</p>
        <ul>
          <li className="footer__link">
            <Link to="/about">About us</Link>
          </li>
          <li className="footer__link">
            <Link to="/safety">Safty Policy</Link>
          </li>
          <li className="footer__link">
            <Link to="/privacy">Privacy & Policy</Link>
          </li>
          <li className="footer__link">
            <Link to="/">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="foo_box box__3">
        <p className="footer-title small-title">Help</p>
        <ul>
          <li className="footer__link">
            <Link to="/xlcab">About Technovix Ride</Link>
          </li>
          <li className="footer__link">
            <Link to="/">Account and data</Link>
          </li>
          <li className="footer__link">
            <Link to="/">Payments and Pricing</Link>
          </li>
          <li className="footer__link">
            <Link to="/">Using Technovix Ride</Link>
          </li>
        </ul>
      </div>
      <div className="foo_box boox__4">
        <p className="footer-title small-title">Quick Link</p>
        <ul>
          <li className="footer__link store">
            <a
              href="https://play.google.com/store/games?hl=en&gl=US&pli=1"
              target="_blank"
            >
              Google playstore
            </a>
          </li>
          <li className="footer__link store">
            <a href="https://www.apple.com/store" target="_blank">
              Apple store
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
