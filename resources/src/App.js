import React, { Component, Fragment } from 'react';
import api from './services/api';

import Checkout from './pages/Checkout';

import './styles/global';

class App extends Component {
  componentDidMount() {
    const response = api.get('/api/checkouts/6544');
    console.log('data1: ', response);
  }
  render() {
    return (
      <Fragment>
        <Checkout />
      </Fragment>
    );
  }
}

export default App;
