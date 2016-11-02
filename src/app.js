/* jshint esversion: 6 */
var ReactStormpath = require('react-stormpath').default;
var AuthenticatedRoute = require('react-stormpath').AuthenticatedRoute;
var LoginLink = require('react-stormpath').LoginLink;

import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { LoginLink } from 'react-stormpath';

import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { IndexRoute, Route, browserHistory } from 'react-router';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';

import ListForm from './components/ListForm';
import index from './pages/index';

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
        <Route path='/:user/lists' component={Lists} />
      </AuthenticatedRoute>
      <Route path='/lists' component={Lists} >
        <Route path="/lists/:list" component={List} />
      </Route>
    </HomeRoute>
  </Router>,
  document.getElementById('app')
);

ReactStormpath.init();
ReactDOM.render(
  <ListForm />,
  document.getElementById('app')
);
