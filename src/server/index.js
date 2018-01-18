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
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/api', express.static(path.join(__dirname, 'api')));

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
          <title>W Combinator</title>
          <script>window.__initialData__ = ${serialize(initialData)}</script>
        </head>

        <body>
          <div id="root">${markup}</div>
          <script src="/dist/main.js"></script>
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
