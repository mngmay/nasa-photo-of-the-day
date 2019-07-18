import React from "react";
import styled from "styled-components";
import "./../App.css";

const HeaderDiv = styled.div`
  color: white;
  background-color: #919191;
  margin-bottom: 20px;
  font-family: "Source Sans Pro", sans-serif;
`;

const Slogan = styled.div`
  font-size: 2rem;
  padding: 20px;
`;

const HeaderH1 = styled.h1`
  font-size: 5rem;
  margin-bottom: 0;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderH1>
        {"{"} NASA A.P.O.D {"}"}
      </HeaderH1>
      <Slogan>Get your daily dose of NASA's Astronomy Photo of the Day</Slogan>
    </HeaderDiv>
  );
};

export default Header;
