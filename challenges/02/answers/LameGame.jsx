import React, { Component } from "react";

class LameGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      start: null,
      finish: null,
    };

    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleClickFinish = this.handleClickFinish.bind(this);
  }

  handleClickStart() {
    this.setState({
      playing: true,
      start: +new Date(),
      finish: null,
    });
  }

  handleClickFinish() {
    this.setState({
      playing: false,
      finish: +new Date(),
    });
  }

  calculateDifference() {
    let { aim } = this.props;
    let { start, finish } = this.state;

    let actual = (finish - start) / 1000;
    let diff = actual - aim;

    return diff > 0 ? `Over by ${diff.toFixed(2)} seconds` : `Under by ${(diff * -1).toFixed(2)} seconds`;
  }

  render() {
    let { aim } = this.props;
    let { playing, start, finish } = this.state;

    return (
      <React.Fragment>
        <p className="well">{ aim } seconds</p>
        <div style={{ marginBottom: "1em" }}>
          { playing ? (
            <button className="btn btn-primary" onClick={ this.handleClickFinish }>Finish</button>
          ) : (
            <button className="btn btn-primary" onClick={ this.handleClickStart }>Start</button>
          )}
        </div>
        { start && finish ? <p className="alert alert-info">{ this.calculateDifference() }</p> : null }
      </React.Fragment>
    );
  }
}

export default LameGame;
