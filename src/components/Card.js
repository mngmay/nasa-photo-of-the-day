import React, { useEffect, useState } from "react";

function Card(props) {
  const { url, data } = props;
  const media = () => {
    if (data.media_type === "image") {
      return <img src={url} alt="photo of the day" width="500" height="300" />;
    } else if (data.media_type === "video") {
      return (
        <iframe src={url} width="500" height="300" title="video of the day" />
      );
    }
  };
  console.log(data);

  return <div className="card">{media()}</div>;
}
export default Card;
