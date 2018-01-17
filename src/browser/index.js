import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";
import { hydrate } from "react-dom"






if(__isBrowser__){
	hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

}else{
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
}
