import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>About my skills</h1>
        <Typed
          className="typed-text"
          strings={[
            "React.js",
            "HTML/CSS",
            "SCSS",
            "API on python",
            "WEB develpoment",
            "Linux distros",
            "TCP/IP stuck",
          ]}
          typeSpeed={100}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer"></a>
      </div>
    </div>
  );
};

export default Header;
