import React from "react";
import PropTypes from "prop-types";

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

ImageSearch.propTypes = {
  query: PropTypes.string,
  results: PropTypes.array,
  onQueryChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

ImageSearch.defaultProps = {
  query: "",
  results: []
};

export default ImageSearch;
