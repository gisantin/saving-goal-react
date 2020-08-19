import React from "react";

import "./Calculus.css";

const Calculus = ({
  formattedAmountMoney,
  onCalculusChange,
}) => {
  return (
    <div className="calc">
      <div className="calc__amount">
        <div className="calc__amount-money">
          <h4 className="calc__amount-text">Total amount</h4>
          <div className="calc__amount-boxes">
            <span className="calc__amount-currency">$</span>
            <input
              className="calc__amount-dolar"
              onChange={onCalculusChange}
              defaultValue={formattedAmountMoney}
              value={formattedAmountMoney}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculus;
