import { ApolloServer } from "apollo-server";
import { context } from "./context.js";
import { resolvers, typeDefs } from "./Schema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
