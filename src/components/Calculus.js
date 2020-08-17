import React from 'react';
import NumberFormat from 'react-number-format';



const Calculus = ({
    amountMoney = 1000,

    handleInputChange = (event) => {
        this.setState({ amountMoney: event.target.value })
    }
 }) => {
    return (
        <div className="calc">
            <div className="calc__amount">
                <div className="calc__amount-money">
                    <h4 className="calc__amount-text">Total amount</h4>
                    <div className="calc__amount-boxes">
                        <span className="calc__amount-currency">$</span>
                        <NumberFormat
                            className="calc__amount-dolar"
                            value={amountMoney}
                            thousandSeparator={true}
                            onChange={handleInputChange}
                        />    
                    </div>
                </div>
                <div className="calc__amount-month">
                    <h4 className="calc__amount-text">Reach goal by</h4>
                    <div className="calc__amount-boxes">
                        <span className="calc__amount-left">$</span>
                        <NumberFormat
                            className="calc__amount-time"
                            value={amountMoney}
                            thousandSeparator={true}
                            onChange={handleInputChange}
                        /> 
                        <span className="calc__amount-right">$</span>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculus;