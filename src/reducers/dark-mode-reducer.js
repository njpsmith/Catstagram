import { TOGGLE_DARK_MODE } from '../actions';

const initialState = {
	darkMode: false
}


const darkModeReducer = (state = initialState, action) => {
	console.log('reducer', state, action);

	switch(action.type) {
		case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      };

		default:
			return state;
	}
}

export default darkModeReducer;

