import { ApolloServer } from "apollo-server";
import { context } from "./context.js";
import { ArtistApi } from "./artist/datasources.js";
import { resolvers, typeDefs } from "./Schema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      ArtistApi: new ArtistApi(),
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
