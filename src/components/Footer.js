import React from "react";
import "./Footer.css";
import logo from "../assets/pfm-logo.svg";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  const socialMedia = [
    {
      icon: faTwitter,
      url: "",
    },
    {
      icon: faGithub,
      url: "",
    },
    {
      icon: faInstagram,
      url: "",
    },
  ];

  return (
    <footer>
      <div className="footer__logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="footer__copyright">
        <p>Copyright © 2020 David Szczesniak</p>
      </div>
      <div className="footer__socials">
        {socialMedia.map((site, index) => {
          return (
            <a key={index} href={site.url}>
              <FontAwesomeIcon icon={site.icon} size="lg" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
