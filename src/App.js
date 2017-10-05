import React, { Component } from 'react';
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
          <h1 className="App-title">Fantasy Sports Leagues</h1>
        </header><br />
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Sign-Out" />
        </form>
      </div>
    );
  }
}

export default App;
