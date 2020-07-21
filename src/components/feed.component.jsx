import React from 'react';
import { Pane, Card, Spinner } from 'evergreen-ui';
import FeedItem from './feed-item.component';
import { connect } from 'react-redux';


class Feed extends React.Component {
	render() {
		return (
			<div className="feed inner-container">
				<Pane className="feed-layout">
					{this.props.loading ? <div className="feed__spinner-wrapper"><Spinner marginX="auto" marginY="auto" /></div> : null}
					{this.props.error ? "Error! Cats could not be loaded <_<" : null}

					{this.props.cats.map(
						(cat) => (
							<FeedItem key={cat.id} imgURL={cat.url} />
						)
					)}
        </Pane>
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




