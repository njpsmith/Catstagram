import React from 'react';
import { Pane, Card, Spinner } from 'evergreen-ui';
import FeedItem from './feed-item.component';
import Searchbar from './searchbar.component';
import { connect } from 'react-redux';


class Feed extends React.Component {
	render() {
		return (
			<div className="feed">
				<div className="inner-container">
					<Searchbar />
					<hr/>
					{this.props.loading ? <div className="feed__spinner-wrapper"><Spinner marginX="auto" marginY="auto" /></div> : null}
					{this.props.error ? "Error! Cats could not be loaded <_<" : null}
					
					<p>Click image(s) to add/remove from list of favourites.</p>

					<Pane className="feed-layout">
						{this.props.cats.map(
							(cat) => (
								<FeedItem key={cat.id} imgURL={cat.url} />
							)
						)}
	        </Pane>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	cats: state.likeReducer.cats,
  loading: state.likeReducer.loading,
  error: state.likeReducer.error
})

export default connect(mapStateToProps)(Feed);




