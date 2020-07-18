import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlogger,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="test">
        <a href="https://www.linkedin.com/in/anarajular" className="l social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.github.com/Yashoo18" className="git social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/Yashoo5571" className="twit social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://anarajular.com/about-me" className="blog social">
          <FontAwesomeIcon icon={faBlogger} size="2x" />
        </a>

        <a
          href="https://www.slideshare.net/secret/ljBUPkNXKCOcn5"
          className="blog social"
        >
          <FontAwesomeIcon icon={faBlogger} size="2x" />
        </a>
      </div>
      <p className="test1">
        &copy;{new Date().getFullYear} Yash Inc. | All rights reserved | Privacy
        Statement
      </p>
    </div>
  );
}
