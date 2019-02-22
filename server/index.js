const { ApolloServer, gql } = require('apollo-server');
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

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});