import React from 'react';

class FeedImage extends React.Component {
	constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" }; //For error handling
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

	render() {
		return (
			<div>
				<img 
					src={this.props.imgURL} 
					onLoad={this.handleImageLoaded.bind(this)}
	        onError={this.handleImageErrored.bind(this)}
				/>
			</div>
		);
	}
}

export default FeedImage;


