import React from 'react';
import { Card, HeartIcon } from 'evergreen-ui';
import { connect } from 'react-redux';
import FeedImage from './feed-image.component';


class FeedItem extends React.Component {
	state = {
		imageIsLiked: false
	}

	componentDidMount() {
		this.checkIfCatisLiked();
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
		// console.log('toggling like to', isPhotoLiked);
		if(isPhotoLiked) {
			// console.log('REMOVE_LIKE_ON_PHOTO - payload', this.props.imgURL);
		  this.props.dispatch({ type: "REMOVE_LIKE_ON_PHOTO", payload: imgURL });
		} else {
			// console.log('adding to liked list');
			this.props.dispatch({ type: "LIKE_PHOTO", payload: imgURL });
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
			>
				<div className="feed-item__img-wrapper">
					<FeedImage imgURL={this.props.imgURL} />
				</div>

			  <div className="feed-item__footer">
			  	<HeartIcon onClick={this.toggleLikeOnPhoto} className={this.state.imageIsLiked ? "filled" : ""}  />
			  </div>
			</Card>
		);
	}
}


const mapStateToProps = (state) => ({
	likedCats: state.likeReducer.currentUser.likedCats
})

// export default connect(null, mapDispatchToProps)(FeedItem);
export default connect(mapStateToProps)(FeedItem);



