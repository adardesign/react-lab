import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/routes/App";
import { hydrate } from "react-dom"
import { loadComponents } from 'loadable-components'



loadComponents().then(() => {
    hydrate(
    	<BrowserRouter>
    		<App />
  		</BrowserRouter>,
	document.getElementById('root'));
 });
