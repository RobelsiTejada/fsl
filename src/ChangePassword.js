import React, { Component } from 'react';
import logo from './logo.svg';
import ExampleApp from './Modal'
import 'react-dom';
import 'react-modal';
import './App.css';

class ChangePassword extends Component {
  // class NameForm extends React.Component {
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
          Old Password:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <label>
          New Password:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default ChangePassword;

// ReactDOM.render(<ChangePassword />, document.getElementById('changepassword'));

//   render() {
//     return ([
// <div>
// <h1 class="banner">Fantasy Sports Leagues</h1>
//
// <form class="form-group" id="change-password">
//   <h4>Change Password:</h4>
//   <input type="password" name="passwords[old]" placeholder="Old Password" class="form-control col-xs-1 box"></input>
//   <input type="password" name="passwords[new]" placeholder="New Password" class="form-control col-xs-1 box"></input>
//   <button type="submit" class="btn btn-outline-primary btn-lg" name="submit">Update</button>
// </form>
// </div>
// ]);
// }}
//
// export default ChangePassword;
