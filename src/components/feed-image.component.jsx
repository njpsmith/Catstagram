import React from 'react';

class FeedImage extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
    	// imageStatus: "loading" //For error handling
    	show: false
    }; 
  }

  componentDidMount() {
  	this.setState({ show: true });
  }

  // handleImageLoaded() {
  //   this.setState({ imageStatus: "loaded" });
  // }

  // handleImageErrored() {
  //   this.setState({ imageStatus: "failed to load" });
  // }


	render() {
		return (
			<div>
				<div style={{ animation: `${this.state.show && "fadeIn"} 1s` }}>
				  <div className="feed-image-background" style={{backgroundImage: `url(${this.props.imgURL})`}}>
						{/*<img 
							src={this.props.imgURL} 
							onLoad={this.handleImageLoaded.bind(this)}
			        onError={this.handleImageErrored.bind(this)}
						/>*/}
					</div>
				</div>
			</div>	
		);
	}
}

export default FeedImage;


