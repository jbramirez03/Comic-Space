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

// Jimmy added for forum page.  Remove if broken
export const ADD_REPLY = gql`
  mutation addReply($name: ID!, $reply: String!) {
    addReply(profileId: $profileId, reply: $reply) {
  
      name
      replies
    }
  }
`;
// Jimmy added for forum page.  Remove if broken


export const POST_COMIC = gql`
  mutation postComic($input: postedComic!){
    postComic(input: $input){
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($firstName: String, $lastName: String, $email: String, $image: String, $about: String, $favorite: String) {
    updateUser(firstName: $firstName, lastName: $lastName, email: $email, image: $image, about: $about, favorite: $favorite) {
      image
      firstName
      lastName
      email
      about
      favorite
    }
  }
`;

export const REMOVE_WISH = gql`
mutation removeWish($comicId: Int!){
    removeWish(comicId: $comicId){
        _id
        email
        comics {
            comicId
            description
            image
            title
        }
        wishlist {
          comicId
          description
          image
          title
        }
    }
}
`;