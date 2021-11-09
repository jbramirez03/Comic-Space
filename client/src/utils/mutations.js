import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($comics: [ID]!) {
    addOrder(comics: $comics) {
      purchaseDate
      comics {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_COMIC = gql`
mutation saveComic($input: savedComic!){
    saveComic(input: $input) {
        _id
        email
        comics {
            comicId
            title
            description
            image
        }
        }
}
`;


export const REMOVE_COMIC = gql`
mutation removeComic($comicId: Int!){
    removeComic(comicId: $comicId){
        _id
        email
        comics {
            comicId
            description
            image
            title
        }
    }
}
`;

export const WISH_COMIC = gql`
mutation wishComic($input: wishedComic!){
  wishComic(input: $input){
    _id
    email
    comics{
      comicId
      title
      description
      image
    }
  }
}
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const POST_COMIC = gql`
  mutation postComic($input: postedComic!){
    postedComic(input: $input){
        _id
        email
        comics {
            comicId
            title
            description
            image
        }
        }
    }
  }
`;