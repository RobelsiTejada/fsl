import React, { Component } from 'react';
import logo from './logo.svg';
import 'react-dom';
import 'react-modal';
import './App.css';
import './Modal';
import './ChangePassword';
import './SignIn';
import './SignUp';
import './SignOut';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fantasy Sports Leagues</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
