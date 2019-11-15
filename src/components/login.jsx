import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "./formStyle.css";

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
      return <Redirect to="/posts" />;
    } else {
      return (
        <div className="form-container">
          <h4>Log in</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-login"
          >
            <div class="form-group">
              <input
                id="email-input"
                name="email"
                placeholder="email"
                type="text"
                required="required"
                className="form-control"
              ></input>
            </div>
            <div class="form-group">
              <input
                id="password-input"
                name="password"
                placeholder="password"
                type="password"
                className="form-control"
                required="required"
              ></input>
            </div>
            <div className='row'>
              <div className='col'>
              <div class="form-group">
              <button
                name="login"
                type="submit"
                className="login-button btn btn-primary"
                onClick={this.handleLogin}>
                Login
              </button>
            </div>
              </div>
              <div className='col'>
                <Link to="/">
                  <button name="signup" className="btn btn-primary" label="Sign Up">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>

          </form>

        </div>
      );
    }
  }
}
export default Login;
