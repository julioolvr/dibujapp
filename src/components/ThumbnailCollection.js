import React from "react";

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

export default ThumbnailCollection;