import React from "react";

import ImageSearch from "./ImageSearch";
import imageSearchApi from "../api/imageSearch";

import "./SearchPanelsContainer.css";

class SearchPanelsContainer extends React.Component {
  state = {
    panels: []
  };

  addPanel() {
    this.setState(prevState => ({
      panels: [...prevState.panels, { query: "", results: [] }]
    }));
  }

  closePanel(index) {
    this.setState(prevState => ({
      panels: prevState.panels.filter((panel, i) => i !== index)
    }));
  }

  onPanelSearch(index, query) {
    imageSearchApi.search(query).then(results => {
      this.setState(prevState => ({
        panels: prevState.panels.map(
          (panel, i) => (i === index ? { ...panel, results } : panel)
        )
      }));
    });
  }

  onQueryChange(index, newQuery) {
    this.setState(prevState => ({
      panels: prevState.panels.map(
        (panel, i) => (i === index ? { ...panel, query: newQuery } : panel)
      )
    }));
  }

  render() {
    return (
      <div>
        <div className="SearchPanelsContainer__panels">
          {this.state.panels.map((panel, i) => (
            <div className="SearchPanelsContainer__panel">
              <button onClick={() => this.closePanel(i)}>X</button>
              <ImageSearch
                query={panel.query}
                results={panel.results}
                onSearch={query => this.onPanelSearch(i, query)}
                onQueryChange={newQuery => this.onQueryChange(i, newQuery)}
              />
            </div>
          ))}
        </div>
        <button onClick={() => this.addPanel()}>+</button>
      </div>
    );
  }
}

export default SearchPanelsContainer;
