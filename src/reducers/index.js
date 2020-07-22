import { combineReducers } from 'redux';

import likeReducer from './like-reducer';
// import categorySearchReducer from './category-search-reducer';

const allReducers = combineReducers({
	likeReducer: likeReducer,
	// categorySearchReducer: categorySearchReducer
});

export default allReducers;