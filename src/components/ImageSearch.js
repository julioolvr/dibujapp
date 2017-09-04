import React from "react";

import ThumbnailCollection from "./ThumbnailCollection";
import imageSearchApi from "../api/imageSearch";

function ImageSearch({ query, results, onQueryChange, onSearch }) {
  return (
    <form onSubmit={e => (e.preventDefault(), onSearch(query))}>
      <input onChange={e => onQueryChange(e.target.value)} value={query} />
      <button>Search</button>
      <ThumbnailCollection results={results} />
    </form>
  );
}

export default ImageSearch;
