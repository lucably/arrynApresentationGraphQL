import { gql } from "apollo-server";

export const artistTypeDefs = gql`
  extend type Query {
    artist(id: ID!): Artist!
    artists: [Artist!]!
  }

  extend type Mutation {
    createArtist(data: CreateArtistInput!): Artist!
    deleteArtist(id: ID!): Boolean!
    updateArtist(id: ID!, data: EditArtistInput!): Artist!
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

  input EditArtistInput {
    name: String
    type: String
    idBand: String
  }
`;
