import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./formStyle.css";

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
          <h3>Sign Up</h3>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
            className="form-signup"
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
                id="username-input"
                name="username"
                placeholder="username"
                type="text"
                className="form-control"
                required="required"
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
            <div class="form-group">
              <button
                name="signup"
                type="submit"
                className="signup-button btn btn-primary"
                onClick={this.handleSignUp}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default SignUp;
