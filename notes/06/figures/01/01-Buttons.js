import React, { Component } from "react";

import { Button } from "react-bootstrap";

class Buttons extends Component {
  constructor(props) {
    super(props);

    // state identical to before
    this.state = {
      selected: 1,
    };
  }

  render() {
    let { selected } = this.state;

    return (
      <>
        <Button
          onClick={ () => this.setState({ selected: 1 }) }
          variant={ selected === 1 ? "danger" : "primary" }
        >
          First
        </Button>

        <Button
          onClick={ () => this.setState({ selected: 2 }) }
          variant={ selected === 2 ? "danger" : "primary" }
        >
          Second
        </Button>
      </>
    );
  }
}

export default Buttons;
