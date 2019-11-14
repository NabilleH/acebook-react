// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Navbar from './components/navbar';


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

        <Login updateAuthToken={this.updateAuthToken}
               authToken={this.state.authToken} />
        
      </div>
    );
  }
}

export default App;
