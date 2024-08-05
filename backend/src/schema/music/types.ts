export const MusicTypes = `#graphql
    type  Music {
      id: ID
      likes: Int
      dislikes: Int
      favorites: Int
      author: Author
    }

    extend type Query {
      music: Music!
      musics: [Music!]
    }

    input MusicCreateDataInput {
      title: String!
      author: String!
    }

    extend type Mutation {
      musicCreate(data: MusicCreateDataInput!): Music
    }
`;


