
import React from 'react';

import TransactionDate from './TransactionDate';

import './Transaction.css';


const Transaction = (props) => {
    // const sum = +props.sum;
    const calcPoints = (sum) => {
        const limit1 = 50, limit2 = 100;
        let points = 0;
        if (sum > limit2) {
            points = (sum - limit2) * 2 + (limit2 - limit1);
        }
        else if (sum > limit1) {
            points = sum - limit1;
        }
        return points;
    };

    return (
      <div className='transaction'>
        <div className='row-item'>
            <TransactionDate date={props.date} />
        </div>
        <div className='row-item'>
            <div className='transaction-item'>  
                <div className='transaction-item__text'>${props.sum}</div>
            </div>
        </div>
        <div className='row-item'>
            <div className='transaction-item points'>  
                <div className='transaction-item__text'>{calcPoints(props.sum)}</div>
            </div>
        </div>        
      </div>
    );
};
  
  export default Transaction;

  
