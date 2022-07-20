import { gql, ApolloServer } from 'apollo-server-lambda';
import { Query } from './queries';
import { typeDefs } from './typeDefs';

const resolvers = {
  Query: Query,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: !!process.env.IS_LOCAL,
});

export const handler = server.createHandler();
