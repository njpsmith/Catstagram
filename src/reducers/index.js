import { combineReducers } from 'redux';

import likeReducer from './like-reducer';
import darkModeReducer from './dark-mode-reducer';
// import categorySearchReducer from './category-search-reducer';

const allReducers = combineReducers({
	likeReducer: likeReducer,
	darkModeReducer: darkModeReducer
	// categorySearchReducer: categorySearchReducer
});

export default allReducers;