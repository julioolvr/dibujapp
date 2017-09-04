import React from "react";

import "./ThumbnailCollection.css";

function ThumbnailCollection({ images }) {
  return (
    <div className="ThumbnailCollection">
      {images.map(image => (
        <img
          key={image.url}
          src={image.url}
          className="ThumbnailCollection__thumbnail"
        />
      ))}
    </div>
  );
}

export default ThumbnailCollection;
