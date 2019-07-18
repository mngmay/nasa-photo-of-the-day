import React from "react";
import { Container, Divider } from "semantic-ui-react";
import styled from "styled-components";
import "./../App.css";

const CardDiv = styled.div`
  margin: 0 auto;
  width: 600px;
`;

const CardTitle = styled.h1`
  margin: 20px;
`;

function Card(props) {
  const { data } = props;
  const media = () => {
    if (data.media_type === "image") {
      return <img src={data.url} alt="apod" width="500" height="300" />;
    } else if (data.media_type === "video") {
      return <iframe src={data.url} width="500" height="300" title="apod" />;
    }
  };

  return (
    <CardDiv>
      {media()}
      <CardTitle>{data.title}</CardTitle>
      <Container textAlign="justified">
        <strong>Date: {data.date}</strong>
        <Divider />
        <p>{data.explanation}</p>
      </Container>
    </CardDiv>
  );
}

// Old code before needing to refactor for Day2
//    function Card(props) {
//    const { data } = props;
//    const media = () => {
//      if (data.media_type === "image") {
//        return <img src={data.url} alt="apod" width="500" height="300" />;
//      } else if (data.media_type === "video") {
//        return <iframe src={data.url} width="500" height="300" title="apod" />;
//      }
//    };
//    //   console.log(data);

//    return (
//      <div className="card">
//        <h2 className="card-title">{data.title}</h2>
//        {media()}       <p className="card-date">Date: {data.date}</p>
//        <p className="description">{data.explanation}</p>
//      </div>
//    );
//  }

export default Card;
