// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Post from './components/singlePost';


class App extends Component {
  constructor(props){
    super(props);
    }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <Login/>
        <Post/>
      </div>
    );
  }
}

export default App;
