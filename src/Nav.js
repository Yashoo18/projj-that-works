import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <nav>
      <div className="header">
        <div className="ih">
          <div className="logo">
            <h1>Yash</h1>
          </div>
          <ul className="naxv">
            <Link to="/experience">
              <a>
                <li>Experience</li>
              </a>
            </Link>
            <Link to="/projects">
              <a>
                <li>Projects</li>
              </a>
            </Link>
            <Link to="/research">
              <a>
                <li>Research</li>
              </a>
            </Link>
            <Link to="/about">
              <a>
                <li>About</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
