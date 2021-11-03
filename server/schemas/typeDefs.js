const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Comic {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
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
    username: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    comics(category: ID, name: String): [Comic]
    comic(_id: ID!): Comic
    user: User
    order(_id: ID!): Order
    checkout(comics: [ID]!): Checkout
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, username: String!,password: String!): Auth
    addOrder(comics: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateComic(_id: ID!, quantity: Int!): Comic
    addComic(name: String!, description: String!, image: String!, price: Int!, quantity: Int!, category: String!): Comic
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
