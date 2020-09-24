import { TOGGLE_DARK_MODE } from '../actions';

let darkModePreference = localStorage.getItem('darkModePreference');
darkModePreference = JSON.parse(darkModePreference);
const initialDarkModeState = !!darkModePreference ? darkModePreference : false;

const initialState = {
  darkMode: initialDarkModeState,
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };

    default:
      return state;
  }
};

export default darkModeReducer;
