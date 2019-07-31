// import Component
import React, { Component } from "react";

// turn into a class of same name
// and extend Component
class Header extends Component {
  // add a render function
  render() {
    // destructure this.props so we don't need to update the JSX
    let { children, subtitle } = this.props;

    // the return of render is exactly the same as what you
    // had in the original function version
    return (
      <header className="page-header">
        <h1>{ children } <small>{ subtitle }</small></h1>
      </header>
    );
  }
}

export default Header;
