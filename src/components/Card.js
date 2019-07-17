import React, { useEffect, useState } from "react";

function Card(props) {
  const { data } = props;
  const media = () => {
    if (data.media_type === "image") {
      return (
        <img src={data.url} alt="photo of the day" width="500" height="300" />
      );
    } else if (data.media_type === "video") {
      return (
        <iframe
          src={data.url}
          width="500"
          height="300"
          title="video of the day"
        />
      );
    }
  };
  //   console.log(data);

  return (
    <div className="card">
      <h2 className="card-title">{data.title}</h2>
      {media()}
      <p className="date">Date: {data.date}</p>
      <p className="description">{data.explanation}</p>
    </div>
  );
}
export default Card;
