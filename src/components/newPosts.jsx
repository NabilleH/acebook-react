import React, { Component } from 'react';
import axios from 'axios'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.handleNewPost = this.handleNewPost.bind(this)
  }

  handleNewPost() {
    var self = this
    console.log(this.props.authToken)
    axios.post('/api/v1/posts',
      {post: {
        message: document.getElementById("textarea").value,
        wall_id: 1
      }},
      {headers: {
        'ACCEPT': 'application/json',
        'Authorisation': self.props.authToken
        }
      })
      .then(function(response) {
        self.props.getPosts()
      })
      .catch(function(error) {
        console.log(error)
      })
 }

  render() {
    if (this.props.authToken) {
      return(
        <div className="new-post-container">
          <form className="new-post-form"
                onSubmit={e=> { e.preventDefault() }}>
            <div className="form-group">
              <label htmlFor="textarea">
                Post Something Hun
              </label>
              <textarea id="textarea"
                name="textarea"
                cols="40"
                rows="5"
                className="form-control">
              </textarea>
            </div>
            <div className="form-group">
              <button name="submit"
               type="submit"
               className="btn btn-primary"
               onClick={this.handleNewPost}>
               Post Away
              </button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div>
        <h4> Sign in to post babes </h4>
        </div>
      )
    }
  }
}
export default NewPost
