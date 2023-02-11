import React, { useState } from 'react';

import Transaction from './Transaction';

import './Customer.css';

const Customer = (props) => {
    const nowDate = Date.now();
    let prev = new Date(nowDate);
    prev = prev.setMonth(prev.getMonth() - 3);
    const prevDate = new Date(prev);
    const [transactionsOn, setTransactionsOn] = useState(false);
    const transactionsOnHandler = () => {
        setTransactionsOn(true);
    };
    const transactionsOffHandler = () => {
        setTransactionsOn(false);
    };
    /* Filters transactions by date to get transactions from last three months */
    const filteredTransactions = props.transactions.filter(transaction => {
        transaction.dateOb = new Date (transaction.date);
        return transaction.dateOb > prevDate;
    });
    
    return (
        <div>
            <div className='customer card'>
                <div className='customer_name'>
                    <h2>{props.name}</h2>
                    {(!transactionsOn && filteredTransactions.length > 0) && <button onClick={transactionsOnHandler}>Show Transactions</button>}
                    {transactionsOn &&<button onClick={transactionsOffHandler}>Hide Transactions</button>}
                </div>
            </div>
            {transactionsOn && 
            <div>
                <div className='headers-line'>
                    <div className='header'>Date</div>
                    <div className='header'>Amount</div>
                    <div className='header'>Points</div>
                </div>
                <ul className='transactions-list'>
                {filteredTransactions.map((item) => (
                    <Transaction
                        key={item.id}
                        sum={+item.sum}
                        date={item.dateOb}
                    />
                ))}
                </ul>
            </div>
            }
        </div>
    );
};

export default Customer;
