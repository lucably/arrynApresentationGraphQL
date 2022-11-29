import { gql } from "apollo-server";

export const artistTypeDefs = gql`
  extend type Query {
    artist(id: ID!): Artist!
    artists: [Artist!]!
  }

  type Artist {
    id: ID!
    name: String!
    type: String!
    idBand: String!
  }
`;
