import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/routes/App";
import { hydrate } from "react-dom"


hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
