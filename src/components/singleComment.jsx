import React, { Component } from 'react';
import Likes from './likes'

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
        <div className='comment-like'>
        <Likes get_likes={this.props.get_likes}/>
        </div>
      </div>
    )
  }

}
export default Comment;
