import React from "react";

import logo from "../../logo.svg";

import "./Logo.css";

const Logo = () => {
  return (
    <a className="logo" href="/">
      <img src={logo} alt="logo" height="50px" />
    </a>
  );
};

export default Logo;
