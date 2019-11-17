import React, { Component } from "react";
import AllComments from "./allComments";
import "./singlePost.css";
import Likes from "./likes";
import axios from "axios";
import DeleteButton from "./deleteButton";

class Post extends Component {
  constructor(props) {
    super(props);
    this.createComment = this.createComment.bind(this);
  }
  createComment(e) {
    e.preventDefault();
    let self = this;
    console.log("im a post id", self.props.id);
    axios
      .post(
        "api/v1/posts/" + self.props.id + "/comments",
        {
          comment: {
            message: document.getElementById("comment-input").value
          }
        },
        {
          headers: {
            ACCEPT: "application/json",
            Authorisation: self.props.authToken
          }
        }
      )
      .then(function (response) {
        self.props.getPosts();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="card post w3-container w3-card w3-white w3-round w3-margin">
        <div className="text-left">
          <DeleteButton
            authToken={this.props.authToken}
            getPosts={this.props.getPosts}
            path={this.props.id}
          />
        </div>
        <div className="post-username">
          <h4><strong>{this.props.username}</strong> says:</h4><br></br>
        </div>
        <p><div className="post-message">{this.props.message}</div></p>
        <div className="post-created_at w3-right w3-opacity">
          <small>
            {" "}
            {" "}
            {new Date(Date.parse(this.props.created_at)).toDateString()}{" "}
          </small>
        </div>
        <div className="post-like">
          <Likes get_likes={this.props.get_likes} />
        </div>
        <form className="form-comments">
          <input
            id="comment-input"
            className="comment-input w3-container"
            placeholder="add comments"
            type="text"
          />
          <button
            type="submit"
            onClick={this.createComment}
            className="comment-button btn-sm w3-button w3-theme-l1 w3-margin-center"
            label="Comment"
          >
            Comment
          </button>
        </form>
        <div className="post-comments">
          <AllComments
            post_id={this.props.id}
            comments={this.props.comments}
            authToken={this.props.authToken}
            getPosts={this.props.getPosts}
          />
        </div>
      </div>
    );
  }
}
export default Post;
