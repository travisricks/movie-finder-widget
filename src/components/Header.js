import React from "react";
import logo from "../logo-outlines.svg";

const Header = (props) => (
  <header>
    <div className="container">
      <img src={logo} alt={`${props.title} logo`} />
    </div>
  </header>
);

Header.defaultProps = {
  title: "The Movie Finder Widget",
};

export default Header;
