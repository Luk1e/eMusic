export const AuthorTypes = `#graphql
    type  Author {
      id: ID
      firstName: String
      LastName: String
      NumberOfSongs: Int
    }

    extend type Query {
      author: Author!
      authors: [Author!]
    }

`;
