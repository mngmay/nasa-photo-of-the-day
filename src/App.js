import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import DateDrop from "./components/DateDrop";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [date, setDate] = useState("");

  const changeDate = event => {
    setDate(event.EventTarget.value);
  };

  useEffect(() => {
    const axios = require("axios");
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=1Xutd7S447q1JRw1wsZ4D7OLzT0RGlrvd9koaDSQ"
      )
      .then(response => {
        // console.log("nasa api", response.data);
        setData(response.data); //all data
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  if (!data.url) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <DateDrop date={changeDate} />
      <Card data={data} />
    </div>
  );
}

export default App;
