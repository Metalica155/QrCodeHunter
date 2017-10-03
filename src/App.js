import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Reader from './Reader';

const App = () => <Reader />;

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
