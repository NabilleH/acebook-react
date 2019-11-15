import React, { Component } from 'react';
import AllComments from './allComments'

class Post extends Component {

  render() {
    return (
      <div className='post'>
        <div className='post-message'>
          message:{this.props.message}
        </div>
        <div className='post-username'>
          <small> Username:{this.props.username} </small>
        </div>
        <div className='post-created_at'>
          <small> Created at: {this.props.created_at} </small>
        </div>
        <div className='post-comments'>
        <AllComments comments={this.props.comments}/>
        </div>
      </div>
    )
  }

}
export default Post;
