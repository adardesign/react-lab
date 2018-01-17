import express from 'express';
import React from 'react';
import App from '../shared/App';
//import NoMatch from '../shared/NoMatch';
//import Error from '../shared/Error';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'


//import render from './render';
import fetch from 'node-fetch';

const routes = [
    '/',
    '/g/:gistId'
];

// sourceMapSupport.install();

const app = express();
app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
    fetch('https://www.adorama.com/col/api/homepage.json')
        .then(r => r.json())
        .then(pageData => {
            res.status(200)
            const context = {};
            const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App pageData={pageData}/>
            </StaticRouter>
        )
        if (context.url) {
            res.writeHead(302, {
                Location: context.url
            })
            res.end();
        }
        res.send(html);
   }).catch(err => {
            console.error(err);
            res.status(500).send("oops");
        });
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
