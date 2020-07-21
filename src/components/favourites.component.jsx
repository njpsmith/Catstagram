import React from 'react';
import { connect } from 'react-redux';
import FeedItem from './feed-item.component';

const Favourites = (props) => {
	return (
		<div className="favourites-page inner-container">
			<h2>Favourite cat photos</h2>
			
			{ !props.likedCats.length ? "You have no favourite cats! Please like some!" : (
				<div className="favourite-grid">
					{
						props.likedCats.map((cat) => (
							<FeedItem key={cat} imgURL={cat} />
						))
					}
				</div>
			) }
			
			<br/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	likedCats: state.likeReducer.currentUser.likedCats
})

export default connect(mapStateToProps)(Favourites);
