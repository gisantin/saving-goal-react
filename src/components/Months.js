import React from "react";

import { ReactComponent as Arrow } from "../icons/arrow.svg";
import "./Months.css";

const Months = (props) => {
  const {
    isDecrementDisabled,
    decrementMonth,
    incrementMonth,
    incrementedMonth,
    incrementedYear,
  } = props;

  return (
    <div className="calc__amount-month">
      <h4 className="calc__amount-text">Reach goal by</h4>
      <div className="calc__amount-boxes">
        <div className="calc__amount-left">
          <Arrow
            className="arrow-left"
            disabled={isDecrementDisabled}
            onClick={decrementMonth}
          ></Arrow>
        </div>
        <div className="calc__amount-input">
          <span className="calc__amount-inputMonth">{incrementedMonth}</span>
          <span className="calc__amount-inputYear">{incrementedYear}</span>
        </div>
        <div className="calc__amount-right">
          <Arrow className="arrow-right" onClick={incrementMonth}></Arrow>
        </div>
      </div>
    </div>
  );
};

export default Months;
