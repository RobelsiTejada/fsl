import React, { Component } from 'react';
import  'react-dom';
import 'react-modal';
import './App.css';

class SignUp extends React.Component {
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
        <label>
          Password Confirmation:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SignUp;
