import React from 'react';

import './TransactionDate.css';

const TransactionDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'short' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='transaction-item'>
      <div className='transaction-item__text'>{year} {month}, {day}</div>
      {/* <div className='transaction-date__month'>{month}</div>
      <div className='transaction-date__day'>{day}</div> */}
    </div>
  );
};

export default TransactionDate;
