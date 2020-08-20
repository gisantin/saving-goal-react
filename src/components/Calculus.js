import React from "react";
import CurrencyInput from "../components/CurrencyInput";

import "./Calculus.css";

const Calculus = ({ onCalculusChange }) => {
  return (
    <div className="calc__amount">
      <div className="calc__amount-money">
        <h4 className="calc__amount-text">Total amount</h4>
        <div className="calc__amount-boxes">
          <span className="calc__amount-currency">$</span>
          <CurrencyInput
            type="text"
            onChange={onCalculusChange}
            className="calc__amount-dolar"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculus;
