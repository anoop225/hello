import React, { Component } from 'react';

import './App.css';
import Navigation from './Navigation.js';
import ReactShow from './Reactshow.js';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div class="container">
          <div class="card card-container">
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="content_img"/>
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
              <span id="reauth-email" class="reauth-email"></span>
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autoFocus />
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
              <div id="remember" class="checkbox">
                <label class="check">
                  <input type="checkbox" value="remember-me" />Remember Me
                </label>
              </div>
              <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={()=><ReactShow />}>Sign in</button>
            </form>
            <a href="" class="forgot-password">
              Forgot the password?
          </a>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default App;
