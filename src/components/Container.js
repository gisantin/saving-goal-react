import React, { useState } from "react";
import Calculus from "./Calculus";
import Display from "./Display";
import Months from "./Months";
import { MONTHS } from "../utils/constants";
import addMonthsFromCurrentDate from "../utils/addMonthsFromCurrentDate";

import { ReactComponent as House } from "../icons/insuranceAuto.svg";

import "./Container.css";

const Container = () => {
  const initialAmountMoney = 0;

  const [amountMoney, setAmountMoney] = useState(initialAmountMoney);
  const [monthsCounter, setMonthsCounter] = useState(1);

  const incrementedDate = addMonthsFromCurrentDate(monthsCounter - 1);
  const incrementedMonth = MONTHS[incrementedDate.getMonth()];
  const incrementedYear = incrementedDate.getFullYear();

  const onCalculusChange = ({ target: { value } }) => {
    const parsedValue = value.split(",").join("");
    setAmountMoney(parseFloat(parsedValue));
  };

  const incrementMonth = () => {
    const monthCounterIncremented = monthsCounter + 1;
    setMonthsCounter(monthCounterIncremented);
  };

  const decrementMonth = () => {
    if (monthsCounter > 1) {
      const monthCounterDecremented = monthsCounter - 1;
      setMonthsCounter(monthCounterDecremented);
    }
  };

  const calculateMonthlyAmount = (amount, months) => {
    return amount / months;
  };

  let isDecrementDisabled = monthsCounter <= 1;

  return (
    <div className="container">
      <h1 className="container__title">
        Let's plan your <span>saving goals.</span>
      </h1>
      <div className="container__box">
        <div className="container__box-logo">
          <House />
          <h1>Buy a house</h1>
          <p>Saving goal</p>
        </div>
        <div className="container__fields">
          <Calculus onCalculusChange={onCalculusChange} />
          <Months
            isDecrementDisabled={isDecrementDisabled}
            incrementMonth={incrementMonth}
            decrementMonth={decrementMonth}
            monthsCounter={monthsCounter}
            incrementedMonth={incrementedMonth}
            incrementedYear={incrementedYear}
          />
        </div>
        <Display
          monthlyAmount={calculateMonthlyAmount(amountMoney, monthsCounter)}
          months={monthsCounter}
          finalDate={`${incrementedMonth} ${incrementedYear}`}
        />
        <div className="container__button">
          <button disabled className="button">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
