import { combineReducers } from 'redux';

import likeReducer from './like-reducer';

const allReducers = combineReducers({
	likeReducer: likeReducer
});

export default allReducers;