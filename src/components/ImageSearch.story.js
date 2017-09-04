import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ImageSearch from "./ImageSearch";

storiesOf("ImageSearch", module).add("Without results", () => (
  <ImageSearch
    query="Some query"
    results={[]}
    onQueryChange={action("Query changed")}
    onSearch={action("Search triggered")}
  />
));
