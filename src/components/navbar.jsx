import React, { Component } from "react";
import Logout from "./logout";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  sessionButton() {
    if (this.props.authToken) {
      return (
        <Logout className='session-button'
          updateAuthState={this.props.updateAuthState}
          label="Log Out Hun?"
        />
      );
    } else {
      return (
        <Link
          id="navbar-login-button"
          className="session-button nav-item nav-link hover"
          to="/log_in"
        >
          Login
          <span className="sr-only">(current)</span>
        </Link>
      );
    }
  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Acebook
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <Link to="/posts" className="posts-button nav-item nav-link hover">
                Posts
              </Link>
              {this.sessionButton()}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
