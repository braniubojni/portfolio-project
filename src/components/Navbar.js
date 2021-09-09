import React from "react";
import Artsakh from "../icons/artsakh.png";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Font awesome
import classes from "../styles/mainStyle.module.css";

const Navbar = () => {
  return (
    <nav
      className={`nav ${classes.navbarNav} ${classes.bgDark} navbar  navbar-expand-lg navbar-dark`}
    >
      <div className="container">
        <a className={classes.navbarBrand} href="#">
          <img
            src={Artsakh}
            className={classes.logo}
            alt="Artsakh is Armenia"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`${classes.navbarNav} ms-auto`}>
            <li className="nav-item">
              <a className="navLink" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="navLink" href="#">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="navLink" href="#">
                certifications
              </a>
            </li>
            <li className="nav-item">
              <a className="navLink" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="navLink" href="#">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
