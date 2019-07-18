import React from "react";
import styled from "styled-components";

const CalDate = styled.div`
  margin: 20px;
  font-family: Courier;
`;

const DateDrop = ({ changeDate }) => {
  return (
    <CalDate>
      <form action="">
        <label>Select a date: </label>
        <input
          type="date"
          name="date"
          onChange={changeDate}
          className="cal-date"
        />
      </form>
    </CalDate>
  );
};

export default DateDrop;
