export const likePhoto = (photoURL = "") => {
	return {
		type: "LIKE_PHOTO", 
		payload: photoURL
	}
}

export const unLikePhoto = (photoURL = "") => {
	return {
		type: "REMOVE_LIKE_ON_PHOTO",
		payload: photoURL
	}
}


export const FETCH_CATS_BEGIN   = 'FETCH_CATS_BEGIN';
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const FETCH_CATS_FAILURE = 'FETCH_CATS_FAILURE';

export const fetchCatsBegin = () => ({
  type: FETCH_CATS_BEGIN
});

export const fetchCatsSuccess = cats => ({
  type: FETCH_CATS_SUCCESS,
  payload: { cats }
});

export const fetchCatsFailure = error => ({
  type: FETCH_CATS_FAILURE,
  payload: { error }
});


export const fetchCats = () => {
  return dispatch => {
    dispatch(fetchCatsBegin());
    return fetch("https://api.thecatapi.com/v1/images/search?size=med&limit=20&api_key=31202f7f-1ccc-4a62-8b60-aa2c4d814867")
      .then(res => res.json())
      .then(json => {
        setTimeout( () => { dispatch(fetchCatsSuccess(json)) }, 600 );
        return json;
      })
      .catch(error => dispatch(fetchCatsFailure(error)));
  };
}



