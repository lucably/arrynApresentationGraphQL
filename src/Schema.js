import { gql } from "apollo-server";
import { artistResolvers, artistTypeDefs } from "./artist/index.js";
import { bandResolvers, bandTypeDefs } from "./band/index.js";

const rootTypeDefs = gql`
  type Query {
    root: Boolean
  }
  type Mutation {
    root: Boolean
  }
`;

const rootResolvers = {
  Query: {
    root: () => true,
  },
  Mutation: {
    root: () => true,
  },
};

export const typeDefs = [rootTypeDefs, artistTypeDefs, bandTypeDefs];
export const resolvers = [rootResolvers, artistResolvers, bandResolvers];
