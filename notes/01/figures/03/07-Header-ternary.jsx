import React from "react";

const Header = ({ title, subtitle }) => (
  <header className="page-header">
    <h1>
      { title }
      { /* return null if you don't want anything rendered */ }
      { !subtitle ? null :
        <small style={ { marginLeft: 10 } }>{ subtitle }</small>
      }
    </h1>
  </header>
);

export default Header;
