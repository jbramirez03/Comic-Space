const schema = `

  type Comic {
    _id: ID
    comicId: Int
    title: String
    description: String
    image: String
  }

  type Post {
    _id: ID
    comicId: Int
    title: String
    description: String
    image: String
    tradeable: Boolean
    price: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    comics: [Comic]
    wishlist: [Comic]
    posts: [Post]
    image: String
    about: String
    favorite: String
  }

  input savedComic {
    comicId: Int
    title: String
    description: String
    image: String
}

  input wishedComic {
    comicId: Int
    title: String
    description: String
    image: String
  }

  input postedComic {
    comicId: Int
    title: String
    description: String
    image: String
    tradeable: Boolean
    price: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    comics: [Comic]
    comic(_id: ID!): Comic
    posts: [Post]
    user: User
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!,password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, image: String, about: String, favorite: String): User
    login(email: String!, password: String!): Auth
    saveComic(input: savedComic!): User
    wishComic(input: wishedComic!): User
    removeComic(comicId: Int!): User
    removeWish(comicId: Int!): User
    postComic(input: postedComic!): User
  }
`;

export default schema;