import React from "react";
import logo from "../gifs/favicon.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ trigger, bringIntoView }) => {
  return (
    <nav className={trigger ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <div className={trigger ? "navbar-logo-div active" : "navbar-logo-div"}>
          <img
            className={trigger ? "navbar-logo active" : "navbar-logo"}
            src={logo}
            alt="logo"
          />
          <h2 className={trigger ? "active" : ""}>POS Soft</h2>
        </div>

        <GiHamburgerMenu className="hamburger-menu" />
        <ul className="navbar-nav">
          <li
            className="navbar-nav-item"
            name="features"
            onClick={(e) => bringIntoView(e)}
          >
            Features
          </li>
          <li
            className="navbar-nav-item"
            name="pricing"
            onClick={(e) => bringIntoView(e)}
          >
            Pricing
          </li>
          <li
            className="navbar-nav-item"
            name="contact"
            onClick={(e) => bringIntoView(e)}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
