import React, { Component } from 'react';
import Post from './singlePost'
import axios from 'axios'

class AllPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: null
    }
    this.getPosts = this.getPosts.bind(this)
  }

   componentDidMount() {
     this.getPosts()
   }

   getPosts() {
     var self = this
    axios({
      url: '/api/v1/posts',
      mode: 'no-cors'
      })
    .then(function(response) {
      self.setState({posts: response.data})
    })
    .catch(function(error) {
      console.log(error)
    })
  }

   render() {
     // console.log("this state", this.state.posts)
     if (this.state.posts !== null) {
       return (
         <div className='post-list'>
            {this.state.posts.map(post => <Post key={post.id}
                                           message={post.message}
                                           username={post.user.username}
                                        created_at={post.created_at}
                                        comments={post.comments}
                                        get_likes={post.get_likes}
                                        getPosts={this.getPosts}
                                        id={post.id}
                                        authToken={this.props.authToken}/>
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
export default AllPosts
