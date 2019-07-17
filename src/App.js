import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Grid limit={5} />
    </div>
  );
}

export default App;
