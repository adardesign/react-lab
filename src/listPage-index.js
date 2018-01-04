import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListPageApp from './ListPageApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ListPageApp />, document.getElementById('root'));
registerServiceWorker();
