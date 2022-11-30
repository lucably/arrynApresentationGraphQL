import { gql } from "apollo-server";

export const artistTypeDefs = gql`
  extend type Query {
    artist(id: ID!): Artist!
    artists: [Artist!]!
  }

  extend type Mutation {
    createArtist(data: CreateArtistInput!): Artist!
  }

  type Artist {
    id: ID!
    name: String!
    type: String!
    idBand: String!
  }

  input CreateArtistInput {
    name: String!
    type: String!
    idBand: String!
  }
`;
