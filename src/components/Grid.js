import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Grid(props) {
  const { limit } = props;
  const [url, setUrl] = useState("");

  useEffect(() => {
    const axios = require("axios");
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=1Xutd7S447q1JRw1wsZ4D7OLzT0RGlrvd9koaDSQ"
      )
      .then(response => {
        console.log("nasa api", response.data.url);
      });
  }, []);
  return <div>Test</div>;
}
export default Grid;
