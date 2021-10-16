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
            Home
          </Link>
        </li>
        <li className="Header-Link">
          <Link to="/phonebook" style={{ textDecoration: "none" }}>
            Phonebook
          </Link>
        </li>
        <li className="Header-Link">
          <Link to="/dogs" style={{ textDecoration: "none" }}>
            Dogs
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
