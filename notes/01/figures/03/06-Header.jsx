import React from "react";

const Header = ({ title, subtitle }) => (
  <header className="page-header">
    <h1>{ title } <small>{ subtitle }</small></h1>
  </header>
);

export default Header;
