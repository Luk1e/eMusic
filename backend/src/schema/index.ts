import {
  MusicTypes,
  MusicQuery,
  MusicResolvers,
  MusicMutation,
} from "./music/index.js";
import {
  UserTypes,
  UserQuery,
  UserResolvers,
  UserMutation,
} from "./user/index.js";

import {
  AuthorTypes,
  AuthorQuery,
  AuthorResolvers,
  AuthorMutation,
} from "./author/index.js";

export const typeDefs = `
  type Query
  type Mutation
  ${UserTypes}
  ${MusicTypes}
  ${AuthorTypes}
`;

export const resolvers = {
  Query: {
    ...UserQuery,
    ...MusicQuery,
    ...AuthorQuery,
  },
  Mutation: {
    ...UserMutation,
    ...MusicMutation,
    ...AuthorMutation,
  },
  User: UserResolvers,
  Music: MusicResolvers,
  Author: AuthorResolvers,
};
