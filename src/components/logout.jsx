import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.updateAuthState(null, null);
  }

  render() {
    return (
      <a
        href="# "
        className="nav-item nav-link hover"
        onClick={this.props.handleLogout}
      >
        {this.props.label}
      </a>
    );
  }
}

export default Logout;
