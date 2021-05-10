import React from "react";
import logo from "../assets/images/logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="github-logo" />
      </div>
      <Search />
    </div>
  );
};

export default Header;
