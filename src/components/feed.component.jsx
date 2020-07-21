import React from 'react';
import { Pane, Card, Spinner } from 'evergreen-ui';
import FeedItem from './feed-item.component';
import { connect } from 'react-redux';


class Feed extends React.Component {
	state = {
		catData: [],
		loading: false,
		error: null
	}


	componentDidMount() {
		this.setState({ loading: true })

		fetch('https://api.thecatapi.com/v1/images/search?limit=5&api_key=31202f7f-1ccc-4a62-8b60-aa2c4d814867')
			.then(response => response.json())
      .then(data => this.setState({ catData: data }, console.log('done!', data)))
     	.then(data => {
      	setTimeout( () => { this.setState({ loading: false }) }, 1000 )
     	})
      .catch(error => this.setState({ error, isLoading: false }));

    console.log('this.props', this.props);
	}



	render() {
		return (
			<div className="feed inner-container">
				{
					// this.props.likedCats.map((catURL) => <div>{catURL}</div>)
				}

				<Pane>
					{this.state.loading ? <div className="feed__spinner-wrapper"><Spinner marginX="auto" marginY="auto" /></div> : null}

					{this.state.catData.map(
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
	likedCats: state.likeReducer.likedCats
})

export default connect(mapStateToProps)(Feed);




