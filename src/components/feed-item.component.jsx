import React from 'react';
import { Card, HeartIcon, toaster } from 'evergreen-ui';
import { connect } from 'react-redux';
import FeedImage from './feed-image.component';


class FeedItem extends React.Component {
	state = {
		imageIsLiked: false
	}

	componentDidMount() {
		this.checkIfCatisLiked();
	}

	addToFavouritesNotification = () => {
		toaster.success(
      'Added to your favourites!', {
	      id: 'unique',
	      duration: 1
	    }
    )
	}

	removeFromFavouritesNotification = () => {
		toaster.notify(
      'Removed from your favourites :(', {
	      id: 'unique',
	      duration: 1
	    }
    )
	}


	checkIfCatisLiked = () => {
		const likedCatsArray = this.props.likedCats;

		// Check if photo is in the 'likedCats' array in Redux state
		if(likedCatsArray.includes(this.props.imgURL)) {
			this.setState({ imageIsLiked: true })
		}
	}

	toggleHeartFillAnimation = () => {
		this.setState(prevState => ({ 
			imageIsLiked: !prevState.imageIsLiked 
		}));
	}

	toggleLikeOnPhoto = () => {
		const isPhotoLiked = this.state.imageIsLiked;
		const imgURL = this.props.imgURL;
		this.toggleHeartFillAnimation();
		if(isPhotoLiked) {
		  this.props.dispatch({ type: "REMOVE_LIKE_ON_PHOTO", payload: imgURL });
		  this.removeFromFavouritesNotification();
		  this.removeFromLocalStorage(imgURL);
		} else {
			this.props.dispatch({ type: "LIKE_PHOTO", payload: imgURL });
			this.addToFavouritesNotification();
			this.addToLocalStorage();
		}
	};
	

	getCurrentLocalStorageCatsArray = () => {
		// Get current localStorage
		let favouriteCats = localStorage.getItem('favouriteCats');
		if(favouriteCats == null || !favouriteCats.length) {
			favouriteCats = [];
		} else {
			// Convert into an array (from a string)
			favouriteCats = JSON.parse(favouriteCats);
		}
		return favouriteCats;
	}

	addToLocalStorage = () => {
		let favouriteCats = this.getCurrentLocalStorageCatsArray();

		// Add new item to the end
		favouriteCats.push(this.props.imgURL);

		// Change array to string again and save in localStorage
		localStorage.setItem('favouriteCats', JSON.stringify(favouriteCats));
	}

	removeFromLocalStorage = () => {
		let favouriteCats = this.getCurrentLocalStorageCatsArray();

		// Remove item from the array
		favouriteCats = favouriteCats.filter(e => e !== this.props.imgURL)

		// Change array to string again and save in localStorage
		localStorage.setItem('favouriteCats', JSON.stringify(favouriteCats));
	}


	render() {
		return (
			<Card
				className="feed-item"
			  elevation={1}
			  hoverElevation={2}
			  background="#ffffff"
			  borderRadius="3px"
			  width="100%"
			  onClick={this.toggleLikeOnPhoto}
			>
				<div className="feed-item__img-wrapper">
					<FeedImage imgURL={this.props.imgURL} />
				</div>

			  <div className="feed-item__footer">
			  	<HeartIcon className={this.state.imageIsLiked ? "heart-button filled" : "heart-button un-filled"}  />
			  </div>
			</Card>
		);
	}
}


const mapStateToProps = (state) => ({
	likedCats: state.likeReducer.currentUser.likedCats
})

export default connect(mapStateToProps)(FeedItem);



