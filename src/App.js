import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const axios = require("axios");
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=1Xutd7S447q1JRw1wsZ4D7OLzT0RGlrvd9koaDSQ"
      )
      .then(response => {
        // console.log("nasa api", response.data);
        setData(response.data); //all data
        setUrl(response.data.url); //photo
      });
  }, []);

  if (!url) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Card url={url} data={data} />
    </div>
  );
}

export default App;
