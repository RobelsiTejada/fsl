import React, { Component } from 'react';
import 'react-dom';
import 'react-modal';
import './App.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <label>
          Password:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SignIn;

// ReactDOM.render(<SignIn />, document.getElementById('signin'));

//   render() {
//     return ([
// <div>
// <h1 class="banner">Fantasy Sports Leagues</h1>
//
// <form class="form-group" id="sign-in">
//   <h4>Login</h4>
//   <input type="text" class="form-control col-xs-1 box" name="credentials[email]" value="" placeholder="Email"></input>
//   <input type="password" class="form-control col-xs-1 box" name="credentials[password]" value="" placeholder="Password"></input>
//   <button type="submit" class="btn btn-outline-primary btn-lg">Login</button>
// </form>

// <form class="form-group" id="sign-up">
//   <h4>Sign Up</h4>
//   <label for="">Username</label>
//   <input type="text" name="credentials[email]" value="" placeholder="Email" class="form-control col-xs-1 box"></input></br>
//   <label for="">Password</label>
//   <input type="password" name="credentials[password]" value="" placeholder="Password" class="form-control col-xs-1 box"></input>
//   <input type="password" name="credentials[password_confirmation]" value="" placeholder="Confirm Password" class="form-control col-xs-1 box"></input></br>
//   <button type="submit" class="btn btn-outline-primary btn-lg signingup" name="button">Sign Up</button>
// </form>
//
// <form class="form-group" id="change-password">
//   <h4>Change Password:</h4>
//   <input type="password" name="passwords[old]" placeholder="Old Password" class="form-control col-xs-1 box"></input>
//   <input type="password" name="passwords[new]" placeholder="New Password" class="form-control col-xs-1 box"></input>
//   <button type="submit" class="btn btn-outline-primary btn-lg" name="submit">Update</button>
// </form>
//
//
// <p id="logedin"><h4>You have successfully signed up!</h4>
// </p>
//
// <p id="loginerrorp"><h4>The passwords you entered is not correct!</br>
//   Please make sure your password is correct and try again.</h4>
// </p>
//
// <p id="newuser2"><h4>You have successfully signed up!</br>
//   You can now click the Sign-in tab to login! :)</h4>
// </p>
//
// <p id="newusererrorp"><h4>The passwords enter do not match!</br>
//   Please make sure your passwords match and try again.</h4>
// </p>
//
// <nav class="navbar navbar-default navbar-fixed-bottom container">
//   <form class="col-xs-3 box" id="sign-out">
//   <button class="btn btn-outline-primary btn-lg checkoutbtn" id="checkout">Sign Out</button>
//   </form>
//   <form class="col-xs-6 box">
//   <button class="btn btn-outline-primary btn-lg signupsignin" type="button" id="authenticate">SignIn/SignUp</button>
//   </form>
//   <form class="col-xs-3 box">
//   <button class="btn btn-outline-primary btn-lg changepass" id="passwordChange" name="submit">Change Password</button>
//   </form>
// </nav>
// </div>
// ]);
// }}
//
// export default SignIn;
