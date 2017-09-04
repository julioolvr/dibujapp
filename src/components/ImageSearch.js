import React from "react";

import ThumbnailCollection from "./ThumbnailCollection";
import imageSearchApi from "../api/imageSearch";

class ImageSearch extends React.Component {
  state = {
    currentQuery: "",
    results: []
  };

  onQueryChange(newQuery) {
    this.setState({
      currentQuery: newQuery
    });
  }

  // TODO: Search on enter
  search(query) {
    imageSearchApi.search(query).then(results => {
      this.setState({ results });
    });
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.onQueryChange(e.target.value)}
          value={this.state.currentQuery}
        />

        <button onClick={() => this.search(this.state.currentQuery)}>
          Search
        </button>

        <ThumbnailCollection images={this.state.results} />
      </div>
    );
  }
}

export default ImageSearch;
