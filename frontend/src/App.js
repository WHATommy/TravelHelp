import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authAction'

import { Provider } from 'react-redux';
import store from './store'

import Register from './Components/Auth/register'
import Login from './Components/Auth/login'
import Landing from './Components/layout/landing'
import Navbar from './Components/layout/navbar'
import CountryForum from './Components/Country/CountryForum';
import CreateForum from './Components/Country/CreateForum/createForum'
import myForum from './Components/Country/MyForum/myForum'

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken)
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expored token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout the user
    store.dispatch(logoutUser());
    window.location.href = '/';
  }
}

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div>
              <Route exact path="/CountryForum" component={CountryForum} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path='/createForum' component={CreateForum} />
              <Route exact path='/myForum' component={myForum} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }

}

//<Route exact path='/myForum' component={myForum} />


export default App