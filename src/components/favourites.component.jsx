import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import FeedItem from './feed-item.component';

const Favourites = (props) => {
	return (
		<div className="favourites-page inner-container">
			<h2>Favourite cat photos</h2>

			{ !props.likedCats.length ? (
				<p>
					You have no favourite cats! Please like some 
					{" "}
					<Link to="/">here</Link>!
				</p>
				) : (
				<div>
					<p>Click image(s) to remove from list of favourites.</p>
					<div className="favourite-grid">
						{
							props.likedCats.map((cat) => (
								<FeedItem key={cat} imgURL={cat} />
							))
						}
					</div>
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
