import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e) {
    e.preventDefault()
    let self = this
    axios.post('/api/v1/auths',{
        auth: {
          email: document.getElementById('email-input').value,
          password: document.getElementById('password-input').value
        }
    })
    .then(function(response) {
      self.props.updateAuthToken(response.data.success.token, response.data.success.username)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
         <h4>Log in</h4>
         <form onSubmit={e => {e.preventDefault();}} className="form-login">
           <div className='form-input'>
             <input  id="email-input"
                    label="Email"
                    className="email"
                   type="email"
                   name="email" placeholder="email" />
             <input id="password-input"
                    label="Password"
                    className="password"
                   type="password"
                     name="password" placeholder="password" />
           </div>
           <button type="submit" onClick={this.handleLogin}
                   name='login'
                   className='login'
                   label='Log In'>Log in</button>
         </form>
         <a href='/sign_up'>
           <button name='signup'
                   className='secondary'
                   label='Sign Up'>Sign up</button>
         </a>
      </div>
    );
  }
}
export default Login;
