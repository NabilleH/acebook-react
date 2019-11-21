import React, { Component } from "react";
import Likes from "./likes";
import "./singleComment.css";
import DeleteButton from "./deleteButton";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="text-left">
          <DeleteButton
            authToken={this.props.authToken}
            getPosts={this.props.getPosts}
            path={this.props.post_id + "/comments/" + this.props.id}
          />
        </div>
        <div className="comment-username">
          <strong> {this.props.username}</strong> says:
        </div>
        <div className="comment-message">{this.props.message}</div>
        <div className="rows">
          <div className="col">
            <div className="comment-created_at w3-opacity">
              <small>
                {" "}
                {new Date(
                  Date.parse(this.props.created_at)
                ).toDateString()}{" "}
              </small>
            </div>
          </div>
          <div className="col">
            <div className="comment-like">
              <Likes get_likes={this.props.get_likes} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Comment;
