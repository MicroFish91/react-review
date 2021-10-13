import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Title">My Company</div>
      <ul className="Header-Nav">
        <li className="Header-Link">
          <Link to="/" style={{ textDecoration: "none" }}>
            Topic 1
          </Link>
        </li>
        <li className="Header-Link">
          <Link to="/" style={{ textDecoration: "none" }}>
            Topic 2
          </Link>
        </li>
        <li className="Header-Link">
          <Link to="/" style={{ textDecoration: "none" }}>
            Topic 3
          </Link>
        </li>
        <li className="Header-Link">
          <Link to="/" style={{ textDecoration: "none" }}>
            Topic 4
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
