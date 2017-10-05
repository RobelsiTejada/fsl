import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<ExampleApp />, document.getElementById('main'));
// ReactDOM.render(<SignIn />, document.getElementById('signin'));
// ReactDOM.render(<SignUp />, document.getElementById('signup'));
// ReactDOM.render(<SignOut />, document.getElementById('SignOut'));
// ReactDOM.render(<ChangePassword />, document.getElementById('changepassword'));
registerServiceWorker();
