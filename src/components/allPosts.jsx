import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from './singlePost'

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
     fetch('/api/v1/posts')
     .then(response => { return response.json()
     })
     .then(function(response) {
       self.setState( { posts: response.data } )
     }
    )
   }

   render() {
     console.log(this.state.posts)
     if (this.state.posts !== null) {
       return (
         <div className='post-list'>
            {this.state.posts.map(post => <Post id={post.id}
                                           message={post.message}
                                           username={post.username}
                                        created_at={post.created_at}/>
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
