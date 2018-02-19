import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import config from 'config';
import Page from 'components/Page';
import Users from 'components/Users';



import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from 'reducers/';

const store = createStore(reducers, applyMiddleware(thunk));


let fetchData = component.fetchData;


const serverRender = async () => {
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <Page />
    )
  };
};

export default serverRender;


<Provider store={store}>
  <Page />
</Provider>