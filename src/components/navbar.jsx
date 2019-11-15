import React, { Component } from "react";
import Logout from "./logout";
import { Link } from "react-router-dom";

class Navbar extends Component {


  sessionButton() {
    if (this.props.authToken) {
      return <Logout updateAuthState={this.props.updateAuthState} label="Log Out Hun?" />;
    } else {
      return (
        <Link id="navbar-login-button" to="/log_in">
          Login
        </Link>
      );
    }
  }
  render() {
    return (
      <header>
        <nav className="navbar-container">
          <Link to="/">
            Winkleface
          </Link>
          <ul className="session-button">
            {this.sessionButton()}</ul>
          <ul className='home-button'>
            <Link to="/posts">
              Home
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
