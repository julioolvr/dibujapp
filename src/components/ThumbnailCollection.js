import React from "react";
import PropTypes from "prop-types";

import "./ThumbnailCollection.css";

function ThumbnailCollection({ results }) {
  // TODO: Use image sizes to avoid reflow when images get downloaded
  return (
    <div className="ThumbnailCollection">
      {results.map(result => (
        <img
          alt=""
          key={result.link}
          src={result.link}
          className="ThumbnailCollection__thumbnail"
        />
      ))}
    </div>
  );
}

ThumbnailCollection.propTypes = {
  results: PropTypes.array
};

ThumbnailCollection.defaultProps = {
  results: []
};

export default ThumbnailCollection;
