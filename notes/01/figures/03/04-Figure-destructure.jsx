import React from "react";

// destructure the props object when it's passed in
const Figure = ({ caption, src }) => (
  <figure className="panel panel-default">
    <div className="panel-body">
      <img className="img-thumbnail" alt={ caption } src={ src } />
    </div>
    <figcaption className="panel-footer">{ caption }</figcaption>
  </figure>
);

export default Figure;
