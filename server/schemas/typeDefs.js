const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Comic {
    _id: ID
    comicId: Int
    title: String
    description: String
    image: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    comics: [Comic]
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
    orders: [Order]
    wishlist: [Comic]
    posts: [Post]
    image: String
    about: String
    favorite: String
  }

  type Checkout {
    session: ID
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
    categories: [Category]
    comics: [Comic]
    comic(_id: ID!): Comic
    posts: [Post]
    user: User
    order(_id: ID!): Order
    checkout(comics: [ID]!): Checkout
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!,password: String!): Auth
    addOrder(comics: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, image: String, about: String, favorite: String): User
    login(email: String!, password: String!): Auth
    saveComic(input: savedComic!): User
    wishComic(input: wishedComic!): User
    removeComic(comicId: Int!): User
    removeWish(comicId: Int!): User
    postComic(input: postedComic!): User
  }
`;

module.exports = typeDefs;
