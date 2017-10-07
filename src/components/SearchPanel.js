import React from "react";
import PropTypes from "prop-types";
import g from "glamorous";

import ImageSearch from "./ImageSearch";

function SearchPanel({ query, results, onSearch, onQueryChange, onClose }) {
  return (
    <g.Div
      height="20em"
      border="1px solid #ccc"
      padding="1em"
      overflowY="scroll"
    >
      <g.Button float="right" onClick={onClose}>
        X
      </g.Button>

      <ImageSearch
        query={query}
        results={results}
        onSearch={onSearch}
        onQueryChange={onQueryChange}
      />
    </g.Div>
  );
}

SearchPanel.propTypes = {
  query: PropTypes.string,
  results: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

SearchPanel.defaultProps = {
  query: "",
  results: []
};

export default SearchPanel;
