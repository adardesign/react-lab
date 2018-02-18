import React from 'react';
import ReactDOM from 'react-dom';

import StateApi from 'state-api';
import Page from 'components/Page';

const store = new StateApi(window.initialData);

ReactDOM.hydrate(
  <Page store={store} />,
  document.getElementById('root')
);
