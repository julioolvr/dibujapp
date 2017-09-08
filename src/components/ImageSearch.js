import React from "react";

import ThumbnailCollection from "./ThumbnailCollection";

function ImageSearch({ query, results, onQueryChange, onSearch }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        return onSearch(query);
      }}
    >
      <input onChange={e => onQueryChange(e.target.value)} value={query} />
      <button>Search</button>
      <ThumbnailCollection results={results} />
    </form>
  );
}

export default ImageSearch;