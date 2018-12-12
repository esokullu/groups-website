import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import http from 'http';
import express from 'express';
import fs from 'fs';
import App from './App.jsx';

const index = fs.readFileSync('index.html', 'utf8');
const PORT = process.env.PORT || 80;

const app = new express();
const server = new http.Server(app);

app.use('/app', express.static('app'));

app.use((request, response) => {
    const context = {};

    const html = ReactDOMServer.renderToString(
        <StaticRouter location={request.url} context={context}>
            <App/>
        </StaticRouter>
    );

    if (context.url) {
        response.writeHead(301, {Location: context.url});
        response.end();
    } else {
        response.write(index.replace(
            /<div id="root"><\/div>/,
            `<div id="root">${html}</div>`
        ));
        response.end();
    }
});

server.listen(PORT, '0.0.0.0');
console.log(`\nApplication available at ${PORT}\n`);