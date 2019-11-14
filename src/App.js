import React, { Component } from 'react';
import './App.css';
import Login from './components/login';

import AllPosts from './components/allPosts';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <Login/>
        <AllPosts/>
      </div>
    );
  }
}

export default App;
