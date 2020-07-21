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