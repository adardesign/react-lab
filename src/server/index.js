import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import App from "../shared/routes/App";
import Loadable from 'react-loadable';

const app = express();

app.use(cors());
app.use('/dist', express.static('dist'));

app.get("/api/news", (req, res) => {
  res.json([]);
});

app.get("**", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route));

  const requestInitialData =
    activeRoute.component.requestInitialData && activeRoute.component.requestInitialData();

  Promise.resolve(requestInitialData)
    .then(initialData => {
      const context = { initialData };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );

      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>W Combinator</title>
          <script src="/dist/client/bundle.js" defer></script>
          <script>window.__initialData__ = ${serialize(initialData)}</script>
        </head>

        <body>
          <div id="root">${markup}</div>
        </body>
      </html>
      `);
    })
    .catch(next);
});


Loadable.preloadAll().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});
