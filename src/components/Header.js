import React from "react";
import Typed from "react-typed";
import classes from "../styles/mainStyle.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.mainInfo}>
        <h1>skills</h1>
        <Typed
          className={classes.typedText}
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
        <a href="#" className={classes.btnMainOffer}>
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
