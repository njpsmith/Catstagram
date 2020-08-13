import {
  FETCH_CATS_BEGIN,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
} from '../actions';

const initialState = {
  currentUser: {
    token: null,
    likedCats: [],
  },
  cats: [],
  loading: false,
  error: null,
};

const likeReducer = (state = initialState, action) => {
  console.log('reducer', state, action);

  switch (action.type) {
    case FETCH_CATS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CATS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        cats: action.payload.cats,
      };

    case FETCH_CATS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cats: [],
      };

    case 'LIKE_PHOTO':
      return {
        ...state,
        currentUser: {
          likedCats: [...state.currentUser.likedCats, action.payload],
        },
      };

    case 'REMOVE_LIKE_ON_PHOTO':
      return {
        ...state,
        currentUser: {
          likedCats: state.currentUser.likedCats.filter(
            (catURL) => catURL !== action.payload
          ),
        },
      };

    case 'GET_FAVOURITE_CATS_FROM_LOCAL_STORAGE':
      return {
        ...state,
        currentUser: {
          likedCats: action.payload,
        },
      };

    default:
      return state;
  }
};

export default likeReducer;
