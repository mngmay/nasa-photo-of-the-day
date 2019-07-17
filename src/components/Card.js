import React from "react";

function Card(props) {
  const { data } = props;
  const media = () => {
    if (data.media_type === "image") {
      return <img src={data.url} alt="apod" width="500" height="300" />;
    } else if (data.media_type === "video") {
      return <iframe src={data.url} width="500" height="300" title="apod" />;
    }
  };
  //   console.log(data);

  return (
    <div className="card">
      <h2 className="card-title">{data.title}</h2>
      {media()}
      <p className="card-date">Date: {data.date}</p>
      <p className="description">{data.explanation}</p>
    </div>
  );
}
export default Card;
