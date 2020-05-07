import React from "react";
import logo from "../assets/logo-outlines.svg";

const Header = (props) => (
  <header>
    <div className="container">
      <a href="/">
        <img src={logo} alt={`${props.title} logo`} />
      </a>
    </div>
  </header>
);

Header.defaultProps = {
  title: "The Movie Finder Widget",
};

export default Header;
