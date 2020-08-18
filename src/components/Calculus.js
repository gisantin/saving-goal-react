import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

import Months from './Months'

const Calculus = (props) => {
  const [amountMoney, setAmountMoney] = useState(1000);

  const cleanIputHandler = () => setAmountMoney('');

  return (
    <div className="calc">
      <div className="calc__amount">
        <div className="calc__amount-money">
          <h4 className="calc__amount-text">"Total amount"</h4>
          <div className="calc__amount-boxes">
            <button className="calc__amount-currency"
              onClick={cleanIputHandler}>$</button>
            <NumberFormat
              className="calc__amount-dolar"
              value={amountMoney}
              thousandSeparator={true}
              displayType={'number'}
            />
          </div>
        </div>
        <Months {...props} />
    </div>
  </div>
  )
}

export default Calculus;
