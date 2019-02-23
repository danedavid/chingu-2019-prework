const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');
const path = require('path');
const resolvers = require('./resolvers');
const { GoogleBooksAPI } = require('./datasource');

const typeDefs = fs.readFileSync(path.resolve(__dirname, 'schema.graphql'), 'utf8');

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  dataSources: () => ({
    googleAPI: new GoogleBooksAPI(),
  }),
});

module.exports = server;