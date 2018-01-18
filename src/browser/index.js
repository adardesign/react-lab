import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/routes/App";
import { hydrate } from "react-dom"
import Loadable from 'react-loadable';



window.main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<BrowserRouter>
    <App />
  </BrowserRouter>,
	document.getElementById('app'));
  });
};
