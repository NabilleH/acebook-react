import React, { Component } from 'react';

class Likes extends Component {
    render() {
      console.log("likes here", this.props.get_likes)
      if (this.props.get_likes !== null) {
        return (
        <div className="like">
          <button className="likes-button" label="likes">likes</button>
          {this.props.get_likes}
        </div>
        )
      } else {
        return (
        <div></div>
      )
      }
    }
  }
  export default Likes
