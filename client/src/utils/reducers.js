import {
  UPDATE_COMICS,
  UPDATE_POSTS,
  UPDATE_SAVED,
  UPDATE_WISHLIST,
  REMOVE_COMIC,
  REMOVE_SAVED,
  REMOVE_WISHED,
  ADD_COMIC,
  ADD_SAVED,
  ADD_WISHLIST,
  ADD_POST,
  REMOVE_POST,
  REMOVE_SAVED
} from "./actions";
// comment for chris to get changes
const initialState = {
  comics: [],
  posts: [],
  wishlist: [],
  saved: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMICS:
      return {
        ...state,
        comics: [...action.comics],
      };

    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
      };

    case UPDATE_SAVED:
      return {
        ...state,
        saved: [...action.saved],
      };

    case UPDATE_WISHLIST:
      return {
        ...state,
        wishlist: [...action.wishlist],
      };

    case ADD_COMIC:
      const newComic = { ...action.payload };
      return {
        ...state,
        comics: [...state.comics, newComic],
      };

    case ADD_SAVED:
      const newSaved = { ...action.payload };
      return {
        ...state,
        saved: [...state.saved, newSaved],
      }

    case ADD_WISHLIST:
      const newWish = { ...action.payload };
      return {
        ...state,
        wishlist: [...state.wishlist, newWish]
      };

    case ADD_POST:
      const newPost = { ...action.payload };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };

    case REMOVE_SAVED:
      const updatedComics = state.saved.filter(saved => saved.id !== action.payload);
      return {
        ...state,
        comics: [...updatedComics],
      };

    case REMOVE_WISHED:
      const updatedComics = state.wishlist.filter(wish => wish.id !== action.payload);
      return {
        ...state,
        wishlist: [...updatedComics],
      }

    case REMOVE_POST:
      const updatedComics = state.posts.filter(post => post.id !== action.payload);
      return {
        ...state,
        posts: [...updatedComics],
      }

    case REMOVE_COMIC:
      const updatedComics = state.comics.filter(comic => comic.id !== action.payload);
      return {
        ...state,
        comics: [...updatedComics],
      }

    default:
      return state;
  }
};
