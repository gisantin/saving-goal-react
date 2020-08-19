import React from "react";

import "./Display.css";

const Display = ({
  monthlyAmount,
  months,
  formattedAmountMoney,
  finalDate,
}) => {
  return (
    <>
      <div className="display">
        <p>Monthly amount</p>
        <h1>{monthlyAmount}</h1>
      </div>
      <div className="display__info">
        <p>
          You're planning <span>{months} monthly deposits </span>
          to reach you <span>${formattedAmountMoney}</span> goal by{" "}
          <span> {finalDate}</span>
        </p>
      </div>
    </>
  );
};

export default Display;
