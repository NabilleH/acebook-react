import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'This is a test post 1.',
      username: 'mrtest',
      created_at: '',
    }
  }
  render() {
    return (
      <div className='post'>
        <div className='post-message'>
          {this.state.message}
        </div>
        <div className='post-username'>
          <small> Username:{this.state.username} </small>
        </div>
        <div className='post-created_at'>
          <small> Created at: {this.state.created_at} </small>
        </div>
      </div>
    )
  }

}
export default Post;
