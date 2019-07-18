import React from "react";
import { Dimmer, Loader as UILoader } from "semantic-ui-react";

const Loader = () => (
  <div>
    <Dimmer active>
      <UILoader size="huge">Loading</UILoader>
    </Dimmer>
  </div>
);

export default Loader;
