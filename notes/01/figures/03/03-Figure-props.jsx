import React from "react";

// props are passed in as an object as the
// first argument to our component
const Figure = props => (
  <figure className="panel panel-default">
    <div className="panel-body">
      { /* use the props we passed in: props.caption and props.src */}
      { /* attributes using JS values don't have quotation marks */ }
      <img
        className="img-thumbnail"
        alt={ props.caption }
        src={ props.src }
      />
    </div>
    <figcaption className="panel-footer">
      { props.caption }
    </figcaption>
  </figure>
);

export default Figure;
