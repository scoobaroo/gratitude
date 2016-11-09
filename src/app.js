/* jshint esversion: 6 */
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { LoginLink } from 'react-stormpath'

import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath'
import { Link, IndexRoute, Route, browserHistory } from 'react-router'
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages'

import Index from './components/Index'
import index from './pages/index'

console.log("app.js loaded");

ReactStormpath.init();
ReactDOM.render(
  <Router history={browserHistory}>
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/register' component={RegistrationPage} />
      <AuthenticatedRoute>
        <HomeRoute path='/profile' component={ProfilePage} />
        <Route path='/:user/lists' component={List} />
      </AuthenticatedRoute>
      <Route path='/lists' component={List} >
        <Route path="/lists/:list" component={List} />
      </Route>
    </HomeRoute>
  </Router>,
  document.getElementById('app')
);
