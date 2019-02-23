const express = require('express');
const apiServer = require('./server');

const app = express();

apiServer.applyMiddleware({
  path: '/api',
  app,
});

app.listen({ port: 4000 }, () => {
  console.log(`Server running at http://localhost:4000${apiServer.graphqlPath}`);
});