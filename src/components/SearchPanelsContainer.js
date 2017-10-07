import React from "react";
import g from "glamorous";

import ImageSearch from "./ImageSearch";
import imageSearchApi from "../api/imageSearch";

const AddPanelButton = g.button({
  backgroundColor: "#eb6e80",
  border: "1px solid #eee",
  color: "#eee",
  fontSize: "0.6em",
  padding: "1em 2em",
  outline: "none",
  cursor: "pointer"
});

const PanelsCollection = g.div({
  display: "flex",
  flexWrap: "wrap",
  padding: "1em"
});

// TODO: Change the width of the panels with media queries
const PanelContainer = g.div({
  width: "33.33333%",
  padding: ".5em",
  boxSizing: "border-box"
});

const Panel = g.div({
  height: "20em",
  border: "1px solid #ccc",
  padding: "1em",
  overflowY: "scroll"
});

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
        <PanelsCollection>
          {this.state.panels.map((panel, i) => (
            <PanelContainer key={i}>
              <Panel>
                <button onClick={() => this.closePanel(i)}>X</button>
                <ImageSearch
                  query={panel.query}
                  results={panel.results}
                  onSearch={query => this.onPanelSearch(i, query)}
                  onQueryChange={newQuery => this.onQueryChange(i, newQuery)}
                />
              </Panel>
            </PanelContainer>
          ))}
          <PanelContainer>
            <AddPanelButton onClick={() => this.addPanel()}>
              <span role="img" aria-label="Add panel">
                ➕
              </span>{" "}
              Add a panel
            </AddPanelButton>
          </PanelContainer>
        </PanelsCollection>
      </div>
    );
  }
}

export default SearchPanelsContainer;
