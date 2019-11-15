import React, { Component } from 'react';


class Logout extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.updateAuthState(null,null)
  }

  render() {
    return (
      <a href='#' onClick={this.props.handleClick}>
      {this.props.label}
      </a>
    )
  }
}

export default Logout
