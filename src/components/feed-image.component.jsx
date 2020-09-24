import React from 'react';

class FeedImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <div style={{ animation: `${this.state.show && 'fadeIn'} 1s` }}>
          <div
            className="feed-image-background"
            style={{ backgroundImage: `url(${this.props.imgURL})` }}
          ></div>
        </div>
      </div>
    );
  }
}

export default FeedImage;
