import React, { useState } from "react";
import Calculus from "./Calculus";
import Display from "./Display";
import Months, { MONTHS } from "./Months";

import { ReactComponent as House } from "../icons/insuranceAuto.svg";

import './Container.css';


const Container = () => {
  const initialAmountMoney = 1000;

  const initialMonthIndex = new Date().getMonth();
  const initialYear = new Date().getFullYear();
  const [formattedAmountMoney, setFormattedAmountMoney] = useState(
    initialAmountMoney
  );
  const [amountMoney, setAmountMoney] = useState(initialAmountMoney);
  const [monthlyAmount, setMonthlyAmount] = useState(`$${initialAmountMoney}`);
  const [currentMonth, setCurrentMonth] = useState(initialMonthIndex);
  const [months, setMonths] = useState(1);
  const [currentYear, setCurrentYear] = useState(initialYear);
  const [isDisabled, setIsDisabled] = useState(true);

  const onCalculusChange = ({ target: { value } }) => {
    const intValue = parseInt(value.replace(/[\D]/g, ""));

    const formattedValue = intValue.toLocaleString("en-US", {
      style: "decimal",
    });

    setFormattedAmountMoney(formattedValue);
    setAmountMoney(intValue);
    calculateAmount(months);
  };

  const incrementDate = () => {
    let nextMonth = currentMonth + 1;

    if (nextMonth > 11) {
      nextMonth = 0;
      setCurrentYear(currentYear + 1);
    }
    setCurrentMonth(nextMonth);

    if (isDisabled) {
      setIsDisabled(false);
    }

    const updatedMonths = months + 1;

    setMonths(updatedMonths);
    calculateAmount(updatedMonths);
  };

  const calculateAmount = (months) => {
    const monthlyAmount = (amountMoney / months).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    setMonthlyAmount(monthlyAmount);
  };

  const handleDisable = (prevMonth) => {
    if (prevMonth > initialMonthIndex && currentYear === initialYear) {
      setIsDisabled(false);
    }

    if (prevMonth === initialMonthIndex && currentYear === initialYear) {
      setIsDisabled(true);
    }
  };

  const decrementDate = () => {
    let prevMonth = currentMonth - 1;
    if (isDisabled) return;

    handleDisable(prevMonth);

    if (prevMonth < 0) {
      prevMonth = 11;
      setCurrentYear(currentYear - 1);
    }

    setCurrentMonth(prevMonth);

    const updatedMonths = months - 1;

    setMonths(updatedMonths);
    calculateAmount(updatedMonths);
  };

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
          <Calculus
            formattedAmountMoney={formattedAmountMoney}
            onCalculusChange={onCalculusChange}
          />
          <Months
            currentMonth={currentMonth}
            currentYear={currentYear}
            isDisabled={isDisabled}
            incrementDate={incrementDate}
            decrementDate={decrementDate}
          />
        </div>
        <Display
          monthlyAmount={monthlyAmount}
          months={months}
          formattedAmountMoney={formattedAmountMoney}
          finalDate={`${MONTHS[currentMonth]} ${currentYear}`}
        />
        <div className="container__button">
          <button disabled className="button">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Container;
