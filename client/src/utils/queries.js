import { gql } from '@apollo/client';

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

// export const QUERY_USER = gql`
//   {
//     user {
//       _id
//       firstName
//       lastName
//       email
//       comics {
//         comicId
//         description
//         title
//         image
//       }
//   }
// `;


export const QUERY_ME = gql`
query me {
  me {
      _id
      firstName
      lastName
      email
      image
      about
      favorite
      comics {
          comicId
          description
          title
          image
      }
      wishlist {
          comicId
          description
          title
          image
      }
      posts {
        comicId
        description
        title
        image
        tradeable
        price
      }
  }
}

`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;