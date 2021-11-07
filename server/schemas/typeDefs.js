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

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    comics: [Comic]
    orders: [Order]
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

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    comics: [Comic]
    comic(_id: ID!): Comic
    user: User
    order(_id: ID!): Order
    checkout(comics: [ID]!): Checkout
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!,password: String!): Auth
    addOrder(comics: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    saveComic(input: savedComic!): User
    removeComic(comicId: ID!): User
  }
`;

module.exports = typeDefs;
