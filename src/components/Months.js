import React from "react";

import { ReactComponent as Arrow } from "../icons/arrow.svg";
import "./Months.css";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Months = (props) => {
  const {
    currentMonth,
    currentYear,
    isDisabled,
    incrementDate,
    decrementDate,
  } = props;

  return (
    <div className="calc__amount-month">
      <h4 className="calc__amount-text">Reach goal by</h4>
      <div className="calc__amount-boxes">
        <div className="calc__amount-left">
          <Arrow
            className="arrow-left"
            disabled={isDisabled}
            onClick={decrementDate}
          ></Arrow>
        </div>
        <div className="calc__amount-input">
          <span className="calc__amount-inputMonth">{MONTHS[currentMonth]}</span>
          <span className="calc__amount-inputYear">{currentYear}</span>
        </div>
        <div className="calc__amount-right">
          <Arrow className="arrow-right" onClick={incrementDate}></Arrow>
        </div>
      </div>
    </div>
  );
};

export default Months;
