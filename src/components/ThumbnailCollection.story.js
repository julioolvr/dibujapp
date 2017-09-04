import React from "react";

import { storiesOf } from "@storybook/react";

import ThumbnailCollection from "./ThumbnailCollection";

storiesOf("ThumbnailCollection", module)
  .add("without results", () => <ThumbnailCollection results={[]} />)
  .add("with some images", () => {
    const results = [
      { link: "http://placehold.it/400x400" },
      { link: "http://placehold.it/600x400" },
      { link: "http://placehold.it/400x600" },
      { link: "http://placehold.it/200x200" },
      { link: "http://placehold.it/1000x1000" }
    ];

    return <ThumbnailCollection results={results} />;
  });
