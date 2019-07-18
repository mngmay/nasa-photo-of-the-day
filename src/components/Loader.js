import React from "react";
import { Dimmer, Loader as UILoader } from "semantic-ui-react";
import styled from "styled-components";
import "./../App.css";

const Loader = () => (
  <div>
    <Dimmer active>
      <UILoader size="huge">Loading</UILoader>
    </Dimmer>
  </div>
);

export default Loader;
