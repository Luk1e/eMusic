export const UserTypes = `#graphql
    type User {
      id: ID
      username: String
      email: String
      password: String
      favorites: [Music!]!
    }

    type AuthResponse {
      accessToken:String!
      refreshToken: String!
    }

    extend type Query {
      user: User!
      users: [User!]
    }

    extend type Mutation {
      signUpGoogle(accessToken: String!): AuthResponse
    }
`;
