import React from 'react';
import { Card, HeartIcon } from 'evergreen-ui';


const FeedItem = (props) => {
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
			  <img src={props.imgURL} />
			</div>

		  <div className="feed-item__footer">
		  	<HeartIcon color="#ed4956" />
		  </div>
		</Card>
	);
}

export default FeedItem;


