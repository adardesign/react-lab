import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import Routes from "../shared/routes/Routes";
import App from "../shared/routes/App";
import Loadable from 'react-loadable';
import path from 'Path';

import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

const stats = require('../../dist/react-loadable.json');


const app = express();

app.use(cors());
//app.use(express.static('dist'))
app.use('/dist', express.static('dist'))
app.use('/api', express.static('api'))

app.get("**", (req, res, next) => {
   let modules = [];
  const activeRoute = Routes.find(route => matchPath(req.url, route));

  const requestInitialData =
    activeRoute.component.requestInitialData && activeRoute.component.requestInitialData();

  Promise.resolve(requestInitialData)
    .then(initialData => {
      const context = { initialData };
      const markup = renderToString(
      <Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Capture>
        );
if (context.url) {
      res.redirect(context.url);
    } else {
     

  let bundles = getBundles(stats, modules);
  let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));
 res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>BS"D</title>
          <link rel="stylesheet" type="text/css" href="https://www.adorama.com/Als.Mvc/nspc/combres.axd/AD_MainCss/-/?svfor=1day&svcfor=1day&cacheVersion=401&ID=10426"/>
          <link rel="stylesheet" type="text/css" href="https://www.adorama.com/Als.Mvc/nspc/combres.axd/ADMainSiteHomePageCss/-/?svfor=1day&svcfor=1day&cacheVersion=401&ID=10426"/>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <script>window.__initialData__ = ${serialize(initialData)}</script>
        </head>

        <body>
          <div id="root">${markup}</div>
          <script src="/dist/bundle.js"></script>
          ${scripts.map(script => {
            return `<script src="/dist/${script.file}"></script>`
          }).join('\n')}
        <script>window.main();</script>
        </body>
      </html>
      `);
      }
    })
    .catch(next);
});



Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
}).catch(err => {
  console.log(err);
});
