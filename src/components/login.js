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
         <form onSubmit={e => {e.preventDefault();}}>
           <div className='form-input'>
             <input label="Email"
                    class="email"
                   type="email"
                   name="email" />
             <input label="Password"
                    class="password"
                   type="password"
                     name="password" />
           </div>
           <button handleClick={this.handleLogin}
                   name='login'
                   class='login'
                   label='Log In'/>
         </form>
         <a href='/sign_up'>
           <button name='signup'
                   class='secondary'
                   label='Sign Up'/>
                   </a>
      </div>
    );
  }
}
export default Login;
