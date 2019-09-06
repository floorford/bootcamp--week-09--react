import React from "react";

const Figure = () => (
    <figure className="panel panel-default">
        <div className="panel-body">
            <img
                className="img-thumbnail"
                alt="A cat, strutting its stuff!"
                src="https://goo.gl/tRdW93"
            />
        </div>
        <figcaption className="panel-footer">
            A cat, strutting its stuff!
        </figcaption>
    </figure>
);

export default Figure;
