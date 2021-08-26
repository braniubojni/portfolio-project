import React from "react";
import Artsakh from "../icons/artsakh.png";
import navbar from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Artsakh} className={navbar.logo} alt="Artsakh is Armenia" />
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className={navbar.navLink} href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={navbar.navLink} href="#">
                about me
              </a>
            </li>
            <li className="nav-item active">
              <a className={navbar.navLink} href="#">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className={navbar.navLink} href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className={navbar.navLink} href="#">
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
