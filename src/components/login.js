import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
  constructor(props) {
    super(props)
      this.state = {
        email: '',
        password: ''
      }
  }
  render() {
    return (
      <div>
         <h4>Log in</h4>
         <form onSubmit={e => {e.preventDefault();}} className="form-login">
           <div className='form-input'>
             <input label="Email"
                    className="email"
                   type="email"
                   name="email" placeholder="email" />
             <input label="Password"
                    className="password"
                   type="password"
                     name="password" placeholder="password" />
           </div>
           <button type="submit" handleclick={this.handleLogin}
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
