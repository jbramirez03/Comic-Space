import gql from 'graphql-tag';

export const QUERY_COMICS = gql`
  query getComics($category: ID) {
    comics(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($comics: [ID]!) {
    checkout(comics: $comics) {
      session
    }
  }
`;

export const QUERY_ALL_COMICS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        comics {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
