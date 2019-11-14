import React, { Component } from 'react';
import axios from 'axios';
import Comment from './singleComment'

class AllComments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: null
    }
    this.getComments = this.getComments.bind(this)
  }

  componentDidMount() {
    this.getComments()
  }

  getComments() {
    var self = this
   axios({
     url: '/api/v1/posts/:id/comments',
     mode: 'no-cors'
     })
   .then(function(response) {
     self.setState({comments: response.data})
   })
   .catch(function(error) {
     console.log(error)
   })
  }

  render() {
    if (this.state.comments !== null) {
      return (
        <div className='post-list'>
           {this.state.comments.map(comment => <Comment key={comment.id}
                                          message={comment.message}
                                          username={comment.user.username}
                                       created_at={comment.created_at}/>
                                         )}
         </div>
      )
    } else {
      return (
      <div></div>
    )
    }
  }
  }
  export default AllComments
