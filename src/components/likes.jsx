import React, { Component } from 'react';

class Likes extends Component {
  render() {
    console.log("likes here", this.props.get_likes)
    if (this.props.get_likes !== null) {
      return (
        <div className="like">
          <button className="likes-button btn-sm w3-button w3-theme-d2 w3-margin-bottom" label="likes"><i class="fa fa-thumbs-up"></i> like</button>
          {" " + this.props.get_likes.length}
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


