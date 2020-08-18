import React, { useState } from "react";

const Months = (props) => {
  const {
    currentMonth,
    currentYear,
    isDisabled,
    incrementDate,
    decrementDate
  } = props;

  return (
    <div className="calc__amount-month">
      <h4 className="calc__amount-text">Reach goal by</h4>
      <div className="calc__amount-boxes">
        <button
          className="calc__amount-left"
          disabled={isDisabled}
          onClick={decrementDate}
        ></button>
        <span className="calc__amount-input">
          {MONTHS[currentMonth]}
          {currentYear}
        </span>
        <button className="calc__amount-right" onClick={incrementDate}></button>
      </div>
    </div>
  );
}


export default Months;
