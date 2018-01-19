import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import Routes from "../shared/routes/Routes";
import App from "../shared/routes/App";
import { getLoadableState } from 'loadable-components/server'
import path from 'Path';
import "isomorphic-fetch";

import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';


let context = {}


const app = express();

app.use(cors());
//app.use(express.static('dist'))
app.use('/dist', express.static('dist'))
app.use('/api', express.static('api'))

app.get("/", (req, res, next) => {

console.log("----------REQUST")

const app = (
  <StaticRouter location={req.url} context={context}>
    <App />
  </StaticRouter>
)
console.log("----------app", app)

   // let dataFetch = fetch("../../api/homepage.json").then( (resp) => resp.json() );
  // console.log(app)

  // dataFetch.then((data) => {
getLoadableState(app).then(loadableState => {
  console.log("loadableState", loadableState)
  
  const html = renderToString(<app />)
    console.log("html", html)

  // Insert style tag into page
  const page = `
    <!doctype html>
    <html>
    <head></head>
    <body>
      <div id="main">${html}</div>
      ${loadableState.getScriptTag()}
    </body>
    </html>
    `
     console.log(page); 
      res.send(page)
  });
 })
 


  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
