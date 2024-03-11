import { ApolloServer } from 'apollo-server';
import typeDefs from '../src/graphql/typeDefs';
import resolvers from '../src/graphql/resolvers';
// Create Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start server
server.listen().then(({ url }: { url: string }) => {
  console.log(`Server ready at ${url}`);
});
