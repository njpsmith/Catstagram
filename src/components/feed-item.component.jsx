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

	toggleHeartFill = () => {
		this.setState(prevState => ({ 
			imageIsLiked: !prevState.imageIsLiked 
		}));
	}

	toggleLikeOnPhoto = () => {
		const isPhotoLiked = this.state.imageIsLiked;
		const imgURL = this.props.imgURL;
		this.toggleHeartFill();
		if(isPhotoLiked) {
		  this.props.dispatch({ type: "REMOVE_LIKE_ON_PHOTO", payload: imgURL });
		  this.removeFromFavouritesNotification();
		} else {
			this.props.dispatch({ type: "LIKE_PHOTO", payload: imgURL });
			this.addToFavouritesNotification();
		}
	};

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



