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
    console.log('here')
    return (
      <header>
        <nav className="navbar-container">
          <Link to="/">
            Winkleface
          </Link>
          <ul className="logout-button">{this.sessionButton()}</ul>

          <ul>
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
