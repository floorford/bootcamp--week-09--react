import React from "react";

const Header = ({ children, subtitle }) => (
  <header className="page-header">
    <h1>{ children } <small>{ subtitle }</small></h1>
  </header>
);

export default Header;
