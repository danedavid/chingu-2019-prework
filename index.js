import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './client/App.js';
import apiServer from './server';

const app = express();
const router = express.Router();

const serverRenderer = (req, res) => {
  return res.send(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dane's Book Finder</title>
      </head>
      <body>
        <div id="root">${ReactDOMServer.renderToString(<App/>)}</div>
        <script src="client-bundle.js"></script>
      </body>
    </html>
    `
  );
};

router.use('^/$', serverRenderer);

// serve client bundle
app.use('/', express.static('client-dist'));
app.use(router);

apiServer.applyMiddleware({
  path: '/api',
  app,
});

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`Server running at http://localhost:4000${apiServer.graphqlPath}`);
});