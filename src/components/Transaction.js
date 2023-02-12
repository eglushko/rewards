import React from 'react';

import TransactionDate from './TransactionDate';
import calcPoints from '../util/Calc';

import './Transaction.css';


const Transaction = (props) => {
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

  
