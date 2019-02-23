import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './resolvers';
import { GoogleBooksAPI } from './datasource';
import typeDefs from './schema.graphql';

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  dataSources: () => ({
    googleAPI: new GoogleBooksAPI(),
  }),
});

export default server;