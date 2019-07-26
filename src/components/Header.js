import React from "react";
import styled from "styled-components";
import "./../App.css";

const HeaderDiv = styled.div`
  color: white;
  background-color: #919191;
  margin: 20px 0;
  padding: 20px 0;
  text-align: center;
  border-radius: 50px;
  margin: 0 auto;
`;

const Slogan = styled.div`
  font-size: 2rem;
  padding: 20px;
  font-family: Courier;
`;

const HeaderH1 = styled.h1`
  font-size: 5rem;
  margin-bottom: 0;
  font-family: "Nanum Gothic", sans-serif;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderH1>
        {"{"} NASA A.P.O.D. {"}"}
      </HeaderH1>
      <Slogan>Get your daily dose of NASA's Astronomy Photo of the Day</Slogan>
    </HeaderDiv>
  );
};

export default Header;
