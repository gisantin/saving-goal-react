import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class Calculus extends Component {
  state = {
    amountMoney: 1000,
  }

  cleanIputHandler = () => {
    this.setState({
      amountMoney: '',
    })
  }

  render() {
    return (
      <div className="calc">
        <div className="calc__amount">
          <div className="calc__amount-money">
            <h4 className="calc__amount-text">"Total amount"</h4>
            <div className="calc__amount-boxes">
              <button className="calc__amount-currency"
                onClick={this.cleanIputHandler}>$</button>
              <NumberFormat
                className="calc__amount-dolar"
                value={this.state.amountMoney}
                thousandSeparator={true}
                displayType={'number'}
              />
            </div>
          </div>
          <div className="calc__amount-month">
            <h4 className="calc__amount-text">Reach goal by</h4>
            <div className="calc__amount-boxes">
              <span className="calc__amount-left">$</span>
              <NumberFormat
                className="calc__amount-time"
                thousandSeparator={true}
              />
              <span className="calc__amount-right">$</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculus;
