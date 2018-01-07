import React from 'react';
import ReactDOM from 'react-dom';

import CatalogRoutes from './routes/';
import registerServiceWorker from './registerServiceWorker';
import Loader from './loader.css';


ReactDOM.render(<CatalogRoutes />, document.getElementById('root'));
registerServiceWorker();
