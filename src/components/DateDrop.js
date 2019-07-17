import React from "react";

const DateDrop = ({ changeDate }) => {
  return (
    <div className="date">
      <form action="">
        <label>Select a date: </label>
        <input
          type="date"
          name="date"
          onChange={changeDate}
          className="cal-date"
        />
      </form>
    </div>
  );
};

export default DateDrop;
