import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React_Show</h1>
            <div class="opt" > <a class="optmenu" ><span>SignUp</span></a>
                  <a class="optmenu"><span>My Account</span></a>
                  </div>
          </header>
         
        </div>
      </React.Fragment>
    );
  }
}
export default Navigation;
