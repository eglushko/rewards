import React from 'react';
import Customers from './components/Customers';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
  }

  componentDidMount() {
    /* fake API call */
    fetch('./data/customers.json')    
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                items: data,
                DataisLoaded: true
            });
        })
    }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) { 
      return (
        <div>
          <h1>Please wait some time...</h1> 
        </div>
      );
    }

    return (
      <div className='application card'>
        <Customers items={items} />
      </div>
    );
  }
};

export default App;
