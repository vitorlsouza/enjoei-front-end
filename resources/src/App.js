import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Checkout from './pages/Checkout';

import './styles/global';

const App = () => {
  return (
    <Provider store={store}>
      <Checkout />
    </Provider>
  );
};

export default App;
