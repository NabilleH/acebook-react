import React, { Component } from 'react';

class Comment extends Component {

  render() {
    return (
      <div className='comment'>
        <div className='comment-message'>
          message:{this.props.message}
        </div>
        <div className='comment-username'>
          <small> Username:{this.props.username} </small>
        </div>
        <div className='comment-created_at'>
          <small> Created at: {this.props.created_at} </small>
        </div>
      </div>
    )
  }

}
export default Comment;
