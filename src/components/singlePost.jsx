import React, { Component } from 'react';
import AllComments from './allComments';
import './singlePost.css'
import Likes from './likes'
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props)
    this.createComment = this.createComment.bind(this)
  }
  createComment(e) {
    e.preventDefault();
    let self = this;
    console.log("im a post id", self.props.id)
    axios
      .post("api/v1/posts/"+ self.props.id +"/comments", {
        comment: {
        message: document.getElementById("comment-input").value
      }},
      {headers: {
        'ACCEPT': "application/json",
        "Authorisation": self.props.authToken
      }
    })
    .then(function(response) {self.props.getPosts()} )
    .catch(function(error) {
      console.log(error)
    })
  };

  render() {
    return (
      <div className='post'>
        <div className='post-message'>
          {this.props.message}
        </div>
        <div className='post-username'>
          <small> Username: {this.props.username} </small>
        </div>
        <div className='post-created_at'>
          <small> Created at: {this.props.created_at} </small>
        </div>
        <div className='post-like'>
        <Likes get_likes={this.props.get_likes}/>
        </div>
        <form className="form-comments">
        <div className="form-comments">
        <input id="comment-input" className="comment-input" placeholder="add comments"
               type="text"/>
        <button
          type="submit"
          onClick={this.createComment}
          className="comment-button"
          label="Comment">
          Comment
        </button>
        </div>
        </form>
        <div className='post-comments'>
        <AllComments comments={this.props.comments}/>
        </div>
      </div>
    )
  }

}
export default Post;
