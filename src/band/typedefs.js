import { gql } from "apollo-server";

export const bandTypeDefs = gql`
  extend type Query {
    band(id: ID!): Band!
    bands: [Band!]
  }

  type Band {
    id: ID!
    name: String!
    stillWorking: Boolean!
  }
`;
