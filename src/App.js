import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signUp';
import Navbar from './components/navbar';
import AllPosts from './components/allPosts';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authToken: null,
      username: null
    }
    this.updateAuthToken = this.updateAuthToken.bind(this)
  }

  updateAuthToken(token, username) {
    console.log(token, username)
    this.setState({
      authToken: token,
      username: username,
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Navbar/>
        </header>

        <Route exact={true} path="/posts"
          render={
            (props) => <AllPosts/> }
               />

        <Route exact={true} path="/log_in"
          render={ (props)=> <Login updateAuthToken={this.updateAuthToken}
               authToken={this.state.authToken} /> }
               />

         <Route exact={true} path="/"
           render={ (props)=> <SignUp updateAuthToken={this.updateAuthToken}
                authToken={this.state.authToken}/> }
                />

      </div>
    );
  }
}

export default App;
