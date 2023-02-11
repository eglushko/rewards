import React from 'react';

import Customer from './Customer';

import './Customers.css';

const Customers = (props) => {

    return (
        <ul className='customers'>
            <div className='title card'>
                <h2>Customer's Name</h2>
            </div>
            {props.items.map((item) => (
                <Customer
                    key={item.id}
                    name={item.name}
                    transactions={item.transactions}
                />            
            ))}
        </ul>
    );
  };
  
  export default Customers;
  