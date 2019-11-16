import React, { Component } from "react";
import Comment from "./singleComment";

class AllComments extends Component {
  render() {
    if (this.props.comments !== null) {
      return (
        <div className="comment-list">
          {this.props.comments.map(comment => (
            <Comment
              key={comment.id}
              id={comment.id}
              message={comment.message}
              username={comment.user.username}
              created_at={comment.created_at}
              get_likes={comment.get_likes}
              authToken={this.props.authToken}
              getPosts={this.props.getPosts}
              post_id={this.props.post_id}
            />
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default AllComments;
