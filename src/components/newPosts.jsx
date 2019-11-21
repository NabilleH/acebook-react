import React, { Component } from 'react';
import axios from 'axios'
import './newPosts.css'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.handleNewPost = this.handleNewPost.bind(this)
  }

  handleNewPost() {
    var self = this
    axios.post('/api/v1/posts',
      {
        post: {
          message: document.getElementById("new-post-message").value,
          wall_id: 1
        }
      },
      {
        headers: {
          'ACCEPT': 'application/json',
          'Authorisation': self.props.authToken
        }
      })
      .then(function (response) {
        self.props.getPosts()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    if (this.props.authToken) {
      return (
        <div className="new-post-container form-container w3-card w3-round w3-white">
          <div className="w3-container w3-padding">
            <form className="new-post-form"
              onSubmit={e => { e.preventDefault() }}>
              <div className="form-group">
                <label className="w3-opacity" htmlFor="new-post-message">
                  Post Something Hun
              </label>
                <textarea id="new-post-message"
                  name="new-post-message"
                  cols="50"
                  rows="2"
                  className="new-post-message form-control w3-border w3-padding">
                </textarea>
              </div>
              <div className="form-group">
                <button name="submit-post"
                  type="submit"
                  className="submit-post w3-button w3-theme float-left"
                  onClick={this.handleNewPost}>
                  <i class="fa fa-pencil"></i>  Post Away</button>
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h4 className='login-message'> Log in to post babes </h4>
        </div>
      )
    }
  }
}
export default NewPost
