import React from "react";

// accept children, no more title prop
const Header = ({ children, subtitle }) => (
  <header className="page-header">
    <h1>
      { /* use children instead of title */}
      { children }
      { !subtitle ? null :
        <small style={ { marginLeft: 10 } }>{ subtitle }</small>
      }
    </h1>
  </header>
);

export default Header;
