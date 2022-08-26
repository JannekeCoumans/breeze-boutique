import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import paymentImage from '../../assets/images/payments.png';
import logo from '../../assets/images/logo-wide_brown.svg';

const footerMenuItems = [
  [
    "Shop",
    "Necklaces",
    "Bracelets",
    "Earrings",
    "Piercings",
    "Glasses",
    "Sunglasses",
    "Hair Accessories",
  ],
  [
    "Collections",
    "Fall",
    "Summer",
    "Spring",
    "Winter 2020",
    "Indian Summer",
    "Holiday Spirit",
  ],
  [
    "Account",
    "My Orders",
    "My Favorites",
    "My Account",
    "Customer Service",
    "Terms and Conditions",
    "Privacy Policy",
  ],
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__menu">
          {footerMenuItems.map((item, i) => {
            return (
              <ul key="i" className={`footer__menu--column column-${i + 1}`}>
                {item.map((links, index) => (
                  <li key={index} className={index === 0 ? "header" : ""}>
                    {links}
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
        <div className="footer__socials">
          <div className="footer__socials--icons">
            <h4>Follow us</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="footer__socials--newsletter">
            <h4>Sign up for our newsletter</h4>
            <div className="input-box">
              <input type="text" placeholder="Email Address" />
              <button>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright container">
        <hr />
        <div className="footer__copyright--payments">
          <img src={paymentImage} alt="" />
        </div>
        <div className="footer__copyright--logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer__copyright--copy">
          Copyright © 2019 Breeze Boutique. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
