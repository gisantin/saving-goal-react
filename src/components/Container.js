import React from 'react';
import Calculus from './Calculus';
import Display from './Display';


const MONTHS = [
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
const Container = () => {
    const initialMonthIndex = new Date().getMonth();
    const [currentMonth, setCurrentMonth] = useState(initialMonthIndex);

    const initialYear = new Date().getFullYear();
    const [currentYear, setCurrentYear] = useState(initialYear);

    const [isDisabled, setIsDisabled] = useState(false);

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
    };

    const decrementDate = () => {
      let prevMonth = currentMonth - 1;
      if (isDisabled) return;
      if (prevMonth === initialMonthIndex && currentYear === initialYear) {
        setIsDisabled(true);
      }
      if (prevMonth < 0) {
        prevMonth = 11;
        setCurrentYear(currentYear - 1);
      }
      setCurrentMonth(prevMonth);
    };

  return (
    <div className="container">
        <h1 className="container__title">Let's plan your <span>saving goals.</span></h1>
        <div className="container__box">
            <div className="container__box-logo">
                <span className="logo"></span>
                <h1>Buy a house</h1>
                <p>Saving goal</p>
            </div>
            <Calculus
              currentMonth={currentMonth}
              currentYear={currentYear}
              isDisabled={isDisabled}
              incrementDate={incrementDate}
              decrementDate={decrementDate}
            />
            <Display/>
        </div>
    </div>
  )
}

export default Container;
