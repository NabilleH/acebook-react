import React, { Component } from "react";
import Likes from "./likes";
import "./singleComment.css";
import DeleteButton from "./deleteButton";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="comment-username">
          <small> {this.props.username} says: </small>
        </div>
        <div className="comment-message">{this.props.message}</div>
        <div className="rows">
          <div className="col">
            <div className="comment-created_at">
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
            <DeleteButton
              authToken={this.props.authToken}
              getPosts={this.props.getPosts}
              path={this.props.post_id + "/comments/" + this.props.id}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Comment;
