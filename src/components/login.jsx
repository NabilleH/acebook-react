import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let self = this;
    axios
      .post("/api/v1/auths", {
        auth: {
          email: document.getElementById("email-input").value,
          password: document.getElementById("password-input").value
        }
      })
      .then(function(response) {
        self.props.updateAuthState(
          response.data.success.token,
          response.data.success.username
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.props.authToken) {
      return <Redirect to='/posts' />
    } else {
      return (
        <div>
          <h4>Log in</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-login"
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
              <input
                id="password-input"
                label="Password"
                className="password"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            
              <button
                type="submit"
                onClick={this.handleLogin}
                name="login"
                className="secondary"
                label="Log In"
              >
                Log In
              </button>

          </form>
          <Link to="/">
            <button name="signup" className="secondary" label="Sign Up">
              Sign up
            </button>
          </Link>
        </div>
      );
    }
  }
}
export default Login;
