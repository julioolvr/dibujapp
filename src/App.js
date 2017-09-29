import React, { Component } from "react";

import Timer from "./components/Timer";
import SearchPanelsContainer from "./components/SearchPanelsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Timer />
        <SearchPanelsContainer />
      </div>
    );
  }
}

export default App;
