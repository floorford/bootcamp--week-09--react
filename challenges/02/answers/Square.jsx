import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            black: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            black: !this.state.black,
        });
    }

    render() {
        let colour = this.state.black ? "#000" : this.props.colour;

        return (
            <div
                onClick={ this.handleClick }
                style={{
                    height: "200px",
                    width: "200px",
                    background: colour,
                }}
            />
        );
    }
}

Square.defaultProps = {
    colour: "hotpink",
};

export default Square;
