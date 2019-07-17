import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import DateDrop from "./components/DateDrop";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [date, setDate] = useState("2019-07-17");

  const changeDate = event => {
    setDate(event.target.value);
    // console.log(event.target);
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=1Xutd7S447q1JRw1wsZ4D7OLzT0RGlrvd9koaDSQ&date=${date}`
        )
        .then(response => {
          // console.log("nasa api", response.data.date);
          setData(response.data); //all data
        })
        .catch(err => {
          console.log("Error", err);
        });
    };
    fetchData();
  }, [date]);

  if (!data.url) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <DateDrop changeDate={changeDate} />
      {/* {the left side variable is what is passed to DateDrop to connect} */}
      <Card data={data} />
    </div>
  );
}

export default App;
