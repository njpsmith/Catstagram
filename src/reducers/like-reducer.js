const initialState = {
	currentUser: {
		token: null,
		likedCats: ['testURL', 'testURL222']	
	},
	cats: {
		catsByID: []
	}
}

const likeReducer = (state = initialState, action) => {
	console.log('reducer', state, action);

	switch(action.type) {
		case "LIKE_PHOTO":
			return {
				...state,
				currentUser: { likedCats: [...state.currentUser.likedCats, action.payload] }
			}
		case "REMOVE_LIKE_ON_PHOTO":
			return {
				...state,
				currentUser: {
					likedCats: state.currentUser.likedCats.filter(
						catURL => catURL !== action.payload
					)
				}
			}
		default:
			return state;
	}
}

export default likeReducer;
