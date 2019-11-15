import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(e) {
    e.preventDefault();
    let self = this;
    axios
      .post("/api/v1/users", {
        user: {
          username: document.getElementById("username-input").value,
          email: document.getElementById("email-input").value,
          password: document.getElementById("password-input").value
        }
    })
    .then(function(response) {
      axios.post("/api/v1/auths", {
        auth: {
          email: document.getElementById("email-input").value,
          password: document.getElementById("password-input").value
        }
      }).then(function(response) {
        self.props.updateAuthState(response.data.success.token, response.data.success.username)
      })
      .catch(function(error) {
        console.log(error)
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    if (this.props.authToken) {
      return <Redirect to='/posts' />
    } else {
      return (
        <div>
          <h3>Sign Up</h3>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-signup"
          >
            <div className="form-input">
              <input
                id="email-input"
                label="Email"
                className="email"
                type="email"
                name="email"
                placeholder="email"
              />
              <br></br>
              <input
                id="username-input"
                label="Username"
                className="username"
                type="text"
                name="username"
                placeholder="username"
              />
              <br></br>
              <input
                id="password-input"
                label="Password"
                className="password"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
          </form>
              <button
                type="submit"
                onClick={this.handleSignUp}
                name="signup"
                className="signup-button"
                label="Sign Up"
              >
                Sign Up
              </button>
        </div>
      );
    }
  }
}

export default SignUp;
