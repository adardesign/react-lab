import React from 'react';
import ReactDOM from 'react-dom';

import Page from 'components/Page';



import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const store = createStore(
  reducers, window.__INITIAL_STATE__, applyMiddleware(thunk)
);

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Page/>
    </Provider>
  );
};

ReactDOM.hydrate(<AppRouter />, document.querySelector('#root'));