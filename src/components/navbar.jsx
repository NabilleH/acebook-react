import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logout from './logout';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  sessionButton() {
    if (this.props.authToken) {
      return <Logout updateAuthToken={this.props.updateAuthToken}/>
    } else {
      return null
    }
  }
  render() {
    return (
      <header>
        <nav className="navbar-container">
          <a className="homepage-link" href="/">Winkleface</a>
          <ul className="logout-button">
            {this.sessionButton()}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar
