import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import DateDrop from "./components/DateDrop";
import Loader from "./components/Loader";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  console.log(today);
  const [data, setData] = useState("");
  const [date, setDate] = useState(today);

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

  // can also do a ternary, but if useState is set to {} that returns as true. Make sure to set to null or a diff falsey

  if (!data) {
    return <Loader />;
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
