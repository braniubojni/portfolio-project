import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>skills</h1>
        <Typed
          className="typed-text"
          strings={[
            "React.js junior developer",
            "HTML/CSS/SCSS",
            "API on python",
            "WEB develpoment",
            "Linux distros",
            "TCP/IP stack",
          ]}
          typeSpeed={80}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
