import React from "react";
import logo from "../logo.svg";

const Header = (props) => (
  <header>
    <div className="container">
      <img src={logo} alt={`${props.title} logo`} />
      <h1 className="">{props.title}</h1>
    </div>
  </header>
);

Header.defaultProps = {
  title: "The Movie Finder Widget",
};

export default Header;
