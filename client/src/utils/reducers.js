import {
  UPDATE_COMICS,
  UPDATE_POSTS,
  UPDATE_SAVED,
  UPDATE_WISHLIST,
  REMOVE_COMIC,
  REMOVE_SAVED,
  REMOVE_WISHED,
  POSTS,
  ADD_COMIC
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

    case ADD_COMIC:
      const newComic = { ...action.payload };
      return {
        ...state,
        comics: [...state.comics, newComic],
      };

    case REMOVE_SAVED:
      const updatedComics = state.comics.filter(comic => comic.id !== action.payload);
      return {
        ...state,
        comics: [...updatedComics],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(comic => {
          if (action._id === comic._id) {
            comic.purchaseQuantity = action.purchaseQuantity;
          }
          return comic;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(comic => {
        return comic._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};
