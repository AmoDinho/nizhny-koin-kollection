import { Query } from './queries';
const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: Query,
};

export { resolvers, typeDefs };
