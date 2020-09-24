export const LIKE_PHOTO = 'LIKE_PHOTO';
export const REMOVE_LIKE_ON_PHOTO = 'REMOVE_LIKE_ON_PHOTO';
export const FETCH_CATS_BEGIN = 'FETCH_CATS_BEGIN';
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const FETCH_CATS_FAILURE = 'FETCH_CATS_FAILURE';
export const UPDATE_SELECTED_CAT_BREED = 'UPDATE_SELECTED_CAT_BREED';
export const GET_FAVOURITE_CATS_FROM_LOCAL_STORAGE =
  'GET_FAVOURITE_CATS_FROM_LOCAL_STORAGE';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const toggleDarkMode = (trueOrFalse) => {
  return {
    type: TOGGLE_DARK_MODE,
    payload: trueOrFalse,
  };
};

export const likePhoto = (photoURL = '') => {
  return {
    type: 'LIKE_PHOTO',
    payload: photoURL,
  };
};

export const unLikePhoto = (photoURL = '') => {
  return {
    type: REMOVE_LIKE_ON_PHOTO,
    payload: photoURL,
  };
};

export const fetchCatsBegin = () => ({
  type: FETCH_CATS_BEGIN,
});

export const fetchCatsSuccess = (cats) => ({
  type: FETCH_CATS_SUCCESS,
  payload: { cats },
});

export const fetchCatsFailure = (error) => ({
  type: FETCH_CATS_FAILURE,
  payload: { error },
});

export const getFavouriteCatsFromLocalStorageAction = (favouriteCats) => ({
  type: GET_FAVOURITE_CATS_FROM_LOCAL_STORAGE,
  payload: favouriteCats, // cats from localStorage
});

export const fetchCats = (selectedBreedID) => {
  return (dispatch) => {
    let apiString =
      'https://api.thecatapi.com/v1/images/search?size=med&limit=20&api_key=31202f7f-1ccc-4a62-8b60-aa2c4d814867';

    if (!!selectedBreedID) {
      apiString = `https://api.thecatapi.com/v1/images/search?breed_id=${selectedBreedID}&size=med&limit=20&api_key=31202f7f-1ccc-4a62-8b60-aa2c4d814867`;
    }

    dispatch(fetchCatsBegin());
    return fetch(apiString)
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          dispatch(fetchCatsSuccess(json));
        }, 600); //Added this timeout to show the spinner
        return json;
      })
      .catch((error) => dispatch(fetchCatsFailure(error)));
  };
};

export const updateSelectedCatBreed = (selectedBreedID) => {
  return (dispatch) => {
    dispatch(fetchCats(selectedBreedID));
  };
};

export const getFavouriteCatsFromLocalStorage = () => {
  return (dispatch) => {
    let favouriteCats = localStorage.getItem('favouriteCats');
    if (favouriteCats == null || !favouriteCats.length) {
      favouriteCats = [];
    } else {
      // Convert into an array (from a string)
      favouriteCats = JSON.parse(favouriteCats);
    }

    dispatch(getFavouriteCatsFromLocalStorageAction(favouriteCats));
  };
};
