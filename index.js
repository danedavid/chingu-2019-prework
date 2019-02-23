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
        <title>Server Rendered Page</title>
      </head>
      <body>
        <div id="root">${ReactDOMServer.renderToString(<App/>)}</div>
        <script src="static/client-bundle.js"></script>
      </body>
    </html>
    `
  );
};

router.use('^/$', serverRenderer);

// serve client bundle
app.use('/static', express.static('client-dist'));
app.use(router);

apiServer.applyMiddleware({
  path: '/api',
  app,
});

app.listen({ port: 4000 }, () => {
  console.log(`Server running at http://localhost:4000${apiServer.graphqlPath}`);
});