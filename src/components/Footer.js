import React from "react";
import logo from "../movie-db-logo.svg";

const Footer = () => (
  <footer>
    <div className="container">
      Data courtesy of <img src={logo} alt="the movie db logo" />
    </div>
  </footer>
);

export default Footer;
