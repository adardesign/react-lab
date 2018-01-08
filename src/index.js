import React from 'react';
import ReactDOM from 'react-dom';

import CatalogRoutes from './routes/';
import registerServiceWorker from './registerServiceWorker';
import App from './App.css';


ReactDOM.render(<CatalogRoutes />, document.getElementById('root'));
registerServiceWorker();
