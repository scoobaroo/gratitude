/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esversion: 6 */
	var ReactStormpath = __webpack_require__(1).default;
	var AuthenticatedRoute = __webpack_require__(1).AuthenticatedRoute;
	var LoginLink = __webpack_require__(1).LoginLink;

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
	ReactDOM.render(React.createElement(
	  Router,
	  { history: browserHistory },
	  React.createElement(
	    HomeRoute,
	    { path: '/', component: MasterPage },
	    React.createElement(IndexRoute, { component: IndexPage }),
	    React.createElement(LoginRoute, { path: '/login', component: LoginPage }),
	    React.createElement(Route, { path: '/register', component: RegistrationPage }),
	    React.createElement(
	      AuthenticatedRoute,
	      null,
	      React.createElement(HomeRoute, { path: '/profile', component: ProfilePage }),
	      React.createElement(Route, { path: '/:user/lists', component: Lists })
	    ),
	    React.createElement(
	      Route,
	      { path: '/lists', component: Lists },
	      React.createElement(Route, { path: '/lists/:list', component: List })
	    )
	  )
	), document.getElementById('app'));

	ReactStormpath.init();
	ReactDOM.render(React.createElement(ListForm, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.UserComponent = exports.UserField = exports.SocialLoginButton = exports.SocialLoginLink = exports.VerifyEmailView = exports.ChangePasswordForm = exports.ResetPasswordForm = exports.RegistrationForm = exports.UserProfileForm = exports.LoginForm = exports.LogoutLink = exports.LoginLink = exports.NotAuthenticated = exports.Authenticated = exports.AuthenticatedRoute = exports.LogoutRoute = exports.LoginRoute = exports.HomeRoute = exports.constants = exports.actions = exports.Router = exports.context = undefined;
		exports.init = init;

		var _app = __webpack_require__(1);

		var _app2 = _interopRequireDefault(_app);

		var _context2 = __webpack_require__(22);

		var _context3 = _interopRequireDefault(_context2);

		var _Router2 = __webpack_require__(31);

		var _Router3 = _interopRequireDefault(_Router2);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		var _UserConstants = __webpack_require__(16);

		var _UserConstants2 = _interopRequireDefault(_UserConstants);

		var _HomeRoute2 = __webpack_require__(95);

		var _HomeRoute3 = _interopRequireDefault(_HomeRoute2);

		var _LoginRoute2 = __webpack_require__(96);

		var _LoginRoute3 = _interopRequireDefault(_LoginRoute2);

		var _LogoutRoute2 = __webpack_require__(97);

		var _LogoutRoute3 = _interopRequireDefault(_LogoutRoute2);

		var _AuthenticatedRoute2 = __webpack_require__(98);

		var _AuthenticatedRoute3 = _interopRequireDefault(_AuthenticatedRoute2);

		var _Authenticated2 = __webpack_require__(99);

		var _Authenticated3 = _interopRequireDefault(_Authenticated2);

		var _NotAuthenticated2 = __webpack_require__(100);

		var _NotAuthenticated3 = _interopRequireDefault(_NotAuthenticated2);

		var _LoginLink2 = __webpack_require__(101);

		var _LoginLink3 = _interopRequireDefault(_LoginLink2);

		var _LogoutLink2 = __webpack_require__(102);

		var _LogoutLink3 = _interopRequireDefault(_LogoutLink2);

		var _LoginForm2 = __webpack_require__(103);

		var _LoginForm3 = _interopRequireDefault(_LoginForm2);

		var _UserProfileForm2 = __webpack_require__(107);

		var _UserProfileForm3 = _interopRequireDefault(_UserProfileForm2);

		var _RegistrationForm2 = __webpack_require__(108);

		var _RegistrationForm3 = _interopRequireDefault(_RegistrationForm2);

		var _ResetPasswordForm2 = __webpack_require__(109);

		var _ResetPasswordForm3 = _interopRequireDefault(_ResetPasswordForm2);

		var _ChangePasswordForm2 = __webpack_require__(110);

		var _ChangePasswordForm3 = _interopRequireDefault(_ChangePasswordForm2);

		var _VerifyEmailView2 = __webpack_require__(111);

		var _VerifyEmailView3 = _interopRequireDefault(_VerifyEmailView2);

		var _SocialLoginLink2 = __webpack_require__(106);

		var _SocialLoginLink3 = _interopRequireDefault(_SocialLoginLink2);

		var _SocialLoginButton2 = __webpack_require__(105);

		var _SocialLoginButton3 = _interopRequireDefault(_SocialLoginButton2);

		var _UserField2 = __webpack_require__(112);

		var _UserField3 = _interopRequireDefault(_UserField2);

		var _UserComponent2 = __webpack_require__(113);

		var _UserComponent3 = _interopRequireDefault(_UserComponent2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.context = _context3.default;
		exports.Router = _Router3.default;
		exports.actions = _UserActions2.default;
		exports.constants = _UserConstants2.default;
		exports.HomeRoute = _HomeRoute3.default;
		exports.LoginRoute = _LoginRoute3.default;
		exports.LogoutRoute = _LogoutRoute3.default;
		exports.AuthenticatedRoute = _AuthenticatedRoute3.default;
		exports.Authenticated = _Authenticated3.default;
		exports.NotAuthenticated = _NotAuthenticated3.default;
		exports.LoginLink = _LoginLink3.default;
		exports.LogoutLink = _LogoutLink3.default;
		exports.LoginForm = _LoginForm3.default;
		exports.UserProfileForm = _UserProfileForm3.default;
		exports.RegistrationForm = _RegistrationForm3.default;
		exports.ResetPasswordForm = _ResetPasswordForm3.default;
		exports.ChangePasswordForm = _ChangePasswordForm3.default;
		exports.VerifyEmailView = _VerifyEmailView3.default;
		exports.SocialLoginLink = _SocialLoginLink3.default;
		exports.SocialLoginButton = _SocialLoginButton3.default;
		exports.UserField = _UserField3.default;
		exports.UserComponent = _UserComponent3.default;

		// When not using ES6, enable people to use ReactStormpath.init()
		// instead of ReactStormpath.default.init().

		function init() {
		  _app2.default.init.apply(_app2.default, arguments);
		};

		exports.default = _app2.default;

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _events = __webpack_require__(2);

		var _services = __webpack_require__(3);

		var _constants = __webpack_require__(15);

		var _stores = __webpack_require__(18);

		var _dispatchers = __webpack_require__(24);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var App = function (_EventEmitter) {
		  _inherits(App, _EventEmitter);

		  function App() {
		    _classCallCheck(this, App);

		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

		    _this.initialized = false;
		    return _this;
		  }

		  _createClass(App, [{
		    key: 'isInitialized',
		    value: function isInitialized() {
		      return this.initialized;
		    }
		  }, {
		    key: 'init',
		    value: function init(options) {
		      options = options || {};

		      if (this.isInitialized()) {
		        throw new Error('React Stormpath already initialized.');
		      }

		      this.initialized = true;

		      var sessionStore = new _stores.SessionStore();
		      var userService = new _services.UserService(options.endpoints);
		      var userStore = new _stores.UserStore(userService, sessionStore);

		      _context2.default.setSessionStore(sessionStore);
		      _context2.default.setUserStore(userStore);

		      // If there's no specified dispatcher, then default to flux.
		      var dispatcher = options.dispatcher || { type: 'flux' };

		      var userReducer = function userReducer(payload) {
		        switch (payload.type) {
		          case _constants.UserConstants.USER_LOGIN:
		            userStore.login(payload.options, payload.callback);
		            break;
		          case _constants.UserConstants.USER_LOGOUT:
		            userStore.logout(payload.callback);
		            break;
		          case _constants.UserConstants.USER_REGISTER:
		            userStore.register(payload.options, payload.callback);
		            break;
		          case _constants.UserConstants.USER_FORGOT_PASSWORD:
		            userStore.forgotPassword(payload.options, payload.callback);
		            break;
		          case _constants.UserConstants.USER_CHANGE_PASSWORD:
		            userStore.changePassword(payload.options, payload.callback);
		            break;
		          case _constants.UserConstants.USER_UPDATE_PROFILE:
		            userStore.updateProfile(payload.options.data, payload.callback);
		            break;
		          case _constants.UserConstants.USER_VERIFY_EMAIL:
		            userStore.verifyEmail(payload.options.spToken, payload.callback);
		            break;
		        }
		        return true;
		      };

		      switch (dispatcher.type) {
		        case 'flux':
		          dispatcher = new _dispatchers.FluxDispatcher(userReducer);
		          break;
		        case 'redux':
		          dispatcher = new _dispatchers.ReduxDispatcher(userReducer, dispatcher.store);
		          break;
		        default:
		          throw new Error('Stormpath SDK: Invalid dispatcher type ' + dispatcher.type);
		      }

		      _context2.default.setDispatcher(dispatcher);
		    }
		  }]);

		  return App;
		}(_events.EventEmitter);

		exports.default = new App();

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		function EventEmitter() {
		  this._events = this._events || {};
		  this._maxListeners = this._maxListeners || undefined;
		}
		module.exports = EventEmitter;

		// Backwards-compat with node 0.10.x
		EventEmitter.EventEmitter = EventEmitter;

		EventEmitter.prototype._events = undefined;
		EventEmitter.prototype._maxListeners = undefined;

		// By default EventEmitters will print a warning if more than 10 listeners are
		// added to it. This is a useful default which helps finding memory leaks.
		EventEmitter.defaultMaxListeners = 10;

		// Obviously not all Emitters should be limited to 10. This function allows
		// that to be increased. Set to zero for unlimited.
		EventEmitter.prototype.setMaxListeners = function(n) {
		  if (!isNumber(n) || n < 0 || isNaN(n))
		    throw TypeError('n must be a positive number');
		  this._maxListeners = n;
		  return this;
		};

		EventEmitter.prototype.emit = function(type) {
		  var er, handler, len, args, i, listeners;

		  if (!this._events)
		    this._events = {};

		  // If there is no 'error' event listener then throw.
		  if (type === 'error') {
		    if (!this._events.error ||
		        (isObject(this._events.error) && !this._events.error.length)) {
		      er = arguments[1];
		      if (er instanceof Error) {
		        throw er; // Unhandled 'error' event
		      } else {
		        // At least give some kind of context to the user
		        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
		        err.context = er;
		        throw err;
		      }
		    }
		  }

		  handler = this._events[type];

		  if (isUndefined(handler))
		    return false;

		  if (isFunction(handler)) {
		    switch (arguments.length) {
		      // fast cases
		      case 1:
		        handler.call(this);
		        break;
		      case 2:
		        handler.call(this, arguments[1]);
		        break;
		      case 3:
		        handler.call(this, arguments[1], arguments[2]);
		        break;
		      // slower
		      default:
		        args = Array.prototype.slice.call(arguments, 1);
		        handler.apply(this, args);
		    }
		  } else if (isObject(handler)) {
		    args = Array.prototype.slice.call(arguments, 1);
		    listeners = handler.slice();
		    len = listeners.length;
		    for (i = 0; i < len; i++)
		      listeners[i].apply(this, args);
		  }

		  return true;
		};

		EventEmitter.prototype.addListener = function(type, listener) {
		  var m;

		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');

		  if (!this._events)
		    this._events = {};

		  // To avoid recursion in the case that type === "newListener"! Before
		  // adding it to the listeners, first emit "newListener".
		  if (this._events.newListener)
		    this.emit('newListener', type,
		              isFunction(listener.listener) ?
		              listener.listener : listener);

		  if (!this._events[type])
		    // Optimize the case of one listener. Don't need the extra array object.
		    this._events[type] = listener;
		  else if (isObject(this._events[type]))
		    // If we've already got an array, just append.
		    this._events[type].push(listener);
		  else
		    // Adding the second element, need to change to array.
		    this._events[type] = [this._events[type], listener];

		  // Check for listener leak
		  if (isObject(this._events[type]) && !this._events[type].warned) {
		    if (!isUndefined(this._maxListeners)) {
		      m = this._maxListeners;
		    } else {
		      m = EventEmitter.defaultMaxListeners;
		    }

		    if (m && m > 0 && this._events[type].length > m) {
		      this._events[type].warned = true;
		      console.error('(node) warning: possible EventEmitter memory ' +
		                    'leak detected. %d listeners added. ' +
		                    'Use emitter.setMaxListeners() to increase limit.',
		                    this._events[type].length);
		      if (typeof console.trace === 'function') {
		        // not supported in IE 10
		        console.trace();
		      }
		    }
		  }

		  return this;
		};

		EventEmitter.prototype.on = EventEmitter.prototype.addListener;

		EventEmitter.prototype.once = function(type, listener) {
		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');

		  var fired = false;

		  function g() {
		    this.removeListener(type, g);

		    if (!fired) {
		      fired = true;
		      listener.apply(this, arguments);
		    }
		  }

		  g.listener = listener;
		  this.on(type, g);

		  return this;
		};

		// emits a 'removeListener' event iff the listener was removed
		EventEmitter.prototype.removeListener = function(type, listener) {
		  var list, position, length, i;

		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');

		  if (!this._events || !this._events[type])
		    return this;

		  list = this._events[type];
		  length = list.length;
		  position = -1;

		  if (list === listener ||
		      (isFunction(list.listener) && list.listener === listener)) {
		    delete this._events[type];
		    if (this._events.removeListener)
		      this.emit('removeListener', type, listener);

		  } else if (isObject(list)) {
		    for (i = length; i-- > 0;) {
		      if (list[i] === listener ||
		          (list[i].listener && list[i].listener === listener)) {
		        position = i;
		        break;
		      }
		    }

		    if (position < 0)
		      return this;

		    if (list.length === 1) {
		      list.length = 0;
		      delete this._events[type];
		    } else {
		      list.splice(position, 1);
		    }

		    if (this._events.removeListener)
		      this.emit('removeListener', type, listener);
		  }

		  return this;
		};

		EventEmitter.prototype.removeAllListeners = function(type) {
		  var key, listeners;

		  if (!this._events)
		    return this;

		  // not listening for removeListener, no need to emit
		  if (!this._events.removeListener) {
		    if (arguments.length === 0)
		      this._events = {};
		    else if (this._events[type])
		      delete this._events[type];
		    return this;
		  }

		  // emit removeListener for all listeners on all events
		  if (arguments.length === 0) {
		    for (key in this._events) {
		      if (key === 'removeListener') continue;
		      this.removeAllListeners(key);
		    }
		    this.removeAllListeners('removeListener');
		    this._events = {};
		    return this;
		  }

		  listeners = this._events[type];

		  if (isFunction(listeners)) {
		    this.removeListener(type, listeners);
		  } else if (listeners) {
		    // LIFO order
		    while (listeners.length)
		      this.removeListener(type, listeners[listeners.length - 1]);
		  }
		  delete this._events[type];

		  return this;
		};

		EventEmitter.prototype.listeners = function(type) {
		  var ret;
		  if (!this._events || !this._events[type])
		    ret = [];
		  else if (isFunction(this._events[type]))
		    ret = [this._events[type]];
		  else
		    ret = this._events[type].slice();
		  return ret;
		};

		EventEmitter.prototype.listenerCount = function(type) {
		  if (this._events) {
		    var evlistener = this._events[type];

		    if (isFunction(evlistener))
		      return 1;
		    else if (evlistener)
		      return evlistener.length;
		  }
		  return 0;
		};

		EventEmitter.listenerCount = function(emitter, type) {
		  return emitter.listenerCount(type);
		};

		function isFunction(arg) {
		  return typeof arg === 'function';
		}

		function isNumber(arg) {
		  return typeof arg === 'number';
		}

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}

		function isUndefined(arg) {
		  return arg === void 0;
		}


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.RequestPool = exports.BaseService = exports.UserService = undefined;

		var _UserService2 = __webpack_require__(4);

		var _UserService3 = _interopRequireDefault(_UserService2);

		var _BaseService2 = __webpack_require__(13);

		var _BaseService3 = _interopRequireDefault(_BaseService2);

		var _RequestPool2 = __webpack_require__(14);

		var _RequestPool3 = _interopRequireDefault(_RequestPool2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.UserService = _UserService3.default;
		exports.BaseService = _BaseService3.default;
		exports.RequestPool = _RequestPool3.default;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _BaseService2 = __webpack_require__(13);

		var _BaseService3 = _interopRequireDefault(_BaseService2);

		var _RequestPool = __webpack_require__(14);

		var _RequestPool2 = _interopRequireDefault(_RequestPool);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var UserService = function (_BaseService) {
		  _inherits(UserService, _BaseService);

		  function UserService(endpoints) {
		    _classCallCheck(this, UserService);

		    var defaultEndpoints = {
		      me: '/me',
		      login: '/login',
		      register: '/register',
		      verifyEmail: '/verify',
		      forgotPassword: '/forgot',
		      changePassword: '/change',
		      logout: '/logout'
		    };

		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserService).call(this, _utils2.default.mergeObjects(defaultEndpoints, endpoints)));

		    _this.meRequestPool = new _RequestPool2.default();
		    return _this;
		  }

		  _createClass(UserService, [{
		    key: '_unwrapAccountResult',
		    value: function _unwrapAccountResult(callback) {
		      return function (err, result) {
		        if (err) {
		          return callback(err);
		        }

		        callback(null, result.account || result || {});
		      };
		    }
		  }, {
		    key: 'me',
		    value: function me(callback) {
		      var _this2 = this;

		      this.meRequestPool.request(function (resultCallback) {
		        _this2._makeRequest('get', _this2.endpoints.me, null, _this2._unwrapAccountResult(resultCallback));
		      }, callback);
		    }
		  }, {
		    key: 'updateProfile',
		    value: function updateProfile(data, callback) {
		      this._makeRequest('post', this.endpoints.me, data, callback);
		    }
		  }, {
		    key: 'getLoginViewData',
		    value: function getLoginViewData(callback) {
		      this._makeRequest('get', this.endpoints.login, null, callback);
		    }
		  }, {
		    key: 'login',
		    value: function login(options, callback) {
		      this._makeRequest('post', this.endpoints.login, options, this._unwrapAccountResult(callback));
		    }
		  }, {
		    key: 'register',
		    value: function register(options, callback) {
		      this._makeRequest('post', this.endpoints.register, options, this._unwrapAccountResult(callback));
		    }
		  }, {
		    key: 'getRegisterViewData',
		    value: function getRegisterViewData(callback) {
		      this._makeRequest('get', this.endpoints.register, null, callback);
		    }
		  }, {
		    key: 'verifyEmail',
		    value: function verifyEmail(spToken, callback) {
		      this._makeRequest('get', this.endpoints.verifyEmail + '?sptoken=' + encodeURIComponent(spToken), null, callback);
		    }
		  }, {
		    key: 'forgotPassword',
		    value: function forgotPassword(options, callback) {
		      this._makeRequest('post', this.endpoints.forgotPassword, options, callback);
		    }
		  }, {
		    key: 'changePassword',
		    value: function changePassword(options, callback) {
		      this._makeRequest('post', this.endpoints.changePassword, options, callback);
		    }
		  }, {
		    key: 'logout',
		    value: function logout(callback) {
		      this._makeRequest('post', this.endpoints.logout, null, callback);
		    }
		  }]);

		  return UserService;
		}(_BaseService3.default);

		exports.default = UserService;

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _url = __webpack_require__(6);

		var _url2 = _interopRequireDefault(_url);

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Utils = function () {
		  function Utils() {
		    _classCallCheck(this, Utils);

		    this.nopElement = _react2.default.createElement('span', null);
		  }

		  _createClass(Utils, [{
		    key: 'uuid',
		    value: function uuid() {
		      var s4 = function s4() {
		        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		      };

		      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		    }
		  }, {
		    key: 'takeProp',
		    value: function takeProp(source) {
		      for (var _len = arguments.length, fields = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        fields[_key - 1] = arguments[_key];
		      }

		      for (var i = 0; i < fields.length; i++) {
		        var fieldName = fields[i];
		        if (fieldName in source) {
		          return source[fieldName];
		        }
		      }

		      return undefined;
		    }
		  }, {
		    key: 'excludeProps',
		    value: function excludeProps(exclude, source) {
		      var result = {};

		      if (source) {
		        for (var key in source) {
		          if (exclude.indexOf(key) === -1) {
		            result[key] = source[key];
		          }
		        }
		      }

		      return result;
		    }
		  }, {
		    key: 'translateProviderIdToName',
		    value: function translateProviderIdToName(providerId) {
		      var providerNames = {
		        github: 'GitHub',
		        linkedin: 'LinkedIn'
		      };

		      var newName = providerNames[providerId];

		      if (!newName) {
		        newName = providerId[0].toUpperCase() + providerId.slice(1);
		      }

		      return newName;
		    }
		  }, {
		    key: 'encodeQueryString',
		    value: function encodeQueryString(query) {
		      var result = '';

		      for (var key in query) {
		        if (result !== '') {
		          result += '&';
		        }
		        result += key + '=' + encodeURIComponent(query[key]);
		      }

		      return result;
		    }
		  }, {
		    key: 'deepForEach',
		    value: function deepForEach(node, handler) {
		      handler(node);
		      if (node.props.children) {
		        this.forEachChild(node.props.children, handler, node);
		      }
		    }
		  }, {
		    key: 'forEachChild',
		    value: function forEachChild(children, handler, parent) {
		      var _this = this;

		      _react2.default.Children.forEach(children, function (child) {
		        handler(child, parent);

		        if (child.props && child.props.children) {
		          _this.forEachChild(child.props.children, handler, child);
		        }
		      });
		    }
		  }, {
		    key: 'buildElementTree',
		    value: function buildElementTree(element, optionsFactory, elementFactory, parent) {
		      var _this2 = this;

		      var newChildren = undefined;

		      var newElement = elementFactory && elementFactory(element, parent) || element;
		      var newOptions = optionsFactory && optionsFactory(element, parent) || {};

		      if (newElement !== this.nopElement && newElement.props && newElement.props.children) {
		        newChildren = _react2.default.Children.map(newElement.props.children, function (childElement) {
		          if (!_react2.default.isValidElement(childElement)) {
		            return elementFactory(childElement, parent);
		          }
		          return _this2.buildElementTree(childElement, optionsFactory, elementFactory, newElement);
		        });
		      }

		      return _react2.default.cloneElement(newElement, newOptions, newChildren);
		    }
		  }, {
		    key: 'getFormFieldMap',
		    value: function getFormFieldMap(root, handler) {
		      var fields = {};

		      var tryMapField = function tryMapField(field, name, defaultValue) {
		        if (field.props.ignore) {
		          return;
		        }

		        if (field.props.fieldName) {
		          name = elements.props.fieldName;
		        }

		        if (!('name' in fields)) {
		          fields[name] = {
		            element: field,
		            defaultValue: defaultValue
		          };
		        }
		      };

		      this.forEachChild(root, function (child) {
		        if (!child.props) {
		          return;
		        }

		        handler(child, tryMapField.bind(null, child));
		      });

		      var inverseMap = {};
		      var defaultValues = {};

		      for (var key in fields) {
		        var field = fields[key];
		        var element = field.element;

		        if (!(element.type in inverseMap)) {
		          inverseMap[element.type] = {};
		        }

		        defaultValues[key] = field.defaultValue !== undefined ? field.defaultValue : element.props.value || '';

		        inverseMap[element.type][element.props.name] = {
		          fieldName: key,
		          field: element
		        };
		      }

		      return {
		        defaultValues: defaultValues,
		        inverse: inverseMap
		      };
		    }
		  }, {
		    key: 'getFieldValue',
		    value: function getFieldValue(source, name) {
		      var cursor = source;
		      var segments = name.split('.');

		      for (var i = 0; i < segments.length; i++) {
		        var key = segments[i];

		        if (!(key in cursor)) {
		          return undefined;
		        }

		        cursor = cursor[key];
		      }

		      return cursor;
		    }
		  }, {
		    key: 'setFieldValue',
		    value: function setFieldValue(source, name, value, force) {
		      var ref = source;
		      var segments = name.split('.');

		      for (var i = 0; i < segments.length; i++) {
		        var key = segments[i];

		        if (i === segments.length - 1) {
		          if (!force && key in ref) {
		            return;
		          }

		          ref[key] = value;

		          return;
		        }

		        if (!(key in ref)) {
		          ref[key] = {};
		        }

		        ref = ref[key];
		      }
		    }
		  }, {
		    key: 'makeForm',
		    value: function makeForm(source, fieldMapFn, spIfFn, spBindFn) {
		      var _this3 = this;

		      var root = _react2.default.cloneElement(_react2.default.createElement('div', null), {}, source.props.children);
		      var fieldMap = this.getFormFieldMap(root, fieldMapFn);

		      source.state.fields = source.state.fields || {};

		      for (var key in fieldMap.defaultValues) {
		        this.setFieldValue(source.state.fields, key, fieldMap.defaultValues[key]);
		      }

		      var elementFactory = function elementFactory(element, parent) {
		        if (element.props) {
		          var spIf = _this3.takeProp(element.props, 'spIf', 'data-spIf');

		          if (spIf) {
		            var test = null;
		            var inverted = false;

		            if (spIf[0] === '!') {
		              inverted = true;
		              spIf = spIf.substr(1);
		            }

		            test = spIfFn(spIf, element);

		            if (test !== null) {
		              if (inverted) {
		                test = !test;
		              }

		              if (!test) {
		                return _this3.nopElement;
		              }
		            }
		          }

		          var spBind = _this3.takeProp(element.props, 'spBind', 'data-spBind');

		          if (spBind) {
		            var newElement = spBindFn(spBind, element);
		            if (newElement !== false || newElement) {
		              element = newElement;
		            }
		          }
		        }
		        return element;
		      };

		      var optionsFactory = function optionsFactory(element, parent) {
		        var options = {};

		        if (element.props) {
		          var elementType = element.type;
		          var elementAttributeName = element.props.name;

		          if (elementType in fieldMap.inverse && elementAttributeName in fieldMap.inverse[elementType]) {
		            var mappedField = fieldMap.inverse[elementType][elementAttributeName];

		            if (elementAttributeName in fieldMap.defaultValues) {
		              options.defaultValue = fieldMap.defaultValues[elementAttributeName];
		            }

		            var originalOnChange = element.props.onChange;
		            options.onChange = function (e) {
		              for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		                args[_key2 - 1] = arguments[_key2];
		              }

		              options.disabled = source.state.isFormProcessing;
		              _this3.setFieldValue(source.state.fields, mappedField.fieldName, e.target.value, true);

		              // Honor the original onChange event.
		              if (originalOnChange) {
		                originalOnChange.apply(undefined, [e].concat(args));
		              }
		            };
		          }

		          var elementAttributeType = element.props.type;

		          if ((elementType === 'input' || elementType === 'button') && elementAttributeType === 'submit') {
		            options.disabled = source.state.isFormProcessing;
		          }
		        }

		        return options;
		      };

		      return this.buildElementTree(root, optionsFactory, elementFactory);
		    }
		  }, {
		    key: 'clone',
		    value: function clone(value) {
		      return JSON.parse(JSON.stringify(value));
		    }
		  }, {
		    key: 'mergeObjects',
		    value: function mergeObjects(obj1, obj2) {
		      var obj3 = {};

		      if (obj1) {
		        for (var attrname in obj1) {
		          obj3[attrname] = obj1[attrname];
		        }
		      }

		      if (obj2) {
		        for (var attrname in obj2) {
		          obj3[attrname] = obj2[attrname];
		        }
		      }

		      return obj3;
		    }
		  }, {
		    key: 'isRelativeUri',
		    value: function isRelativeUri(uri) {
		      return uri && uri[0] === '/';
		    }
		  }, {
		    key: 'isSameHost',
		    value: function isSameHost(a, b) {
		      var urlA = _url2.default.parse(a);

		      if (!urlA) {
		        return false;
		      }

		      var urlB = _url2.default.parse(b);

		      if (!urlB) {
		        return false;
		      }

		      return urlA.host === urlB.host;
		    }
		  }, {
		    key: 'logWarning',
		    value: function logWarning(group, message) {
		      if (message === undefined) {
		        message = group;
		        group = undefined;
		      }

		      var result = '[Stormpath SDK]';

		      if (group) {
		        result += ' ' + group;
		      }

		      result += ': ' + message;

		      console.warn(result);
		    }
		  }, {
		    key: 'getEnabledGroups',
		    value: function getEnabledGroups(groups) {
		      var enabledGroups = {};

		      if (groups && groups.items) {
		        groups.items.forEach(function (item) {
		          if (item.status === 'ENABLED') {
		            var name = item.name;

		            if (name.indexOf(' ') !== -1) {
		              name = name.replace(/ /g, '_');
		            }

		            enabledGroups[name] = true;
		          }
		        });
		      }

		      return enabledGroups;
		    }
		  }, {
		    key: 'makePredicateFunction',
		    value: function makePredicateFunction(statement) {
		      return new Function('\n      var scope = arguments[0];\n\n      var maskingScope = {};\n\n      for (var key in window) {\n        maskingScope[key] = undefined;\n      }\n\n      for (var key in scope) {\n        maskingScope[key] = scope[key];\n      }\n\n      with (maskingScope) {\n        return (' + statement + ');\n      }\n    ');
		    }
		  }, {
		    key: 'groupsMatchExpression',
		    value: function groupsMatchExpression(groups, expression) {
		      if (!groups) {
		        return false;
		      }

		      var scope = JSON.parse(JSON.stringify(groups));
		      var expressionFn = this.makePredicateFunction(expression);

		      expression.match(/(\w+)/gmi).forEach(function (wordMatch) {
		        if (!(wordMatch in scope)) {
		          scope[wordMatch] = false;
		        }
		      });

		      return expressionFn(scope);
		    }
		  }, {
		    key: 'isArray',
		    value: function isArray(object) {
		      var nativeIsArray = Array.isArray;
		      var toString = Object.prototype.toString;
		      return nativeIsArray(object) || toString.call(object) === '[object Array]';
		    }
		  }, {
		    key: 'enforceRootElement',
		    value: function enforceRootElement(object, props) {
		      var newObject = undefined;

		      if (typeof object === 'string' || this.isArray(object)) {
		        if (!props) {
		          props = {};
		        }

		        if (!props.style) {
		          props.style = {};
		        }

		        props.style.display = 'inline-block';

		        newObject = _react2.default.createElement(
		          'div',
		          props,
		          object
		        );
		      } else {
		        var newProps = props;
		        var newChildren = [];

		        if (object.props) {
		          for (var key in object.props) {
		            var value = object.props[key];;
		            if (key === 'children') {
		              newChildren = value;
		            } else {
		              newProps[key] = value;
		            }
		          }
		        }

		        newObject = _react2.default.cloneElement(object, newProps, newChildren);
		      }

		      return newObject;
		    }
		  }]);

		  return Utils;
		}();

		exports.default = new Utils();

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		var punycode = __webpack_require__(7);

		exports.parse = urlParse;
		exports.resolve = urlResolve;
		exports.resolveObject = urlResolveObject;
		exports.format = urlFormat;

		exports.Url = Url;

		function Url() {
		  this.protocol = null;
		  this.slashes = null;
		  this.auth = null;
		  this.host = null;
		  this.port = null;
		  this.hostname = null;
		  this.hash = null;
		  this.search = null;
		  this.query = null;
		  this.pathname = null;
		  this.path = null;
		  this.href = null;
		}

		// Reference: RFC 3986, RFC 1808, RFC 2396

		// define these here so at least they only have to be
		// compiled once on the first module load.
		var protocolPattern = /^([a-z0-9.+-]+:)/i,
		    portPattern = /:[0-9]*$/,

		    // RFC 2396: characters reserved for delimiting URLs.
		    // We actually just auto-escape these.
		    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

		    // RFC 2396: characters not allowed for various reasons.
		    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

		    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
		    autoEscape = ['\''].concat(unwise),
		    // Characters that are never ever allowed in a hostname.
		    // Note that any invalid chars are also handled, but these
		    // are the ones that are *expected* to be seen, so we fast-path
		    // them.
		    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
		    hostEndingChars = ['/', '?', '#'],
		    hostnameMaxLen = 255,
		    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
		    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
		    // protocols that can allow "unsafe" and "unwise" chars.
		    unsafeProtocol = {
		      'javascript': true,
		      'javascript:': true
		    },
		    // protocols that never have a hostname.
		    hostlessProtocol = {
		      'javascript': true,
		      'javascript:': true
		    },
		    // protocols that always contain a // bit.
		    slashedProtocol = {
		      'http': true,
		      'https': true,
		      'ftp': true,
		      'gopher': true,
		      'file': true,
		      'http:': true,
		      'https:': true,
		      'ftp:': true,
		      'gopher:': true,
		      'file:': true
		    },
		    querystring = __webpack_require__(9);

		function urlParse(url, parseQueryString, slashesDenoteHost) {
		  if (url && isObject(url) && url instanceof Url) return url;

		  var u = new Url;
		  u.parse(url, parseQueryString, slashesDenoteHost);
		  return u;
		}

		Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
		  if (!isString(url)) {
		    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
		  }

		  var rest = url;

		  // trim before proceeding.
		  // This is to support parse stuff like "  http://foo.com  \n"
		  rest = rest.trim();

		  var proto = protocolPattern.exec(rest);
		  if (proto) {
		    proto = proto[0];
		    var lowerProto = proto.toLowerCase();
		    this.protocol = lowerProto;
		    rest = rest.substr(proto.length);
		  }

		  // figure out if it's got a host
		  // user@server is *always* interpreted as a hostname, and url
		  // resolution will treat //foo/bar as host=foo,path=bar because that's
		  // how the browser resolves relative URLs.
		  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
		    var slashes = rest.substr(0, 2) === '//';
		    if (slashes && !(proto && hostlessProtocol[proto])) {
		      rest = rest.substr(2);
		      this.slashes = true;
		    }
		  }

		  if (!hostlessProtocol[proto] &&
		      (slashes || (proto && !slashedProtocol[proto]))) {

		    // there's a hostname.
		    // the first instance of /, ?, ;, or # ends the host.
		    //
		    // If there is an @ in the hostname, then non-host chars *are* allowed
		    // to the left of the last @ sign, unless some host-ending character
		    // comes *before* the @-sign.
		    // URLs are obnoxious.
		    //
		    // ex:
		    // http://a@b@c/ => user:a@b host:c
		    // http://a@b?@c => user:a host:c path:/?@c

		    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
		    // Review our test case against browsers more comprehensively.

		    // find the first instance of any hostEndingChars
		    var hostEnd = -1;
		    for (var i = 0; i < hostEndingChars.length; i++) {
		      var hec = rest.indexOf(hostEndingChars[i]);
		      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
		        hostEnd = hec;
		    }

		    // at this point, either we have an explicit point where the
		    // auth portion cannot go past, or the last @ char is the decider.
		    var auth, atSign;
		    if (hostEnd === -1) {
		      // atSign can be anywhere.
		      atSign = rest.lastIndexOf('@');
		    } else {
		      // atSign must be in auth portion.
		      // http://a@b/c@d => host:b auth:a path:/c@d
		      atSign = rest.lastIndexOf('@', hostEnd);
		    }

		    // Now we have a portion which is definitely the auth.
		    // Pull that off.
		    if (atSign !== -1) {
		      auth = rest.slice(0, atSign);
		      rest = rest.slice(atSign + 1);
		      this.auth = decodeURIComponent(auth);
		    }

		    // the host is the remaining to the left of the first non-host char
		    hostEnd = -1;
		    for (var i = 0; i < nonHostChars.length; i++) {
		      var hec = rest.indexOf(nonHostChars[i]);
		      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
		        hostEnd = hec;
		    }
		    // if we still have not hit it, then the entire thing is a host.
		    if (hostEnd === -1)
		      hostEnd = rest.length;

		    this.host = rest.slice(0, hostEnd);
		    rest = rest.slice(hostEnd);

		    // pull out port.
		    this.parseHost();

		    // we've indicated that there is a hostname,
		    // so even if it's empty, it has to be present.
		    this.hostname = this.hostname || '';

		    // if hostname begins with [ and ends with ]
		    // assume that it's an IPv6 address.
		    var ipv6Hostname = this.hostname[0] === '[' &&
		        this.hostname[this.hostname.length - 1] === ']';

		    // validate a little.
		    if (!ipv6Hostname) {
		      var hostparts = this.hostname.split(/\./);
		      for (var i = 0, l = hostparts.length; i < l; i++) {
		        var part = hostparts[i];
		        if (!part) continue;
		        if (!part.match(hostnamePartPattern)) {
		          var newpart = '';
		          for (var j = 0, k = part.length; j < k; j++) {
		            if (part.charCodeAt(j) > 127) {
		              // we replace non-ASCII char with a temporary placeholder
		              // we need this to make sure size of hostname is not
		              // broken by replacing non-ASCII by nothing
		              newpart += 'x';
		            } else {
		              newpart += part[j];
		            }
		          }
		          // we test again with ASCII char only
		          if (!newpart.match(hostnamePartPattern)) {
		            var validParts = hostparts.slice(0, i);
		            var notHost = hostparts.slice(i + 1);
		            var bit = part.match(hostnamePartStart);
		            if (bit) {
		              validParts.push(bit[1]);
		              notHost.unshift(bit[2]);
		            }
		            if (notHost.length) {
		              rest = '/' + notHost.join('.') + rest;
		            }
		            this.hostname = validParts.join('.');
		            break;
		          }
		        }
		      }
		    }

		    if (this.hostname.length > hostnameMaxLen) {
		      this.hostname = '';
		    } else {
		      // hostnames are always lower case.
		      this.hostname = this.hostname.toLowerCase();
		    }

		    if (!ipv6Hostname) {
		      // IDNA Support: Returns a puny coded representation of "domain".
		      // It only converts the part of the domain name that
		      // has non ASCII characters. I.e. it dosent matter if
		      // you call it with a domain that already is in ASCII.
		      var domainArray = this.hostname.split('.');
		      var newOut = [];
		      for (var i = 0; i < domainArray.length; ++i) {
		        var s = domainArray[i];
		        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
		            'xn--' + punycode.encode(s) : s);
		      }
		      this.hostname = newOut.join('.');
		    }

		    var p = this.port ? ':' + this.port : '';
		    var h = this.hostname || '';
		    this.host = h + p;
		    this.href += this.host;

		    // strip [ and ] from the hostname
		    // the host field still retains them, though
		    if (ipv6Hostname) {
		      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
		      if (rest[0] !== '/') {
		        rest = '/' + rest;
		      }
		    }
		  }

		  // now rest is set to the post-host stuff.
		  // chop off any delim chars.
		  if (!unsafeProtocol[lowerProto]) {

		    // First, make 100% sure that any "autoEscape" chars get
		    // escaped, even if encodeURIComponent doesn't think they
		    // need to be.
		    for (var i = 0, l = autoEscape.length; i < l; i++) {
		      var ae = autoEscape[i];
		      var esc = encodeURIComponent(ae);
		      if (esc === ae) {
		        esc = escape(ae);
		      }
		      rest = rest.split(ae).join(esc);
		    }
		  }


		  // chop off from the tail first.
		  var hash = rest.indexOf('#');
		  if (hash !== -1) {
		    // got a fragment string.
		    this.hash = rest.substr(hash);
		    rest = rest.slice(0, hash);
		  }
		  var qm = rest.indexOf('?');
		  if (qm !== -1) {
		    this.search = rest.substr(qm);
		    this.query = rest.substr(qm + 1);
		    if (parseQueryString) {
		      this.query = querystring.parse(this.query);
		    }
		    rest = rest.slice(0, qm);
		  } else if (parseQueryString) {
		    // no query string, but parseQueryString still requested
		    this.search = '';
		    this.query = {};
		  }
		  if (rest) this.pathname = rest;
		  if (slashedProtocol[lowerProto] &&
		      this.hostname && !this.pathname) {
		    this.pathname = '/';
		  }

		  //to support http.request
		  if (this.pathname || this.search) {
		    var p = this.pathname || '';
		    var s = this.search || '';
		    this.path = p + s;
		  }

		  // finally, reconstruct the href based on what has been validated.
		  this.href = this.format();
		  return this;
		};

		// format a parsed object into a url string
		function urlFormat(obj) {
		  // ensure it's an object, and not a string url.
		  // If it's an obj, this is a no-op.
		  // this way, you can call url_format() on strings
		  // to clean up potentially wonky urls.
		  if (isString(obj)) obj = urlParse(obj);
		  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
		  return obj.format();
		}

		Url.prototype.format = function() {
		  var auth = this.auth || '';
		  if (auth) {
		    auth = encodeURIComponent(auth);
		    auth = auth.replace(/%3A/i, ':');
		    auth += '@';
		  }

		  var protocol = this.protocol || '',
		      pathname = this.pathname || '',
		      hash = this.hash || '',
		      host = false,
		      query = '';

		  if (this.host) {
		    host = auth + this.host;
		  } else if (this.hostname) {
		    host = auth + (this.hostname.indexOf(':') === -1 ?
		        this.hostname :
		        '[' + this.hostname + ']');
		    if (this.port) {
		      host += ':' + this.port;
		    }
		  }

		  if (this.query &&
		      isObject(this.query) &&
		      Object.keys(this.query).length) {
		    query = querystring.stringify(this.query);
		  }

		  var search = this.search || (query && ('?' + query)) || '';

		  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

		  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
		  // unless they had them to begin with.
		  if (this.slashes ||
		      (!protocol || slashedProtocol[protocol]) && host !== false) {
		    host = '//' + (host || '');
		    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
		  } else if (!host) {
		    host = '';
		  }

		  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
		  if (search && search.charAt(0) !== '?') search = '?' + search;

		  pathname = pathname.replace(/[?#]/g, function(match) {
		    return encodeURIComponent(match);
		  });
		  search = search.replace('#', '%23');

		  return protocol + host + pathname + search + hash;
		};

		function urlResolve(source, relative) {
		  return urlParse(source, false, true).resolve(relative);
		}

		Url.prototype.resolve = function(relative) {
		  return this.resolveObject(urlParse(relative, false, true)).format();
		};

		function urlResolveObject(source, relative) {
		  if (!source) return relative;
		  return urlParse(source, false, true).resolveObject(relative);
		}

		Url.prototype.resolveObject = function(relative) {
		  if (isString(relative)) {
		    var rel = new Url();
		    rel.parse(relative, false, true);
		    relative = rel;
		  }

		  var result = new Url();
		  Object.keys(this).forEach(function(k) {
		    result[k] = this[k];
		  }, this);

		  // hash is always overridden, no matter what.
		  // even href="" will remove it.
		  result.hash = relative.hash;

		  // if the relative url is empty, then there's nothing left to do here.
		  if (relative.href === '') {
		    result.href = result.format();
		    return result;
		  }

		  // hrefs like //foo/bar always cut to the protocol.
		  if (relative.slashes && !relative.protocol) {
		    // take everything except the protocol from relative
		    Object.keys(relative).forEach(function(k) {
		      if (k !== 'protocol')
		        result[k] = relative[k];
		    });

		    //urlParse appends trailing / to urls like http://www.example.com
		    if (slashedProtocol[result.protocol] &&
		        result.hostname && !result.pathname) {
		      result.path = result.pathname = '/';
		    }

		    result.href = result.format();
		    return result;
		  }

		  if (relative.protocol && relative.protocol !== result.protocol) {
		    // if it's a known url protocol, then changing
		    // the protocol does weird things
		    // first, if it's not file:, then we MUST have a host,
		    // and if there was a path
		    // to begin with, then we MUST have a path.
		    // if it is file:, then the host is dropped,
		    // because that's known to be hostless.
		    // anything else is assumed to be absolute.
		    if (!slashedProtocol[relative.protocol]) {
		      Object.keys(relative).forEach(function(k) {
		        result[k] = relative[k];
		      });
		      result.href = result.format();
		      return result;
		    }

		    result.protocol = relative.protocol;
		    if (!relative.host && !hostlessProtocol[relative.protocol]) {
		      var relPath = (relative.pathname || '').split('/');
		      while (relPath.length && !(relative.host = relPath.shift()));
		      if (!relative.host) relative.host = '';
		      if (!relative.hostname) relative.hostname = '';
		      if (relPath[0] !== '') relPath.unshift('');
		      if (relPath.length < 2) relPath.unshift('');
		      result.pathname = relPath.join('/');
		    } else {
		      result.pathname = relative.pathname;
		    }
		    result.search = relative.search;
		    result.query = relative.query;
		    result.host = relative.host || '';
		    result.auth = relative.auth;
		    result.hostname = relative.hostname || relative.host;
		    result.port = relative.port;
		    // to support http.request
		    if (result.pathname || result.search) {
		      var p = result.pathname || '';
		      var s = result.search || '';
		      result.path = p + s;
		    }
		    result.slashes = result.slashes || relative.slashes;
		    result.href = result.format();
		    return result;
		  }

		  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
		      isRelAbs = (
		          relative.host ||
		          relative.pathname && relative.pathname.charAt(0) === '/'
		      ),
		      mustEndAbs = (isRelAbs || isSourceAbs ||
		                    (result.host && relative.pathname)),
		      removeAllDots = mustEndAbs,
		      srcPath = result.pathname && result.pathname.split('/') || [],
		      relPath = relative.pathname && relative.pathname.split('/') || [],
		      psychotic = result.protocol && !slashedProtocol[result.protocol];

		  // if the url is a non-slashed url, then relative
		  // links like ../.. should be able
		  // to crawl up to the hostname, as well.  This is strange.
		  // result.protocol has already been set by now.
		  // Later on, put the first path part into the host field.
		  if (psychotic) {
		    result.hostname = '';
		    result.port = null;
		    if (result.host) {
		      if (srcPath[0] === '') srcPath[0] = result.host;
		      else srcPath.unshift(result.host);
		    }
		    result.host = '';
		    if (relative.protocol) {
		      relative.hostname = null;
		      relative.port = null;
		      if (relative.host) {
		        if (relPath[0] === '') relPath[0] = relative.host;
		        else relPath.unshift(relative.host);
		      }
		      relative.host = null;
		    }
		    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
		  }

		  if (isRelAbs) {
		    // it's absolute.
		    result.host = (relative.host || relative.host === '') ?
		                  relative.host : result.host;
		    result.hostname = (relative.hostname || relative.hostname === '') ?
		                      relative.hostname : result.hostname;
		    result.search = relative.search;
		    result.query = relative.query;
		    srcPath = relPath;
		    // fall through to the dot-handling below.
		  } else if (relPath.length) {
		    // it's relative
		    // throw away the existing file, and take the new path instead.
		    if (!srcPath) srcPath = [];
		    srcPath.pop();
		    srcPath = srcPath.concat(relPath);
		    result.search = relative.search;
		    result.query = relative.query;
		  } else if (!isNullOrUndefined(relative.search)) {
		    // just pull out the search.
		    // like href='?foo'.
		    // Put this after the other two cases because it simplifies the booleans
		    if (psychotic) {
		      result.hostname = result.host = srcPath.shift();
		      //occationaly the auth can get stuck only in host
		      //this especialy happens in cases like
		      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
		      var authInHost = result.host && result.host.indexOf('@') > 0 ?
		                       result.host.split('@') : false;
		      if (authInHost) {
		        result.auth = authInHost.shift();
		        result.host = result.hostname = authInHost.shift();
		      }
		    }
		    result.search = relative.search;
		    result.query = relative.query;
		    //to support http.request
		    if (!isNull(result.pathname) || !isNull(result.search)) {
		      result.path = (result.pathname ? result.pathname : '') +
		                    (result.search ? result.search : '');
		    }
		    result.href = result.format();
		    return result;
		  }

		  if (!srcPath.length) {
		    // no path at all.  easy.
		    // we've already handled the other stuff above.
		    result.pathname = null;
		    //to support http.request
		    if (result.search) {
		      result.path = '/' + result.search;
		    } else {
		      result.path = null;
		    }
		    result.href = result.format();
		    return result;
		  }

		  // if a url ENDs in . or .., then it must get a trailing slash.
		  // however, if it ends in anything else non-slashy,
		  // then it must NOT get a trailing slash.
		  var last = srcPath.slice(-1)[0];
		  var hasTrailingSlash = (
		      (result.host || relative.host) && (last === '.' || last === '..') ||
		      last === '');

		  // strip single dots, resolve double dots to parent dir
		  // if the path tries to go above the root, `up` ends up > 0
		  var up = 0;
		  for (var i = srcPath.length; i >= 0; i--) {
		    last = srcPath[i];
		    if (last == '.') {
		      srcPath.splice(i, 1);
		    } else if (last === '..') {
		      srcPath.splice(i, 1);
		      up++;
		    } else if (up) {
		      srcPath.splice(i, 1);
		      up--;
		    }
		  }

		  // if the path is allowed to go above the root, restore leading ..s
		  if (!mustEndAbs && !removeAllDots) {
		    for (; up--; up) {
		      srcPath.unshift('..');
		    }
		  }

		  if (mustEndAbs && srcPath[0] !== '' &&
		      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
		    srcPath.unshift('');
		  }

		  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
		    srcPath.push('');
		  }

		  var isAbsolute = srcPath[0] === '' ||
		      (srcPath[0] && srcPath[0].charAt(0) === '/');

		  // put the host back
		  if (psychotic) {
		    result.hostname = result.host = isAbsolute ? '' :
		                                    srcPath.length ? srcPath.shift() : '';
		    //occationaly the auth can get stuck only in host
		    //this especialy happens in cases like
		    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
		    var authInHost = result.host && result.host.indexOf('@') > 0 ?
		                     result.host.split('@') : false;
		    if (authInHost) {
		      result.auth = authInHost.shift();
		      result.host = result.hostname = authInHost.shift();
		    }
		  }

		  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

		  if (mustEndAbs && !isAbsolute) {
		    srcPath.unshift('');
		  }

		  if (!srcPath.length) {
		    result.pathname = null;
		    result.path = null;
		  } else {
		    result.pathname = srcPath.join('/');
		  }

		  //to support request.http
		  if (!isNull(result.pathname) || !isNull(result.search)) {
		    result.path = (result.pathname ? result.pathname : '') +
		                  (result.search ? result.search : '');
		  }
		  result.auth = relative.auth || result.auth;
		  result.slashes = result.slashes || relative.slashes;
		  result.href = result.format();
		  return result;
		};

		Url.prototype.parseHost = function() {
		  var host = this.host;
		  var port = portPattern.exec(host);
		  if (port) {
		    port = port[0];
		    if (port !== ':') {
		      this.port = port.substr(1);
		    }
		    host = host.substr(0, host.length - port.length);
		  }
		  if (host) this.hostname = host;
		};

		function isString(arg) {
		  return typeof arg === "string";
		}

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}

		function isNull(arg) {
		  return arg === null;
		}
		function isNullOrUndefined(arg) {
		  return  arg == null;
		}


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
		;(function(root) {

			/** Detect free variables */
			var freeExports = typeof exports == 'object' && exports &&
				!exports.nodeType && exports;
			var freeModule = typeof module == 'object' && module &&
				!module.nodeType && module;
			var freeGlobal = typeof global == 'object' && global;
			if (
				freeGlobal.global === freeGlobal ||
				freeGlobal.window === freeGlobal ||
				freeGlobal.self === freeGlobal
			) {
				root = freeGlobal;
			}

			/**
			 * The `punycode` object.
			 * @name punycode
			 * @type Object
			 */
			var punycode,

			/** Highest positive signed 32-bit float value */
			maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

			/** Bootstring parameters */
			base = 36,
			tMin = 1,
			tMax = 26,
			skew = 38,
			damp = 700,
			initialBias = 72,
			initialN = 128, // 0x80
			delimiter = '-', // '\x2D'

			/** Regular expressions */
			regexPunycode = /^xn--/,
			regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
			regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

			/** Error messages */
			errors = {
				'overflow': 'Overflow: input needs wider integers to process',
				'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
				'invalid-input': 'Invalid input'
			},

			/** Convenience shortcuts */
			baseMinusTMin = base - tMin,
			floor = Math.floor,
			stringFromCharCode = String.fromCharCode,

			/** Temporary variable */
			key;

			/*--------------------------------------------------------------------------*/

			/**
			 * A generic error utility function.
			 * @private
			 * @param {String} type The error type.
			 * @returns {Error} Throws a `RangeError` with the applicable error message.
			 */
			function error(type) {
				throw RangeError(errors[type]);
			}

			/**
			 * A generic `Array#map` utility function.
			 * @private
			 * @param {Array} array The array to iterate over.
			 * @param {Function} callback The function that gets called for every array
			 * item.
			 * @returns {Array} A new array of values returned by the callback function.
			 */
			function map(array, fn) {
				var length = array.length;
				var result = [];
				while (length--) {
					result[length] = fn(array[length]);
				}
				return result;
			}

			/**
			 * A simple `Array#map`-like wrapper to work with domain name strings or email
			 * addresses.
			 * @private
			 * @param {String} domain The domain name or email address.
			 * @param {Function} callback The function that gets called for every
			 * character.
			 * @returns {Array} A new string of characters returned by the callback
			 * function.
			 */
			function mapDomain(string, fn) {
				var parts = string.split('@');
				var result = '';
				if (parts.length > 1) {
					// In email addresses, only the domain name should be punycoded. Leave
					// the local part (i.e. everything up to `@`) intact.
					result = parts[0] + '@';
					string = parts[1];
				}
				// Avoid `split(regex)` for IE8 compatibility. See #17.
				string = string.replace(regexSeparators, '\x2E');
				var labels = string.split('.');
				var encoded = map(labels, fn).join('.');
				return result + encoded;
			}

			/**
			 * Creates an array containing the numeric code points of each Unicode
			 * character in the string. While JavaScript uses UCS-2 internally,
			 * this function will convert a pair of surrogate halves (each of which
			 * UCS-2 exposes as separate characters) into a single code point,
			 * matching UTF-16.
			 * @see `punycode.ucs2.encode`
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode.ucs2
			 * @name decode
			 * @param {String} string The Unicode input string (UCS-2).
			 * @returns {Array} The new array of code points.
			 */
			function ucs2decode(string) {
				var output = [],
				    counter = 0,
				    length = string.length,
				    value,
				    extra;
				while (counter < length) {
					value = string.charCodeAt(counter++);
					if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
						// high surrogate, and there is a next character
						extra = string.charCodeAt(counter++);
						if ((extra & 0xFC00) == 0xDC00) { // low surrogate
							output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
						} else {
							// unmatched surrogate; only append this code unit, in case the next
							// code unit is the high surrogate of a surrogate pair
							output.push(value);
							counter--;
						}
					} else {
						output.push(value);
					}
				}
				return output;
			}

			/**
			 * Creates a string based on an array of numeric code points.
			 * @see `punycode.ucs2.decode`
			 * @memberOf punycode.ucs2
			 * @name encode
			 * @param {Array} codePoints The array of numeric code points.
			 * @returns {String} The new Unicode string (UCS-2).
			 */
			function ucs2encode(array) {
				return map(array, function(value) {
					var output = '';
					if (value > 0xFFFF) {
						value -= 0x10000;
						output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
						value = 0xDC00 | value & 0x3FF;
					}
					output += stringFromCharCode(value);
					return output;
				}).join('');
			}

			/**
			 * Converts a basic code point into a digit/integer.
			 * @see `digitToBasic()`
			 * @private
			 * @param {Number} codePoint The basic numeric code point value.
			 * @returns {Number} The numeric value of a basic code point (for use in
			 * representing integers) in the range `0` to `base - 1`, or `base` if
			 * the code point does not represent a value.
			 */
			function basicToDigit(codePoint) {
				if (codePoint - 48 < 10) {
					return codePoint - 22;
				}
				if (codePoint - 65 < 26) {
					return codePoint - 65;
				}
				if (codePoint - 97 < 26) {
					return codePoint - 97;
				}
				return base;
			}

			/**
			 * Converts a digit/integer into a basic code point.
			 * @see `basicToDigit()`
			 * @private
			 * @param {Number} digit The numeric value of a basic code point.
			 * @returns {Number} The basic code point whose value (when used for
			 * representing integers) is `digit`, which needs to be in the range
			 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
			 * used; else, the lowercase form is used. The behavior is undefined
			 * if `flag` is non-zero and `digit` has no uppercase form.
			 */
			function digitToBasic(digit, flag) {
				//  0..25 map to ASCII a..z or A..Z
				// 26..35 map to ASCII 0..9
				return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
			}

			/**
			 * Bias adaptation function as per section 3.4 of RFC 3492.
			 * http://tools.ietf.org/html/rfc3492#section-3.4
			 * @private
			 */
			function adapt(delta, numPoints, firstTime) {
				var k = 0;
				delta = firstTime ? floor(delta / damp) : delta >> 1;
				delta += floor(delta / numPoints);
				for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
					delta = floor(delta / baseMinusTMin);
				}
				return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
			}

			/**
			 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
			 * symbols.
			 * @memberOf punycode
			 * @param {String} input The Punycode string of ASCII-only symbols.
			 * @returns {String} The resulting string of Unicode symbols.
			 */
			function decode(input) {
				// Don't use UCS-2
				var output = [],
				    inputLength = input.length,
				    out,
				    i = 0,
				    n = initialN,
				    bias = initialBias,
				    basic,
				    j,
				    index,
				    oldi,
				    w,
				    k,
				    digit,
				    t,
				    /** Cached calculation results */
				    baseMinusT;

				// Handle the basic code points: let `basic` be the number of input code
				// points before the last delimiter, or `0` if there is none, then copy
				// the first basic code points to the output.

				basic = input.lastIndexOf(delimiter);
				if (basic < 0) {
					basic = 0;
				}

				for (j = 0; j < basic; ++j) {
					// if it's not a basic code point
					if (input.charCodeAt(j) >= 0x80) {
						error('not-basic');
					}
					output.push(input.charCodeAt(j));
				}

				// Main decoding loop: start just after the last delimiter if any basic code
				// points were copied; start at the beginning otherwise.

				for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

					// `index` is the index of the next character to be consumed.
					// Decode a generalized variable-length integer into `delta`,
					// which gets added to `i`. The overflow checking is easier
					// if we increase `i` as we go, then subtract off its starting
					// value at the end to obtain `delta`.
					for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

						if (index >= inputLength) {
							error('invalid-input');
						}

						digit = basicToDigit(input.charCodeAt(index++));

						if (digit >= base || digit > floor((maxInt - i) / w)) {
							error('overflow');
						}

						i += digit * w;
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

						if (digit < t) {
							break;
						}

						baseMinusT = base - t;
						if (w > floor(maxInt / baseMinusT)) {
							error('overflow');
						}

						w *= baseMinusT;

					}

					out = output.length + 1;
					bias = adapt(i - oldi, out, oldi == 0);

					// `i` was supposed to wrap around from `out` to `0`,
					// incrementing `n` each time, so we'll fix that now:
					if (floor(i / out) > maxInt - n) {
						error('overflow');
					}

					n += floor(i / out);
					i %= out;

					// Insert `n` at position `i` of the output
					output.splice(i++, 0, n);

				}

				return ucs2encode(output);
			}

			/**
			 * Converts a string of Unicode symbols (e.g. a domain name label) to a
			 * Punycode string of ASCII-only symbols.
			 * @memberOf punycode
			 * @param {String} input The string of Unicode symbols.
			 * @returns {String} The resulting Punycode string of ASCII-only symbols.
			 */
			function encode(input) {
				var n,
				    delta,
				    handledCPCount,
				    basicLength,
				    bias,
				    j,
				    m,
				    q,
				    k,
				    t,
				    currentValue,
				    output = [],
				    /** `inputLength` will hold the number of code points in `input`. */
				    inputLength,
				    /** Cached calculation results */
				    handledCPCountPlusOne,
				    baseMinusT,
				    qMinusT;

				// Convert the input in UCS-2 to Unicode
				input = ucs2decode(input);

				// Cache the length
				inputLength = input.length;

				// Initialize the state
				n = initialN;
				delta = 0;
				bias = initialBias;

				// Handle the basic code points
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue < 0x80) {
						output.push(stringFromCharCode(currentValue));
					}
				}

				handledCPCount = basicLength = output.length;

				// `handledCPCount` is the number of code points that have been handled;
				// `basicLength` is the number of basic code points.

				// Finish the basic string - if it is not empty - with a delimiter
				if (basicLength) {
					output.push(delimiter);
				}

				// Main encoding loop:
				while (handledCPCount < inputLength) {

					// All non-basic code points < n have been handled already. Find the next
					// larger one:
					for (m = maxInt, j = 0; j < inputLength; ++j) {
						currentValue = input[j];
						if (currentValue >= n && currentValue < m) {
							m = currentValue;
						}
					}

					// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
					// but guard against overflow
					handledCPCountPlusOne = handledCPCount + 1;
					if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
						error('overflow');
					}

					delta += (m - n) * handledCPCountPlusOne;
					n = m;

					for (j = 0; j < inputLength; ++j) {
						currentValue = input[j];

						if (currentValue < n && ++delta > maxInt) {
							error('overflow');
						}

						if (currentValue == n) {
							// Represent delta as a generalized variable-length integer
							for (q = delta, k = base; /* no condition */; k += base) {
								t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
								if (q < t) {
									break;
								}
								qMinusT = q - t;
								baseMinusT = base - t;
								output.push(
									stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
								);
								q = floor(qMinusT / baseMinusT);
							}

							output.push(stringFromCharCode(digitToBasic(q, 0)));
							bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
							delta = 0;
							++handledCPCount;
						}
					}

					++delta;
					++n;

				}
				return output.join('');
			}

			/**
			 * Converts a Punycode string representing a domain name or an email address
			 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
			 * it doesn't matter if you call it on a string that has already been
			 * converted to Unicode.
			 * @memberOf punycode
			 * @param {String} input The Punycoded domain name or email address to
			 * convert to Unicode.
			 * @returns {String} The Unicode representation of the given Punycode
			 * string.
			 */
			function toUnicode(input) {
				return mapDomain(input, function(string) {
					return regexPunycode.test(string)
						? decode(string.slice(4).toLowerCase())
						: string;
				});
			}

			/**
			 * Converts a Unicode string representing a domain name or an email address to
			 * Punycode. Only the non-ASCII parts of the domain name will be converted,
			 * i.e. it doesn't matter if you call it with a domain that's already in
			 * ASCII.
			 * @memberOf punycode
			 * @param {String} input The domain name or email address to convert, as a
			 * Unicode string.
			 * @returns {String} The Punycode representation of the given domain name or
			 * email address.
			 */
			function toASCII(input) {
				return mapDomain(input, function(string) {
					return regexNonASCII.test(string)
						? 'xn--' + encode(string)
						: string;
				});
			}

			/*--------------------------------------------------------------------------*/

			/** Define the public API */
			punycode = {
				/**
				 * A string representing the current Punycode.js version number.
				 * @memberOf punycode
				 * @type String
				 */
				'version': '1.3.2',
				/**
				 * An object of methods to convert from JavaScript's internal character
				 * representation (UCS-2) to Unicode code points, and back.
				 * @see <https://mathiasbynens.be/notes/javascript-encoding>
				 * @memberOf punycode
				 * @type Object
				 */
				'ucs2': {
					'decode': ucs2decode,
					'encode': ucs2encode
				},
				'decode': decode,
				'encode': encode,
				'toASCII': toASCII,
				'toUnicode': toUnicode
			};

			/** Expose `punycode` */
			// Some AMD build optimizers, like r.js, check for specific condition patterns
			// like the following:
			if (
				true
			) {
				!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
					return punycode;
				}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else if (freeExports && freeModule) {
				if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
					freeModule.exports = punycode;
				} else { // in Narwhal or RingoJS v0.7.0-
					for (key in punycode) {
						punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
					}
				}
			} else { // in Rhino or a web browser
				root.punycode = punycode;
			}

		}(this));

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module), (function() { return this; }())))

	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.decode = exports.parse = __webpack_require__(10);
		exports.encode = exports.stringify = __webpack_require__(11);


	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		'use strict';

		// If obj.hasOwnProperty has been overridden, then calling
		// obj.hasOwnProperty(prop) will break.
		// See: https://github.com/joyent/node/issues/1707
		function hasOwnProperty(obj, prop) {
		  return Object.prototype.hasOwnProperty.call(obj, prop);
		}

		module.exports = function(qs, sep, eq, options) {
		  sep = sep || '&';
		  eq = eq || '=';
		  var obj = {};

		  if (typeof qs !== 'string' || qs.length === 0) {
		    return obj;
		  }

		  var regexp = /\+/g;
		  qs = qs.split(sep);

		  var maxKeys = 1000;
		  if (options && typeof options.maxKeys === 'number') {
		    maxKeys = options.maxKeys;
		  }

		  var len = qs.length;
		  // maxKeys <= 0 means that we should not limit keys count
		  if (maxKeys > 0 && len > maxKeys) {
		    len = maxKeys;
		  }

		  for (var i = 0; i < len; ++i) {
		    var x = qs[i].replace(regexp, '%20'),
		        idx = x.indexOf(eq),
		        kstr, vstr, k, v;

		    if (idx >= 0) {
		      kstr = x.substr(0, idx);
		      vstr = x.substr(idx + 1);
		    } else {
		      kstr = x;
		      vstr = '';
		    }

		    k = decodeURIComponent(kstr);
		    v = decodeURIComponent(vstr);

		    if (!hasOwnProperty(obj, k)) {
		      obj[k] = v;
		    } else if (Array.isArray(obj[k])) {
		      obj[k].push(v);
		    } else {
		      obj[k] = [obj[k], v];
		    }
		  }

		  return obj;
		};


	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		'use strict';

		var stringifyPrimitive = function(v) {
		  switch (typeof v) {
		    case 'string':
		      return v;

		    case 'boolean':
		      return v ? 'true' : 'false';

		    case 'number':
		      return isFinite(v) ? v : '';

		    default:
		      return '';
		  }
		};

		module.exports = function(obj, sep, eq, name) {
		  sep = sep || '&';
		  eq = eq || '=';
		  if (obj === null) {
		    obj = undefined;
		  }

		  if (typeof obj === 'object') {
		    return Object.keys(obj).map(function(k) {
		      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
		      if (Array.isArray(obj[k])) {
		        return obj[k].map(function(v) {
		          return ks + encodeURIComponent(stringifyPrimitive(v));
		        }).join(sep);
		      } else {
		        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
		      }
		    }).join(sep);

		  }

		  if (!name) return '';
		  return encodeURIComponent(stringifyPrimitive(name)) + eq +
		         encodeURIComponent(stringifyPrimitive(obj));
		};


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		module.exports = __webpack_require__(2);

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function makeHttpRequest(method, uri, body, headers, callback) {
		  var request = new XMLHttpRequest();

		  request.open(method.toUpperCase(), uri, true);

		  if (headers) {
		    for (var name in headers) {
		      var value = headers[name];
		      request.setRequestHeader(name, value);
		    }
		  }

		  // If the URI is different than the URI of the domain we're on,
		  // then set withCredentials to true so that we enable CORS.
		  if (!_utils2.default.isRelativeUri(uri) && !_utils2.default.isSameHost(uri, window.location.href)) {
		    request.withCredentials = true;
		  }

		  request.onreadystatechange = function () {
		    // 4 = Request finished and response is ready.
		    // Ignore everything else.
		    if (request.readyState !== 4) {
		      return;
		    }

		    var result = {
		      status: request.status,
		      responseJSON: null
		    };

		    try {
		      if (request.responseText) {
		        result.responseJSON = JSON.parse(request.responseText);
		      }
		      callback(null, result);
		    } catch (e) {
		      callback(e);
		    }
		  };

		  if (body && (typeof body === 'undefined' ? 'undefined' : _typeof(body)) === 'object') {
		    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		    request.send(JSON.stringify(body));
		  } else {
		    request.send();
		  }
		}

		var BaseService = function () {
		  function BaseService(endpoints) {
		    _classCallCheck(this, BaseService);

		    var defaultEndpoints = {
		      baseUri: null
		    };

		    this.endpoints = _utils2.default.mergeObjects(defaultEndpoints, endpoints);
		  }

		  _createClass(BaseService, [{
		    key: '_makeRequest',
		    value: function _makeRequest(method, path, body, callback) {
		      var uri = this._buildEndpoint(path);
		      var headers = {
		        'Accept': 'application/json'
		      };

		      // Only set the X-Stormpath-Agent header if we're on the same domain as the requested URI.
		      // This because we want to avoid CORS requests that require you to have to whitelist the X-Stormpath-Agent header.
		      if (_utils2.default.isRelativeUri(uri) || _utils2.default.isSameHost(uri, window.location.href)) {
		        headers['X-Stormpath-Agent'] = 'stormpath-sdk-react/' + ("1.3.1") + ' react/' + _react2.default.version;
		      }

		      makeHttpRequest(method, uri, body, headers, function (err, result) {
		        if (err) {
		          return callback(err);
		        }

		        var data = result.responseJSON || {};

		        if (result.status === 200) {
		          callback(null, data);
		        } else {
		          var error = new Error(data.message || data.error || 'A request to the API failed.');
		          error.status = result.status;
		          callback(error);
		        }
		      });
		    }
		  }, {
		    key: '_buildEndpoint',
		    value: function _buildEndpoint(endpoint) {
		      return (this.endpoints.baseUri || '') + endpoint;
		    }
		  }]);

		  return BaseService;
		}();

		exports.default = BaseService;

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var RequestPool = function () {
		  function RequestPool() {
		    _classCallCheck(this, RequestPool);

		    this.waiting = [];
		  }

		  _createClass(RequestPool, [{
		    key: "request",
		    value: function request(resolver, callback) {
		      var waiting = this.waiting;

		      waiting.push(callback);

		      if (waiting.length === 1) {
		        resolver(function () {
		          while (waiting.length) {
		            waiting.shift().apply(null, arguments);
		          }
		        });
		      }

		      return false;
		    }
		  }]);

		  return RequestPool;
		}();

		exports.default = RequestPool;

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.UserConstants = undefined;

		var _UserConstants2 = __webpack_require__(16);

		var _UserConstants3 = _interopRequireDefault(_UserConstants2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.UserConstants = _UserConstants3.default;

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _keymirror = __webpack_require__(17);

		var _keymirror2 = _interopRequireDefault(_keymirror);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = (0, _keymirror2.default)({
		  USER_LOGIN: null,
		  USER_SET: null,
		  USER_REGISTER: null,
		  USER_FORGOT_PASSWORD: null,
		  USER_CHANGE_PASSWORD: null,
		  USER_UPDATE_PROFILE: null,
		  USER_VERIFY_EMAIL: null,
		  USER_LOGOUT: null
		});

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		/**
		 * Copyright 2013-2014 Facebook, Inc.
		 *
		 * Licensed under the Apache License, Version 2.0 (the "License");
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 * http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an "AS IS" BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 *
		 */

		"use strict";

		/**
		 * Constructs an enumeration with keys equal to their value.
		 *
		 * For example:
		 *
		 *   var COLORS = keyMirror({blue: null, red: null});
		 *   var myColor = COLORS.blue;
		 *   var isColorValid = !!COLORS[myColor];
		 *
		 * The last line could not be performed if the values of the generated enum were
		 * not equal to their keys.
		 *
		 *   Input:  {key1: val1, key2: val2}
		 *   Output: {key1: key1, key2: key2}
		 *
		 * @param {object} obj
		 * @return {object}
		 */
		var keyMirror = function(obj) {
		  var ret = {};
		  var key;
		  if (!(obj instanceof Object && !Array.isArray(obj))) {
		    throw new Error('keyMirror(...): Argument must be an object.');
		  }
		  for (key in obj) {
		    if (!obj.hasOwnProperty(key)) {
		      continue;
		    }
		    ret[key] = key;
		  }
		  return ret;
		};

		module.exports = keyMirror;


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.SessionStore = exports.UserStore = undefined;

		var _UserStore2 = __webpack_require__(19);

		var _UserStore3 = _interopRequireDefault(_UserStore2);

		var _SessionStore2 = __webpack_require__(23);

		var _SessionStore3 = _interopRequireDefault(_SessionStore2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.UserStore = _UserStore3.default;
		exports.SessionStore = _SessionStore3.default;

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _BaseStore2 = __webpack_require__(20);

		var _BaseStore3 = _interopRequireDefault(_BaseStore2);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var UserStore = function (_BaseStore) {
		  _inherits(UserStore, _BaseStore);

		  function UserStore(userService, sessionStore) {
		    _classCallCheck(this, UserStore);

		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserStore).call(this));

		    _this.service = userService;
		    _this.sessionError = null;
		    _this.sessionStore = sessionStore;
		    _this.resolveSession();
		    return _this;
		  }

		  _createClass(UserStore, [{
		    key: 'isAuthenticated',
		    value: function isAuthenticated(options, callback) {
		      var _this2 = this;

		      if (typeof options === 'function') {
		        callback = options;
		        options = {};
		      }

		      this.resolveSession(function (err, user) {
		        var authenticated = !err && !_this2.sessionStore.empty();

		        if (authenticated && options.inGroup) {
		          if (user.groups) {
		            authenticated = _utils2.default.groupsMatchExpression(user.groups, options.inGroup);
		          } else {
		            _utils2.default.logWarning('<AuthenticatedRoute> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
		          }
		        }

		        callback(err, authenticated);
		      });
		    }
		  }, {
		    key: 'getLoginViewData',
		    value: function getLoginViewData(callback) {
		      this.service.getLoginViewData(callback);
		    }
		  }, {
		    key: 'login',
		    value: function login(options, callback) {
		      var _this3 = this;

		      this.reset();

		      this.service.login(options, function (err) {
		        if (err) {
		          return callback(err);
		        }

		        _this3.resolveSession(callback, true);
		      });
		    }
		  }, {
		    key: 'register',
		    value: function register(options, callback) {
		      this.service.register(options, callback);
		    }
		  }, {
		    key: 'getRegisterViewData',
		    value: function getRegisterViewData(callback) {
		      this.service.getRegisterViewData(callback);
		    }
		  }, {
		    key: 'forgotPassword',
		    value: function forgotPassword(options, callback) {
		      this.service.forgotPassword(options, callback);
		    }
		  }, {
		    key: 'changePassword',
		    value: function changePassword(options, callback) {
		      this.service.changePassword(options, callback);
		    }
		  }, {
		    key: 'updateProfile',
		    value: function updateProfile(data, callback) {
		      this.service.updateProfile(data, callback);
		    }
		  }, {
		    key: 'verifyEmail',
		    value: function verifyEmail(spToken, callback) {
		      this.service.verifyEmail(spToken, callback);
		    }
		  }, {
		    key: 'logout',
		    value: function logout(callback) {
		      var _this4 = this;

		      this.service.logout(function (err) {
		        if (err) {
		          return callback(err);
		        }

		        _this4.reset();
		        _this4.emitChange();

		        callback();
		      });
		    }
		  }, {
		    key: 'resolveSession',
		    value: function resolveSession(callback, force) {
		      var _this5 = this;

		      if (!force && (this.sessionError || !this.sessionStore.empty())) {
		        return callback && callback(this.sessionError, this.sessionStore.get());
		      }

		      this.service.me(function (err, result) {
		        if (err) {
		          _this5.sessionError = err;
		          _this5.sessionStore.reset();
		          _UserActions2.default.set(null);
		        } else {
		          _this5.sessionError = null;
		          _this5.sessionStore.set(result);
		          _UserActions2.default.set(result);
		        }

		        if (callback) {
		          callback(_this5.sessionError, _this5.sessionStore.get());
		        }

		        _this5.emitChange();
		      });
		    }
		  }, {
		    key: 'reset',
		    value: function reset() {
		      this.sessionError = null;
		      this.sessionStore.reset();
		      _UserActions2.default.set(null);
		    }
		  }]);

		  return UserStore;
		}(_BaseStore3.default);

		exports.default = UserStore;

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var EventEmitter = __webpack_require__(2).EventEmitter;

		var BaseStore = function (_EventEmitter) {
		  _inherits(BaseStore, _EventEmitter);

		  function BaseStore() {
		    _classCallCheck(this, BaseStore);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseStore).apply(this, arguments));
		  }

		  _createClass(BaseStore, [{
		    key: 'emitChange',
		    value: function emitChange(value) {
		      this.emit('changed', value);
		    }
		  }, {
		    key: 'addChangeListener',
		    value: function addChangeListener(callback) {
		      return this.on('changed', callback);
		    }
		  }, {
		    key: 'removeChangeListener',
		    value: function removeChangeListener(callback) {
		      this.removeListener('changed', callback);
		    }
		  }]);

		  return BaseStore;
		}(EventEmitter);

		exports.default = BaseStore;

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		var _UserConstants = __webpack_require__(16);

		var _UserConstants2 = _interopRequireDefault(_UserConstants);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function dispatch(event) {
		  setTimeout(function () {
		    _context2.default.getDispatcher().dispatch(event);
		  }, 0);
		}

		var UserActions = function () {
		  function UserActions() {
		    _classCallCheck(this, UserActions);
		  }

		  _createClass(UserActions, [{
		    key: 'login',
		    value: function login(options, callback) {
		      dispatch({
		        type: _UserConstants2.default.USER_LOGIN,
		        options: options,
		        callback: callback
		      });
		    }
		  }, {
		    key: 'register',
		    value: function register(options, callback) {
		      dispatch({
		        type: _UserConstants2.default.USER_REGISTER,
		        options: options,
		        callback: callback
		      });
		    }
		  }, {
		    key: 'forgotPassword',
		    value: function forgotPassword(options, callback) {
		      dispatch({
		        type: _UserConstants2.default.USER_FORGOT_PASSWORD,
		        options: options,
		        callback: callback
		      });
		    }
		  }, {
		    key: 'verifyEmail',
		    value: function verifyEmail(spToken, callback) {
		      dispatch({
		        type: _UserConstants2.default.USER_VERIFY_EMAIL,
		        options: {
		          spToken: spToken
		        },
		        callback: callback
		      });
		    }
		  }, {
		    key: 'changePassword',
		    value: function changePassword(options, callback) {
		      dispatch({
		        type: _UserConstants2.default.USER_CHANGE_PASSWORD,
		        options: options,
		        callback: callback
		      });
		    }
		  }, {
		    key: 'updateProfile',
		    value: function updateProfile(data, callback) {
		      dispatch({
		        type: _UserConstants2.default.USER_UPDATE_PROFILE,
		        options: {
		          data: data
		        },
		        callback: callback
		      });
		    }
		  }, {
		    key: 'set',
		    value: function set(data) {
		      dispatch({
		        type: _UserConstants2.default.USER_SET,
		        options: {
		          data: data
		        }
		      });
		    }
		  }, {
		    key: 'logout',
		    value: function logout(callback) {
		      dispatch({
		        type: _UserConstants2.default.USER_LOGOUT,
		        callback: callback
		      });
		    }
		  }]);

		  return UserActions;
		}();

		exports.default = new UserActions();

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _SessionStore = __webpack_require__(23);

		var _SessionStore2 = _interopRequireDefault(_SessionStore);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Context = function () {
		  function Context() {
		    _classCallCheck(this, Context);

		    this.router = null;
		    this.dispatcher = null;
		    this.sessionStore = null;
		    this.userStore = null;
		  }

		  _createClass(Context, [{
		    key: 'setRouter',
		    value: function setRouter(router) {
		      this.router = router;
		    }
		  }, {
		    key: 'getRouter',
		    value: function getRouter() {
		      return this.router;
		    }
		  }, {
		    key: 'setDispatcher',
		    value: function setDispatcher(dispatcher) {
		      this.dispatcher = dispatcher;
		    }
		  }, {
		    key: 'getDispatcher',
		    value: function getDispatcher() {
		      return this.dispatcher;
		    }
		  }, {
		    key: 'setSessionStore',
		    value: function setSessionStore(sessionStore) {
		      this.sessionStore = sessionStore;
		    }
		  }, {
		    key: 'getSessionStore',
		    value: function getSessionStore() {
		      return this.sessionStore;
		    }
		  }, {
		    key: 'setUserStore',
		    value: function setUserStore(userStore) {
		      this.userStore = userStore;
		    }
		  }, {
		    key: 'getUserStore',
		    value: function getUserStore() {
		      return this.userStore;
		    }
		  }]);

		  return Context;
		}();

		exports.default = new Context();

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _BaseStore2 = __webpack_require__(20);

		var _BaseStore3 = _interopRequireDefault(_BaseStore2);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SessionStore = function (_BaseStore) {
		  _inherits(SessionStore, _BaseStore);

		  function SessionStore() {
		    var _Object$getPrototypeO;

		    var _temp, _this, _ret;

		    _classCallCheck(this, SessionStore);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SessionStore)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.session = undefined, _temp), _possibleConstructorReturn(_this, _ret);
		  }

		  _createClass(SessionStore, [{
		    key: 'get',
		    value: function get() {
		      return this.session;
		    }
		  }, {
		    key: 'set',
		    value: function set(session) {
		      if (session && session.groups && session.groups.href) {
		        session.groups = _utils2.default.getEnabledGroups(session.groups);
		      }

		      if (JSON.stringify(this.session) !== JSON.stringify(session)) {
		        this.session = session;
		        this.emitChange(session);
		      }
		    }
		  }, {
		    key: 'empty',
		    value: function empty() {
		      return this.session === undefined;
		    }
		  }, {
		    key: 'reset',
		    value: function reset() {
		      if (this.session !== undefined) {
		        this.session = undefined;
		        this.emitChange(undefined);
		      }
		    }
		  }]);

		  return SessionStore;
		}(_BaseStore3.default);

		exports.default = SessionStore;

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.ReduxDispatcher = exports.FluxDispatcher = undefined;

		var _FluxDispatcher2 = __webpack_require__(25);

		var _FluxDispatcher3 = _interopRequireDefault(_FluxDispatcher2);

		var _ReduxDispatcher2 = __webpack_require__(30);

		var _ReduxDispatcher3 = _interopRequireDefault(_ReduxDispatcher2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.FluxDispatcher = _FluxDispatcher3.default;
		exports.ReduxDispatcher = _ReduxDispatcher3.default;

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _flux = __webpack_require__(26);

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var FluxDispatcher = function () {
		  function FluxDispatcher(reducer) {
		    _classCallCheck(this, FluxDispatcher);

		    this.dispatcher = new _flux.Dispatcher();
		    this.register(reducer);
		  }

		  _createClass(FluxDispatcher, [{
		    key: 'register',
		    value: function register(listener) {
		      this.dispatcher.register(function (data) {
		        if (data && 'actionType' in data) {
		          data.type = data.actionType;
		          delete data['actionType'];
		        }

		        listener(data);
		      });
		    }
		  }, {
		    key: 'dispatch',
		    value: function dispatch(event) {
		      this.dispatcher.dispatch({
		        actionType: event.type,
		        options: event.options,
		        callback: event.callback
		      });
		    }
		  }]);

		  return FluxDispatcher;
		}();

		exports.default = FluxDispatcher;

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Copyright (c) 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */

		module.exports.Dispatcher = __webpack_require__(27);


	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright (c) 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule Dispatcher
		 * 
		 * @preventMunge
		 */

		'use strict';

		exports.__esModule = true;

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		var invariant = __webpack_require__(29);

		var _prefix = 'ID_';

		/**
		 * Dispatcher is used to broadcast payloads to registered callbacks. This is
		 * different from generic pub-sub systems in two ways:
		 *
		 *   1) Callbacks are not subscribed to particular events. Every payload is
		 *      dispatched to every registered callback.
		 *   2) Callbacks can be deferred in whole or part until other callbacks have
		 *      been executed.
		 *
		 * For example, consider this hypothetical flight destination form, which
		 * selects a default city when a country is selected:
		 *
		 *   var flightDispatcher = new Dispatcher();
		 *
		 *   // Keeps track of which country is selected
		 *   var CountryStore = {country: null};
		 *
		 *   // Keeps track of which city is selected
		 *   var CityStore = {city: null};
		 *
		 *   // Keeps track of the base flight price of the selected city
		 *   var FlightPriceStore = {price: null}
		 *
		 * When a user changes the selected city, we dispatch the payload:
		 *
		 *   flightDispatcher.dispatch({
		 *     actionType: 'city-update',
		 *     selectedCity: 'paris'
		 *   });
		 *
		 * This payload is digested by `CityStore`:
		 *
		 *   flightDispatcher.register(function(payload) {
		 *     if (payload.actionType === 'city-update') {
		 *       CityStore.city = payload.selectedCity;
		 *     }
		 *   });
		 *
		 * When the user selects a country, we dispatch the payload:
		 *
		 *   flightDispatcher.dispatch({
		 *     actionType: 'country-update',
		 *     selectedCountry: 'australia'
		 *   });
		 *
		 * This payload is digested by both stores:
		 *
		 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
		 *     if (payload.actionType === 'country-update') {
		 *       CountryStore.country = payload.selectedCountry;
		 *     }
		 *   });
		 *
		 * When the callback to update `CountryStore` is registered, we save a reference
		 * to the returned token. Using this token with `waitFor()`, we can guarantee
		 * that `CountryStore` is updated before the callback that updates `CityStore`
		 * needs to query its data.
		 *
		 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
		 *     if (payload.actionType === 'country-update') {
		 *       // `CountryStore.country` may not be updated.
		 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
		 *       // `CountryStore.country` is now guaranteed to be updated.
		 *
		 *       // Select the default city for the new country
		 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
		 *     }
		 *   });
		 *
		 * The usage of `waitFor()` can be chained, for example:
		 *
		 *   FlightPriceStore.dispatchToken =
		 *     flightDispatcher.register(function(payload) {
		 *       switch (payload.actionType) {
		 *         case 'country-update':
		 *         case 'city-update':
		 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
		 *           FlightPriceStore.price =
		 *             getFlightPriceStore(CountryStore.country, CityStore.city);
		 *           break;
		 *     }
		 *   });
		 *
		 * The `country-update` payload will be guaranteed to invoke the stores'
		 * registered callbacks in order: `CountryStore`, `CityStore`, then
		 * `FlightPriceStore`.
		 */

		var Dispatcher = (function () {
		  function Dispatcher() {
		    _classCallCheck(this, Dispatcher);

		    this._callbacks = {};
		    this._isDispatching = false;
		    this._isHandled = {};
		    this._isPending = {};
		    this._lastID = 1;
		  }

		  /**
		   * Registers a callback to be invoked with every dispatched payload. Returns
		   * a token that can be used with `waitFor()`.
		   */

		  Dispatcher.prototype.register = function register(callback) {
		    var id = _prefix + this._lastID++;
		    this._callbacks[id] = callback;
		    return id;
		  };

		  /**
		   * Removes a callback based on its token.
		   */

		  Dispatcher.prototype.unregister = function unregister(id) {
		    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
		    delete this._callbacks[id];
		  };

		  /**
		   * Waits for the callbacks specified to be invoked before continuing execution
		   * of the current callback. This method should only be used by a callback in
		   * response to a dispatched payload.
		   */

		  Dispatcher.prototype.waitFor = function waitFor(ids) {
		    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
		    for (var ii = 0; ii < ids.length; ii++) {
		      var id = ids[ii];
		      if (this._isPending[id]) {
		        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
		        continue;
		      }
		      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
		      this._invokeCallback(id);
		    }
		  };

		  /**
		   * Dispatches a payload to all registered callbacks.
		   */

		  Dispatcher.prototype.dispatch = function dispatch(payload) {
		    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
		    this._startDispatching(payload);
		    try {
		      for (var id in this._callbacks) {
		        if (this._isPending[id]) {
		          continue;
		        }
		        this._invokeCallback(id);
		      }
		    } finally {
		      this._stopDispatching();
		    }
		  };

		  /**
		   * Is this Dispatcher currently dispatching.
		   */

		  Dispatcher.prototype.isDispatching = function isDispatching() {
		    return this._isDispatching;
		  };

		  /**
		   * Call the callback stored with the given id. Also do some internal
		   * bookkeeping.
		   *
		   * @internal
		   */

		  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
		    this._isPending[id] = true;
		    this._callbacks[id](this._pendingPayload);
		    this._isHandled[id] = true;
		  };

		  /**
		   * Set up bookkeeping needed when dispatching.
		   *
		   * @internal
		   */

		  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
		    for (var id in this._callbacks) {
		      this._isPending[id] = false;
		      this._isHandled[id] = false;
		    }
		    this._pendingPayload = payload;
		    this._isDispatching = true;
		  };

		  /**
		   * Clear bookkeeping used for dispatching.
		   *
		   * @internal
		   */

		  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
		    delete this._pendingPayload;
		    this._isDispatching = false;
		  };

		  return Dispatcher;
		})();

		module.exports = Dispatcher;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 28 */
	/***/ function(module, exports) {

		// shim for using process in browser
		var process = module.exports = {};

		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.

		var cachedSetTimeout;
		var cachedClearTimeout;

		(function () {
		    try {
		        cachedSetTimeout = setTimeout;
		    } catch (e) {
		        cachedSetTimeout = function () {
		            throw new Error('setTimeout is not defined');
		        }
		    }
		    try {
		        cachedClearTimeout = clearTimeout;
		    } catch (e) {
		        cachedClearTimeout = function () {
		            throw new Error('clearTimeout is not defined');
		        }
		    }
		} ())
		function runTimeout(fun) {
		    if (cachedSetTimeout === setTimeout) {
		        //normal enviroments in sane situations
		        return setTimeout(fun, 0);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedSetTimeout(fun, 0);
		    } catch(e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
		            return cachedSetTimeout.call(null, fun, 0);
		        } catch(e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
		            return cachedSetTimeout.call(this, fun, 0);
		        }
		    }


		}
		function runClearTimeout(marker) {
		    if (cachedClearTimeout === clearTimeout) {
		        //normal enviroments in sane situations
		        return clearTimeout(marker);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedClearTimeout(marker);
		    } catch (e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
		            return cachedClearTimeout.call(null, marker);
		        } catch (e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
		            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
		            return cachedClearTimeout.call(this, marker);
		        }
		    }



		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}

		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = runTimeout(cleanUpNextTick);
		    draining = true;

		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    runClearTimeout(timeout);
		}

		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        runTimeout(drainQueue);
		    }
		};

		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;

		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};

		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule invariant
		 */

		"use strict";

		/**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */

		var invariant = function (condition, format, a, b, c, d, e, f) {
		  if (process.env.NODE_ENV !== 'production') {
		    if (format === undefined) {
		      throw new Error('invariant requires an error message argument');
		    }
		  }

		  if (!condition) {
		    var error;
		    if (format === undefined) {
		      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
		    } else {
		      var args = [a, b, c, d, e, f];
		      var argIndex = 0;
		      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
		        return args[argIndex++];
		      }));
		    }

		    error.framesToPop = 1; // we don't care about invariant's own frame
		    throw error;
		  }
		};

		module.exports = invariant;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var ReduxDispatcher = function () {
		  function ReduxDispatcher(reducer, store) {
		    _classCallCheck(this, ReduxDispatcher);

		    this.reducer = reducer;
		    this.store = store;
		  }

		  _createClass(ReduxDispatcher, [{
		    key: 'dispatch',
		    value: function dispatch(event) {
		      this.reducer(event);
		      this.store.dispatch(event);
		    }
		  }]);

		  return ReduxDispatcher;
		}();

		exports.default = ReduxDispatcher;

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

		var _class, _temp;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _reactRouter = __webpack_require__(32);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		var _HomeRoute = __webpack_require__(95);

		var _HomeRoute2 = _interopRequireDefault(_HomeRoute);

		var _LoginRoute = __webpack_require__(96);

		var _LoginRoute2 = _interopRequireDefault(_LoginRoute);

		var _LogoutRoute = __webpack_require__(97);

		var _LogoutRoute2 = _interopRequireDefault(_LogoutRoute);

		var _AuthenticatedRoute = __webpack_require__(98);

		var _AuthenticatedRoute2 = _interopRequireDefault(_AuthenticatedRoute);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Router = (_temp = _class = function (_ReactRouter) {
		  _inherits(Router, _ReactRouter);

		  function Router() {
		    _classCallCheck(this, Router);

		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Router).apply(this, arguments));

		    _this.state = {
		      authenticated: false,
		      user: undefined
		    };
		    _this.markedRoutes = {
		      home: {
		        type: _HomeRoute2.default,
		        authenticated: {
		          props: null
		        },
		        notAuthenticated: {
		          props: null
		        }
		      },
		      login: {
		        type: _LoginRoute2.default,
		        props: null
		      },
		      logout: {
		        type: _LogoutRoute2.default,
		        props: null
		      }
		    };


		    if (_this.props.routes) {
		      // The reason we wrap in a div is because we just need to have a root element.
		      _this._mapMarkedRoutes(_react2.default.createElement(
		        'div',
		        null,
		        _this.props.routes
		      ));
		    } else {
		      _this._mapMarkedRoutes(_this);
		    }

		    _this.sessionChangeListener = _this._setSessionState.bind(_this);

		    _context2.default.setRouter(_this);
		    return _this;
		  }

		  _createClass(Router, [{
		    key: '_mapMarkedRoutes',
		    value: function _mapMarkedRoutes(routes) {
		      var markedRoutes = this.markedRoutes;

		      _utils2.default.deepForEach(routes, function (node, parent) {
		        // Try and map the route node to a marked route.
		        for (var routeName in markedRoutes) {
		          var route = markedRoutes[routeName];
		          if (node.type === route.type) {
		            var markedRoute = markedRoutes[routeName];

		            if (node.type === _HomeRoute2.default) {
		              if (parent.type === _AuthenticatedRoute2.default) {
		                markedRoute = markedRoute.authenticated;
		              } else {
		                markedRoute = markedRoute.notAuthenticated;
		              }
		            }

		            markedRoute.props = node.props;
		            break;
		          }
		        }
		      });
		    }
		  }, {
		    key: 'getHomeRoute',
		    value: function getHomeRoute() {
		      return this.markedRoutes.home.notAuthenticated.props;
		    }
		  }, {
		    key: 'getAuthenticatedHomeRoute',
		    value: function getAuthenticatedHomeRoute() {
		      return this.markedRoutes.home.authenticated.props;
		    }
		  }, {
		    key: 'getLoginRoute',
		    value: function getLoginRoute() {
		      return this.markedRoutes.login.props;
		    }
		  }, {
		    key: 'getLogoutRoute',
		    value: function getLogoutRoute() {
		      return this.markedRoutes.logout.props;
		    }
		  }, {
		    key: '_setSessionState',
		    value: function _setSessionState(user) {
		      this.setState({
		        authenticated: user !== undefined,
		        user: user
		      });
		    }
		  }, {
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      this._setSessionState(_context2.default.sessionStore.get());
		      _context2.default.sessionStore.addListener('changed', this.sessionChangeListener);
		    }
		  }, {
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      _get(Object.getPrototypeOf(Router.prototype), 'componentWillUnmount', this).call(this);
		      _context2.default.sessionStore.removeListener('changed', this.sessionChangeListener);
		    }
		  }, {
		    key: 'getChildContext',
		    value: function getChildContext() {
		      return {
		        authenticated: this.state.authenticated,
		        user: this.state.user
		      };
		    }
		  }]);

		  return Router;
		}(_reactRouter.Router), _class.childContextTypes = {
		  authenticated: _react2.default.PropTypes.bool,
		  user: _react2.default.PropTypes.object
		}, _temp);
		exports.default = Router;

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;
		exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

		var _RouteUtils = __webpack_require__(33);

		Object.defineProperty(exports, 'createRoutes', {
		  enumerable: true,
		  get: function get() {
		    return _RouteUtils.createRoutes;
		  }
		});

		var _PropTypes2 = __webpack_require__(34);

		Object.defineProperty(exports, 'locationShape', {
		  enumerable: true,
		  get: function get() {
		    return _PropTypes2.locationShape;
		  }
		});
		Object.defineProperty(exports, 'routerShape', {
		  enumerable: true,
		  get: function get() {
		    return _PropTypes2.routerShape;
		  }
		});

		var _PatternUtils = __webpack_require__(39);

		Object.defineProperty(exports, 'formatPattern', {
		  enumerable: true,
		  get: function get() {
		    return _PatternUtils.formatPattern;
		  }
		});

		var _Router2 = __webpack_require__(41);

		var _Router3 = _interopRequireDefault(_Router2);

		var _Link2 = __webpack_require__(72);

		var _Link3 = _interopRequireDefault(_Link2);

		var _IndexLink2 = __webpack_require__(73);

		var _IndexLink3 = _interopRequireDefault(_IndexLink2);

		var _withRouter2 = __webpack_require__(74);

		var _withRouter3 = _interopRequireDefault(_withRouter2);

		var _IndexRedirect2 = __webpack_require__(76);

		var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

		var _IndexRoute2 = __webpack_require__(78);

		var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

		var _Redirect2 = __webpack_require__(77);

		var _Redirect3 = _interopRequireDefault(_Redirect2);

		var _Route2 = __webpack_require__(79);

		var _Route3 = _interopRequireDefault(_Route2);

		var _History2 = __webpack_require__(80);

		var _History3 = _interopRequireDefault(_History2);

		var _Lifecycle2 = __webpack_require__(81);

		var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

		var _RouteContext2 = __webpack_require__(82);

		var _RouteContext3 = _interopRequireDefault(_RouteContext2);

		var _useRoutes2 = __webpack_require__(83);

		var _useRoutes3 = _interopRequireDefault(_useRoutes2);

		var _RouterContext2 = __webpack_require__(69);

		var _RouterContext3 = _interopRequireDefault(_RouterContext2);

		var _RoutingContext2 = __webpack_require__(84);

		var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

		var _PropTypes3 = _interopRequireDefault(_PropTypes2);

		var _match2 = __webpack_require__(85);

		var _match3 = _interopRequireDefault(_match2);

		var _useRouterHistory2 = __webpack_require__(89);

		var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

		var _applyRouterMiddleware2 = __webpack_require__(90);

		var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

		var _browserHistory2 = __webpack_require__(91);

		var _browserHistory3 = _interopRequireDefault(_browserHistory2);

		var _hashHistory2 = __webpack_require__(94);

		var _hashHistory3 = _interopRequireDefault(_hashHistory2);

		var _createMemoryHistory2 = __webpack_require__(86);

		var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.Router = _Router3.default; /* components */

		exports.Link = _Link3.default;
		exports.IndexLink = _IndexLink3.default;
		exports.withRouter = _withRouter3.default;

		/* components (configuration) */

		exports.IndexRedirect = _IndexRedirect3.default;
		exports.IndexRoute = _IndexRoute3.default;
		exports.Redirect = _Redirect3.default;
		exports.Route = _Route3.default;

		/* mixins */

		exports.History = _History3.default;
		exports.Lifecycle = _Lifecycle3.default;
		exports.RouteContext = _RouteContext3.default;

		/* utils */

		exports.useRoutes = _useRoutes3.default;
		exports.RouterContext = _RouterContext3.default;
		exports.RoutingContext = _RoutingContext3.default;
		exports.PropTypes = _PropTypes3.default;
		exports.match = _match3.default;
		exports.useRouterHistory = _useRouterHistory3.default;
		exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

		/* histories */

		exports.browserHistory = _browserHistory3.default;
		exports.hashHistory = _hashHistory3.default;
		exports.createMemoryHistory = _createMemoryHistory3.default;

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		exports.isReactChildren = isReactChildren;
		exports.createRouteFromReactElement = createRouteFromReactElement;
		exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
		exports.createRoutes = createRoutes;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function isValidChild(object) {
		  return object == null || _react2.default.isValidElement(object);
		}

		function isReactChildren(object) {
		  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
		}

		function createRoute(defaultProps, props) {
		  return _extends({}, defaultProps, props);
		}

		function createRouteFromReactElement(element) {
		  var type = element.type;
		  var route = createRoute(type.defaultProps, element.props);

		  if (route.children) {
		    var childRoutes = createRoutesFromReactChildren(route.children, route);

		    if (childRoutes.length) route.childRoutes = childRoutes;

		    delete route.children;
		  }

		  return route;
		}

		/**
		 * Creates and returns a routes object from the given ReactChildren. JSX
		 * provides a convenient way to visualize how routes in the hierarchy are
		 * nested.
		 *
		 *   import { Route, createRoutesFromReactChildren } from 'react-router'
		 *
		 *   const routes = createRoutesFromReactChildren(
		 *     <Route component={App}>
		 *       <Route path="home" component={Dashboard}/>
		 *       <Route path="news" component={NewsFeed}/>
		 *     </Route>
		 *   )
		 *
		 * Note: This method is automatically used when you provide <Route> children
		 * to a <Router> component.
		 */
		function createRoutesFromReactChildren(children, parentRoute) {
		  var routes = [];

		  _react2.default.Children.forEach(children, function (element) {
		    if (_react2.default.isValidElement(element)) {
		      // Component classes may have a static create* method.
		      if (element.type.createRouteFromReactElement) {
		        var route = element.type.createRouteFromReactElement(element, parentRoute);

		        if (route) routes.push(route);
		      } else {
		        routes.push(createRouteFromReactElement(element));
		      }
		    }
		  });

		  return routes;
		}

		/**
		 * Creates and returns an array of routes from the given object which
		 * may be a JSX route, a plain object route, or an array of either.
		 */
		function createRoutes(routes) {
		  if (isReactChildren(routes)) {
		    routes = createRoutesFromReactChildren(routes);
		  } else if (routes && !Array.isArray(routes)) {
		    routes = [routes];
		  }

		  return routes;
		}

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;
		exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

		var _react = __webpack_require__(12);

		var _deprecateObjectProperties = __webpack_require__(35);

		var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

		var _InternalPropTypes = __webpack_require__(38);

		var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var func = _react.PropTypes.func;
		var object = _react.PropTypes.object;
		var shape = _react.PropTypes.shape;
		var string = _react.PropTypes.string;
		var routerShape = exports.routerShape = shape({
		  push: func.isRequired,
		  replace: func.isRequired,
		  go: func.isRequired,
		  goBack: func.isRequired,
		  goForward: func.isRequired,
		  setRouteLeaveHook: func.isRequired,
		  isActive: func.isRequired
		});

		var locationShape = exports.locationShape = shape({
		  pathname: string.isRequired,
		  search: string.isRequired,
		  state: object,
		  action: string.isRequired,
		  key: string
		});

		// Deprecated stuff below:

		var falsy = exports.falsy = InternalPropTypes.falsy;
		var history = exports.history = InternalPropTypes.history;
		var location = exports.location = locationShape;
		var component = exports.component = InternalPropTypes.component;
		var components = exports.components = InternalPropTypes.components;
		var route = exports.route = InternalPropTypes.route;
		var routes = exports.routes = InternalPropTypes.routes;
		var router = exports.router = routerShape;

		if (process.env.NODE_ENV !== 'production') {
		  (function () {
		    var deprecatePropType = function deprecatePropType(propType, message) {
		      return function () {
		        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
		        return propType.apply(undefined, arguments);
		      };
		    };

		    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
		      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
		    };

		    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
		      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
		    };

		    exports.falsy = falsy = deprecateInternalPropType(falsy);
		    exports.history = history = deprecateInternalPropType(history);
		    exports.component = component = deprecateInternalPropType(component);
		    exports.components = components = deprecateInternalPropType(components);
		    exports.route = route = deprecateInternalPropType(route);
		    exports.routes = routes = deprecateInternalPropType(routes);

		    exports.location = location = deprecateRenamedPropType(location, 'location');
		    exports.router = router = deprecateRenamedPropType(router, 'router');
		  })();
		}

		var defaultExport = {
		  falsy: falsy,
		  history: history,
		  location: location,
		  component: component,
		  components: components,
		  route: route,
		  // For some reason, routes was never here.
		  router: router
		};

		if (process.env.NODE_ENV !== 'production') {
		  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
		}

		exports.default = defaultExport;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;
		exports.canUseMembrane = undefined;

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var canUseMembrane = exports.canUseMembrane = false;

		// No-op by default.
		var deprecateObjectProperties = function deprecateObjectProperties(object) {
		  return object;
		};

		if (process.env.NODE_ENV !== 'production') {
		  try {
		    if (Object.defineProperty({}, 'x', {
		      get: function get() {
		        return true;
		      }
		    }).x) {
		      exports.canUseMembrane = canUseMembrane = true;
		    }
		    /* eslint-disable no-empty */
		  } catch (e) {}
		  /* eslint-enable no-empty */

		  if (canUseMembrane) {
		    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
		      // Wrap the deprecated object in a membrane to warn on property access.
		      var membrane = {};

		      var _loop = function _loop(prop) {
		        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
		          return 'continue';
		        }

		        if (typeof object[prop] === 'function') {
		          // Can't use fat arrow here because of use of arguments below.
		          membrane[prop] = function () {
		            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
		            return object[prop].apply(object, arguments);
		          };
		          return 'continue';
		        }

		        // These properties are non-enumerable to prevent React dev tools from
		        // seeing them and causing spurious warnings when accessing them. In
		        // principle this could be done with a proxy, but support for the
		        // ownKeys trap on proxies is not universal, even among browsers that
		        // otherwise support proxies.
		        Object.defineProperty(membrane, prop, {
		          get: function get() {
		            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
		            return object[prop];
		          }
		        });
		      };

		      for (var prop in object) {
		        var _ret = _loop(prop);

		        if (_ret === 'continue') continue;
		      }

		      return membrane;
		    };
		  }
		}

		exports.default = deprecateObjectProperties;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;
		exports.default = routerWarning;
		exports._resetWarned = _resetWarned;

		var _warning = __webpack_require__(37);

		var _warning2 = _interopRequireDefault(_warning);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var warned = {};

		function routerWarning(falseToWarn, message) {
		  // Only issue deprecation warnings once.
		  if (message.indexOf('deprecated') !== -1) {
		    if (warned[message]) {
		      return;
		    }

		    warned[message] = true;
		  }

		  message = '[react-router] ' + message;

		  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		    args[_key - 2] = arguments[_key];
		  }

		  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
		}

		function _resetWarned() {
		  warned = {};
		}

	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */

		'use strict';

		/**
		 * Similar to invariant but only logs a warning if the condition is not met.
		 * This can be used to log issues in development environments in critical
		 * paths. Removing the logging code for production environments will keep the
		 * same logic and follow the same code paths.
		 */

		var warning = function() {};

		if (process.env.NODE_ENV !== 'production') {
		  warning = function(condition, format, args) {
		    var len = arguments.length;
		    args = new Array(len > 2 ? len - 2 : 0);
		    for (var key = 2; key < len; key++) {
		      args[key - 2] = arguments[key];
		    }
		    if (format === undefined) {
		      throw new Error(
		        '`warning(condition, format, ...args)` requires a warning ' +
		        'message argument'
		      );
		    }

		    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
		      throw new Error(
		        'The warning format should be able to uniquely identify this ' +
		        'warning. Please, use a more descriptive format than: ' + format
		      );
		    }

		    if (!condition) {
		      var argIndex = 0;
		      var message = 'Warning: ' +
		        format.replace(/%s/g, function() {
		          return args[argIndex++];
		        });
		      if (typeof console !== 'undefined') {
		        console.error(message);
		      }
		      try {
		        // This error was thrown as a convenience so that you can use this stack
		        // to find the callsite that caused this warning to fire.
		        throw new Error(message);
		      } catch(x) {}
		    }
		  };
		}

		module.exports = warning;

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;
		exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
		exports.falsy = falsy;

		var _react = __webpack_require__(12);

		var func = _react.PropTypes.func;
		var object = _react.PropTypes.object;
		var arrayOf = _react.PropTypes.arrayOf;
		var oneOfType = _react.PropTypes.oneOfType;
		var element = _react.PropTypes.element;
		var shape = _react.PropTypes.shape;
		var string = _react.PropTypes.string;
		function falsy(props, propName, componentName) {
		  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
		}

		var history = exports.history = shape({
		  listen: func.isRequired,
		  push: func.isRequired,
		  replace: func.isRequired,
		  go: func.isRequired,
		  goBack: func.isRequired,
		  goForward: func.isRequired
		});

		var component = exports.component = oneOfType([func, string]);
		var components = exports.components = oneOfType([component, object]);
		var route = exports.route = oneOfType([object, element]);
		var routes = exports.routes = oneOfType([route, arrayOf(route)]);

	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;
		exports.compilePattern = compilePattern;
		exports.matchPattern = matchPattern;
		exports.getParamNames = getParamNames;
		exports.getParams = getParams;
		exports.formatPattern = formatPattern;

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function escapeRegExp(string) {
		  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		}

		function _compilePattern(pattern) {
		  var regexpSource = '';
		  var paramNames = [];
		  var tokens = [];

		  var match = void 0,
		      lastIndex = 0,
		      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
		  while (match = matcher.exec(pattern)) {
		    if (match.index !== lastIndex) {
		      tokens.push(pattern.slice(lastIndex, match.index));
		      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
		    }

		    if (match[1]) {
		      regexpSource += '([^/]+)';
		      paramNames.push(match[1]);
		    } else if (match[0] === '**') {
		      regexpSource += '(.*)';
		      paramNames.push('splat');
		    } else if (match[0] === '*') {
		      regexpSource += '(.*?)';
		      paramNames.push('splat');
		    } else if (match[0] === '(') {
		      regexpSource += '(?:';
		    } else if (match[0] === ')') {
		      regexpSource += ')?';
		    }

		    tokens.push(match[0]);

		    lastIndex = matcher.lastIndex;
		  }

		  if (lastIndex !== pattern.length) {
		    tokens.push(pattern.slice(lastIndex, pattern.length));
		    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
		  }

		  return {
		    pattern: pattern,
		    regexpSource: regexpSource,
		    paramNames: paramNames,
		    tokens: tokens
		  };
		}

		var CompiledPatternsCache = Object.create(null);

		function compilePattern(pattern) {
		  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

		  return CompiledPatternsCache[pattern];
		}

		/**
		 * Attempts to match a pattern on the given pathname. Patterns may use
		 * the following special characters:
		 *
		 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
		 *                  captured string is considered a "param"
		 * - ()             Wraps a segment of the URL that is optional
		 * - *              Consumes (non-greedy) all characters up to the next
		 *                  character in the pattern, or to the end of the URL if
		 *                  there is none
		 * - **             Consumes (greedy) all characters up to the next character
		 *                  in the pattern, or to the end of the URL if there is none
		 *
		 *  The function calls callback(error, matched) when finished.
		 * The return value is an object with the following properties:
		 *
		 * - remainingPathname
		 * - paramNames
		 * - paramValues
		 */
		function matchPattern(pattern, pathname) {
		  // Ensure pattern starts with leading slash for consistency with pathname.
		  if (pattern.charAt(0) !== '/') {
		    pattern = '/' + pattern;
		  }

		  var _compilePattern2 = compilePattern(pattern);

		  var regexpSource = _compilePattern2.regexpSource;
		  var paramNames = _compilePattern2.paramNames;
		  var tokens = _compilePattern2.tokens;


		  if (pattern.charAt(pattern.length - 1) !== '/') {
		    regexpSource += '/?'; // Allow optional path separator at end.
		  }

		  // Special-case patterns like '*' for catch-all routes.
		  if (tokens[tokens.length - 1] === '*') {
		    regexpSource += '$';
		  }

		  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
		  if (match == null) {
		    return null;
		  }

		  var matchedPath = match[0];
		  var remainingPathname = pathname.substr(matchedPath.length);

		  if (remainingPathname) {
		    // Require that the match ends at a path separator, if we didn't match
		    // the full path, so any remaining pathname is a new path segment.
		    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
		      return null;
		    }

		    // If there is a remaining pathname, treat the path separator as part of
		    // the remaining pathname for properly continuing the match.
		    remainingPathname = '/' + remainingPathname;
		  }

		  return {
		    remainingPathname: remainingPathname,
		    paramNames: paramNames,
		    paramValues: match.slice(1).map(function (v) {
		      return v && decodeURIComponent(v);
		    })
		  };
		}

		function getParamNames(pattern) {
		  return compilePattern(pattern).paramNames;
		}

		function getParams(pattern, pathname) {
		  var match = matchPattern(pattern, pathname);
		  if (!match) {
		    return null;
		  }

		  var paramNames = match.paramNames;
		  var paramValues = match.paramValues;

		  var params = {};

		  paramNames.forEach(function (paramName, index) {
		    params[paramName] = paramValues[index];
		  });

		  return params;
		}

		/**
		 * Returns a version of the given pattern with params interpolated. Throws
		 * if there is a dynamic segment of the pattern for which there is no param.
		 */
		function formatPattern(pattern, params) {
		  params = params || {};

		  var _compilePattern3 = compilePattern(pattern);

		  var tokens = _compilePattern3.tokens;

		  var parenCount = 0,
		      pathname = '',
		      splatIndex = 0;

		  var token = void 0,
		      paramName = void 0,
		      paramValue = void 0;
		  for (var i = 0, len = tokens.length; i < len; ++i) {
		    token = tokens[i];

		    if (token === '*' || token === '**') {
		      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

		      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

		      if (paramValue != null) pathname += encodeURI(paramValue);
		    } else if (token === '(') {
		      parenCount += 1;
		    } else if (token === ')') {
		      parenCount -= 1;
		    } else if (token.charAt(0) === ':') {
		      paramName = token.substring(1);
		      paramValue = params[paramName];

		      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

		      if (paramValue != null) pathname += encodeURIComponent(paramValue);
		    } else {
		      pathname += token;
		    }
		  }

		  return pathname.replace(/\/+/g, '/');
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */

		'use strict';

		/**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */

		var invariant = function(condition, format, a, b, c, d, e, f) {
		  if (process.env.NODE_ENV !== 'production') {
		    if (format === undefined) {
		      throw new Error('invariant requires an error message argument');
		    }
		  }

		  if (!condition) {
		    var error;
		    if (format === undefined) {
		      error = new Error(
		        'Minified exception occurred; use the non-minified dev environment ' +
		        'for the full error message and additional helpful warnings.'
		      );
		    } else {
		      var args = [a, b, c, d, e, f];
		      var argIndex = 0;
		      error = new Error(
		        format.replace(/%s/g, function() { return args[argIndex++]; })
		      );
		      error.name = 'Invariant Violation';
		    }

		    error.framesToPop = 1; // we don't care about invariant's own frame
		    throw error;
		  }
		};

		module.exports = invariant;

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createHashHistory = __webpack_require__(42);

		var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

		var _useQueries = __webpack_require__(58);

		var _useQueries2 = _interopRequireDefault(_useQueries);

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _createTransitionManager = __webpack_require__(61);

		var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

		var _InternalPropTypes = __webpack_require__(38);

		var _RouterContext = __webpack_require__(69);

		var _RouterContext2 = _interopRequireDefault(_RouterContext);

		var _RouteUtils = __webpack_require__(33);

		var _RouterUtils = __webpack_require__(71);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

		function isDeprecatedHistory(history) {
		  return !history || !history.__v2_compatible__;
		}

		/* istanbul ignore next: sanity check */
		function isUnsupportedHistory(history) {
		  // v3 histories expose getCurrentLocation, but aren't currently supported.
		  return history && history.getCurrentLocation;
		}

		var _React$PropTypes = _react2.default.PropTypes;
		var func = _React$PropTypes.func;
		var object = _React$PropTypes.object;

		/**
		 * A <Router> is a high-level API for automatically setting up
		 * a router that renders a <RouterContext> with all the props
		 * it needs each time the URL changes.
		 */

		var Router = _react2.default.createClass({
		  displayName: 'Router',


		  propTypes: {
		    history: object,
		    children: _InternalPropTypes.routes,
		    routes: _InternalPropTypes.routes, // alias for children
		    render: func,
		    createElement: func,
		    onError: func,
		    onUpdate: func,

		    // Deprecated:
		    parseQueryString: func,
		    stringifyQuery: func,

		    // PRIVATE: For client-side rehydration of server match.
		    matchContext: object
		  },

		  getDefaultProps: function getDefaultProps() {
		    return {
		      render: function render(props) {
		        return _react2.default.createElement(_RouterContext2.default, props);
		      }
		    };
		  },
		  getInitialState: function getInitialState() {
		    return {
		      location: null,
		      routes: null,
		      params: null,
		      components: null
		    };
		  },
		  handleError: function handleError(error) {
		    if (this.props.onError) {
		      this.props.onError.call(this, error);
		    } else {
		      // Throw errors by default so we don't silently swallow them!
		      throw error; // This error probably occurred in getChildRoutes or getComponents.
		    }
		  },
		  componentWillMount: function componentWillMount() {
		    var _this = this;

		    var _props = this.props;
		    var parseQueryString = _props.parseQueryString;
		    var stringifyQuery = _props.stringifyQuery;

		    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

		    var _createRouterObjects = this.createRouterObjects();

		    var history = _createRouterObjects.history;
		    var transitionManager = _createRouterObjects.transitionManager;
		    var router = _createRouterObjects.router;


		    this._unlisten = transitionManager.listen(function (error, state) {
		      if (error) {
		        _this.handleError(error);
		      } else {
		        _this.setState(state, _this.props.onUpdate);
		      }
		    });

		    this.history = history;
		    this.router = router;
		  },
		  createRouterObjects: function createRouterObjects() {
		    var matchContext = this.props.matchContext;

		    if (matchContext) {
		      return matchContext;
		    }

		    var history = this.props.history;
		    var _props2 = this.props;
		    var routes = _props2.routes;
		    var children = _props2.children;


		    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

		    if (isDeprecatedHistory(history)) {
		      history = this.wrapDeprecatedHistory(history);
		    }

		    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
		    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
		    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

		    return { history: routingHistory, transitionManager: transitionManager, router: router };
		  },
		  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
		    var _props3 = this.props;
		    var parseQueryString = _props3.parseQueryString;
		    var stringifyQuery = _props3.stringifyQuery;


		    var createHistory = void 0;
		    if (history) {
		      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
		      createHistory = function createHistory() {
		        return history;
		      };
		    } else {
		      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
		      createHistory = _createHashHistory2.default;
		    }

		    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
		  },


		  /* istanbul ignore next: sanity check */
		  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

		    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
		  },
		  componentWillUnmount: function componentWillUnmount() {
		    if (this._unlisten) this._unlisten();
		  },
		  render: function render() {
		    var _state = this.state;
		    var location = _state.location;
		    var routes = _state.routes;
		    var params = _state.params;
		    var components = _state.components;
		    var _props4 = this.props;
		    var createElement = _props4.createElement;
		    var render = _props4.render;

		    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

		    if (location == null) return null; // Async match

		    // Only forward non-Router-specific props to routing context, as those are
		    // the only ones that might be custom routing context props.
		    Object.keys(Router.propTypes).forEach(function (propType) {
		      return delete props[propType];
		    });

		    return render(_extends({}, props, {
		      history: this.history,
		      router: this.router,
		      location: location,
		      routes: routes,
		      params: params,
		      components: components,
		      createElement: createElement
		    }));
		  }
		});

		exports.default = Router;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _Actions = __webpack_require__(44);

		var _PathUtils = __webpack_require__(45);

		var _ExecutionEnvironment = __webpack_require__(46);

		var _DOMUtils = __webpack_require__(47);

		var _DOMStateStorage = __webpack_require__(48);

		var _createDOMHistory = __webpack_require__(49);

		var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

		function isAbsolutePath(path) {
		  return typeof path === 'string' && path.charAt(0) === '/';
		}

		function ensureSlash() {
		  var path = _DOMUtils.getHashPath();

		  if (isAbsolutePath(path)) return true;

		  _DOMUtils.replaceHashPath('/' + path);

		  return false;
		}

		function addQueryStringValueToPath(path, key, value) {
		  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
		}

		function stripQueryStringValueFromPath(path, key) {
		  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
		}

		function getQueryStringValueFromPath(path, key) {
		  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
		  return match && match[1];
		}

		var DefaultQueryKey = '_k';

		function createHashHistory() {
		  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

		  var queryKey = options.queryKey;

		  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

		  function getCurrentLocation() {
		    var path = _DOMUtils.getHashPath();

		    var key = undefined,
		        state = undefined;
		    if (queryKey) {
		      key = getQueryStringValueFromPath(path, queryKey);
		      path = stripQueryStringValueFromPath(path, queryKey);

		      if (key) {
		        state = _DOMStateStorage.readState(key);
		      } else {
		        state = null;
		        key = history.createKey();
		        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
		      }
		    } else {
		      key = state = null;
		    }

		    var location = _PathUtils.parsePath(path);

		    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
		  }

		  function startHashChangeListener(_ref) {
		    var transitionTo = _ref.transitionTo;

		    function hashChangeListener() {
		      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

		      transitionTo(getCurrentLocation());
		    }

		    ensureSlash();
		    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

		    return function () {
		      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
		    };
		  }

		  function finishTransition(location) {
		    var basename = location.basename;
		    var pathname = location.pathname;
		    var search = location.search;
		    var state = location.state;
		    var action = location.action;
		    var key = location.key;

		    if (action === _Actions.POP) return; // Nothing to do.

		    var path = (basename || '') + pathname + search;

		    if (queryKey) {
		      path = addQueryStringValueToPath(path, queryKey, key);
		      _DOMStateStorage.saveState(key, state);
		    } else {
		      // Drop key and state.
		      location.key = location.state = null;
		    }

		    var currentHash = _DOMUtils.getHashPath();

		    if (action === _Actions.PUSH) {
		      if (currentHash !== path) {
		        window.location.hash = path;
		      } else {
		        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
		      }
		    } else if (currentHash !== path) {
		      // REPLACE
		      _DOMUtils.replaceHashPath(path);
		    }
		  }

		  var history = _createDOMHistory2['default'](_extends({}, options, {
		    getCurrentLocation: getCurrentLocation,
		    finishTransition: finishTransition,
		    saveState: _DOMStateStorage.saveState
		  }));

		  var listenerCount = 0,
		      stopHashChangeListener = undefined;

		  function listenBefore(listener) {
		    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

		    var unlisten = history.listenBefore(listener);

		    return function () {
		      unlisten();

		      if (--listenerCount === 0) stopHashChangeListener();
		    };
		  }

		  function listen(listener) {
		    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

		    var unlisten = history.listen(listener);

		    return function () {
		      unlisten();

		      if (--listenerCount === 0) stopHashChangeListener();
		    };
		  }

		  function push(location) {
		    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

		    history.push(location);
		  }

		  function replace(location) {
		    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

		    history.replace(location);
		  }

		  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

		  function go(n) {
		    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

		    history.go(n);
		  }

		  function createHref(path) {
		    return '#' + history.createHref(path);
		  }

		  // deprecated
		  function registerTransitionHook(hook) {
		    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

		    history.registerTransitionHook(hook);
		  }

		  // deprecated
		  function unregisterTransitionHook(hook) {
		    history.unregisterTransitionHook(hook);

		    if (--listenerCount === 0) stopHashChangeListener();
		  }

		  // deprecated
		  function pushState(state, path) {
		    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

		    history.pushState(state, path);
		  }

		  // deprecated
		  function replaceState(state, path) {
		    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

		    history.replaceState(state, path);
		  }

		  return _extends({}, history, {
		    listenBefore: listenBefore,
		    listen: listen,
		    push: push,
		    replace: replace,
		    go: go,
		    createHref: createHref,

		    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
		    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
		    pushState: pushState, // deprecated - warning is in createHistory
		    replaceState: replaceState // deprecated - warning is in createHistory
		  });
		}

		exports['default'] = createHashHistory;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/**
		 * Copyright 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */

		'use strict';

		/**
		 * Similar to invariant but only logs a warning if the condition is not met.
		 * This can be used to log issues in development environments in critical
		 * paths. Removing the logging code for production environments will keep the
		 * same logic and follow the same code paths.
		 */

		var warning = function() {};

		if (process.env.NODE_ENV !== 'production') {
		  warning = function(condition, format, args) {
		    var len = arguments.length;
		    args = new Array(len > 2 ? len - 2 : 0);
		    for (var key = 2; key < len; key++) {
		      args[key - 2] = arguments[key];
		    }
		    if (format === undefined) {
		      throw new Error(
		        '`warning(condition, format, ...args)` requires a warning ' +
		        'message argument'
		      );
		    }

		    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
		      throw new Error(
		        'The warning format should be able to uniquely identify this ' +
		        'warning. Please, use a more descriptive format than: ' + format
		      );
		    }

		    if (!condition) {
		      var argIndex = 0;
		      var message = 'Warning: ' +
		        format.replace(/%s/g, function() {
		          return args[argIndex++];
		        });
		      if (typeof console !== 'undefined') {
		        console.error(message);
		      }
		      try {
		        // This error was thrown as a convenience so that you can use this stack
		        // to find the callsite that caused this warning to fire.
		        throw new Error(message);
		      } catch(x) {}
		    }
		  };
		}

		module.exports = warning;

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 44 */
	/***/ function(module, exports) {

		/**
		 * Indicates that navigation was caused by a call to history.push.
		 */
		'use strict';

		exports.__esModule = true;
		var PUSH = 'PUSH';

		exports.PUSH = PUSH;
		/**
		 * Indicates that navigation was caused by a call to history.replace.
		 */
		var REPLACE = 'REPLACE';

		exports.REPLACE = REPLACE;
		/**
		 * Indicates that navigation was caused by some other action such
		 * as using a browser's back/forward buttons and/or manually manipulating
		 * the URL in a browser's location bar. This is the default.
		 *
		 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
		 * for more information.
		 */
		var POP = 'POP';

		exports.POP = POP;
		exports['default'] = {
		  PUSH: PUSH,
		  REPLACE: REPLACE,
		  POP: POP
		};

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;
		exports.extractPath = extractPath;
		exports.parsePath = parsePath;

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		function extractPath(string) {
		  var match = string.match(/^https?:\/\/[^\/]*/);

		  if (match == null) return string;

		  return string.substring(match[0].length);
		}

		function parsePath(path) {
		  var pathname = extractPath(path);
		  var search = '';
		  var hash = '';

		  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

		  var hashIndex = pathname.indexOf('#');
		  if (hashIndex !== -1) {
		    hash = pathname.substring(hashIndex);
		    pathname = pathname.substring(0, hashIndex);
		  }

		  var searchIndex = pathname.indexOf('?');
		  if (searchIndex !== -1) {
		    search = pathname.substring(searchIndex);
		    pathname = pathname.substring(0, searchIndex);
		  }

		  if (pathname === '') pathname = '/';

		  return {
		    pathname: pathname,
		    search: search,
		    hash: hash
		  };
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 46 */
	/***/ function(module, exports) {

		'use strict';

		exports.__esModule = true;
		var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
		exports.canUseDOM = canUseDOM;

	/***/ },
	/* 47 */
	/***/ function(module, exports) {

		'use strict';

		exports.__esModule = true;
		exports.addEventListener = addEventListener;
		exports.removeEventListener = removeEventListener;
		exports.getHashPath = getHashPath;
		exports.replaceHashPath = replaceHashPath;
		exports.getWindowPath = getWindowPath;
		exports.go = go;
		exports.getUserConfirmation = getUserConfirmation;
		exports.supportsHistory = supportsHistory;
		exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

		function addEventListener(node, event, listener) {
		  if (node.addEventListener) {
		    node.addEventListener(event, listener, false);
		  } else {
		    node.attachEvent('on' + event, listener);
		  }
		}

		function removeEventListener(node, event, listener) {
		  if (node.removeEventListener) {
		    node.removeEventListener(event, listener, false);
		  } else {
		    node.detachEvent('on' + event, listener);
		  }
		}

		function getHashPath() {
		  // We can't use window.location.hash here because it's not
		  // consistent across browsers - Firefox will pre-decode it!
		  return window.location.href.split('#')[1] || '';
		}

		function replaceHashPath(path) {
		  window.location.replace(window.location.pathname + window.location.search + '#' + path);
		}

		function getWindowPath() {
		  return window.location.pathname + window.location.search + window.location.hash;
		}

		function go(n) {
		  if (n) window.history.go(n);
		}

		function getUserConfirmation(message, callback) {
		  callback(window.confirm(message));
		}

		/**
		 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
		 *
		 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
		 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
		 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
		 */

		function supportsHistory() {
		  var ua = navigator.userAgent;
		  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
		    return false;
		  }
		  return window.history && 'pushState' in window.history;
		}

		/**
		 * Returns false if using go(n) with hash history causes a full page reload.
		 */

		function supportsGoWithoutReloadUsingHash() {
		  var ua = navigator.userAgent;
		  return ua.indexOf('Firefox') === -1;
		}

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
		'use strict';

		exports.__esModule = true;
		exports.saveState = saveState;
		exports.readState = readState;

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		var KeyPrefix = '@@History/';
		var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

		var SecurityError = 'SecurityError';

		function createKey(key) {
		  return KeyPrefix + key;
		}

		function saveState(key, state) {
		  try {
		    if (state == null) {
		      window.sessionStorage.removeItem(createKey(key));
		    } else {
		      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
		    }
		  } catch (error) {
		    if (error.name === SecurityError) {
		      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
		      // attempt to access window.sessionStorage.
		      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

		      return;
		    }

		    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
		      // Safari "private mode" throws QuotaExceededError.
		      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

		      return;
		    }

		    throw error;
		  }
		}

		function readState(key) {
		  var json = undefined;
		  try {
		    json = window.sessionStorage.getItem(createKey(key));
		  } catch (error) {
		    if (error.name === SecurityError) {
		      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
		      // attempt to access window.sessionStorage.
		      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

		      return null;
		    }
		  }

		  if (json) {
		    try {
		      return JSON.parse(json);
		    } catch (error) {
		      // Ignore invalid JSON.
		    }
		  }

		  return null;
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _ExecutionEnvironment = __webpack_require__(46);

		var _DOMUtils = __webpack_require__(47);

		var _createHistory = __webpack_require__(50);

		var _createHistory2 = _interopRequireDefault(_createHistory);

		function createDOMHistory(options) {
		  var history = _createHistory2['default'](_extends({
		    getUserConfirmation: _DOMUtils.getUserConfirmation
		  }, options, {
		    go: _DOMUtils.go
		  }));

		  function listen(listener) {
		    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

		    return history.listen(listener);
		  }

		  return _extends({}, history, {
		    listen: listen
		  });
		}

		exports['default'] = createDOMHistory;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		var _deepEqual = __webpack_require__(51);

		var _deepEqual2 = _interopRequireDefault(_deepEqual);

		var _PathUtils = __webpack_require__(45);

		var _AsyncUtils = __webpack_require__(54);

		var _Actions = __webpack_require__(44);

		var _createLocation2 = __webpack_require__(55);

		var _createLocation3 = _interopRequireDefault(_createLocation2);

		var _runTransitionHook = __webpack_require__(56);

		var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

		var _deprecate = __webpack_require__(57);

		var _deprecate2 = _interopRequireDefault(_deprecate);

		function createRandomKey(length) {
		  return Math.random().toString(36).substr(2, length);
		}

		function locationsAreEqual(a, b) {
		  return a.pathname === b.pathname && a.search === b.search &&
		  //a.action === b.action && // Different action !== location change.
		  a.key === b.key && _deepEqual2['default'](a.state, b.state);
		}

		var DefaultKeyLength = 6;

		function createHistory() {
		  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		  var getCurrentLocation = options.getCurrentLocation;
		  var finishTransition = options.finishTransition;
		  var saveState = options.saveState;
		  var go = options.go;
		  var getUserConfirmation = options.getUserConfirmation;
		  var keyLength = options.keyLength;

		  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

		  var transitionHooks = [];

		  function listenBefore(hook) {
		    transitionHooks.push(hook);

		    return function () {
		      transitionHooks = transitionHooks.filter(function (item) {
		        return item !== hook;
		      });
		    };
		  }

		  var allKeys = [];
		  var changeListeners = [];
		  var location = undefined;

		  function getCurrent() {
		    if (pendingLocation && pendingLocation.action === _Actions.POP) {
		      return allKeys.indexOf(pendingLocation.key);
		    } else if (location) {
		      return allKeys.indexOf(location.key);
		    } else {
		      return -1;
		    }
		  }

		  function updateLocation(newLocation) {
		    var current = getCurrent();

		    location = newLocation;

		    if (location.action === _Actions.PUSH) {
		      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
		    } else if (location.action === _Actions.REPLACE) {
		      allKeys[current] = location.key;
		    }

		    changeListeners.forEach(function (listener) {
		      listener(location);
		    });
		  }

		  function listen(listener) {
		    changeListeners.push(listener);

		    if (location) {
		      listener(location);
		    } else {
		      var _location = getCurrentLocation();
		      allKeys = [_location.key];
		      updateLocation(_location);
		    }

		    return function () {
		      changeListeners = changeListeners.filter(function (item) {
		        return item !== listener;
		      });
		    };
		  }

		  function confirmTransitionTo(location, callback) {
		    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
		      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
		        if (result != null) {
		          done(result);
		        } else {
		          next();
		        }
		      });
		    }, function (message) {
		      if (getUserConfirmation && typeof message === 'string') {
		        getUserConfirmation(message, function (ok) {
		          callback(ok !== false);
		        });
		      } else {
		        callback(message !== false);
		      }
		    });
		  }

		  var pendingLocation = undefined;

		  function transitionTo(nextLocation) {
		    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

		    pendingLocation = nextLocation;

		    confirmTransitionTo(nextLocation, function (ok) {
		      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

		      if (ok) {
		        // treat PUSH to current path like REPLACE to be consistent with browsers
		        if (nextLocation.action === _Actions.PUSH) {
		          var prevPath = createPath(location);
		          var nextPath = createPath(nextLocation);

		          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
		        }

		        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
		      } else if (location && nextLocation.action === _Actions.POP) {
		        var prevIndex = allKeys.indexOf(location.key);
		        var nextIndex = allKeys.indexOf(nextLocation.key);

		        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
		      }
		    });
		  }

		  function push(location) {
		    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
		  }

		  function replace(location) {
		    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
		  }

		  function goBack() {
		    go(-1);
		  }

		  function goForward() {
		    go(1);
		  }

		  function createKey() {
		    return createRandomKey(keyLength);
		  }

		  function createPath(location) {
		    if (location == null || typeof location === 'string') return location;

		    var pathname = location.pathname;
		    var search = location.search;
		    var hash = location.hash;

		    var result = pathname;

		    if (search) result += search;

		    if (hash) result += hash;

		    return result;
		  }

		  function createHref(location) {
		    return createPath(location);
		  }

		  function createLocation(location, action) {
		    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

		    if (typeof action === 'object') {
		      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

		      if (typeof location === 'string') location = _PathUtils.parsePath(location);

		      location = _extends({}, location, { state: action });

		      action = key;
		      key = arguments[3] || createKey();
		    }

		    return _createLocation3['default'](location, action, key);
		  }

		  // deprecated
		  function setState(state) {
		    if (location) {
		      updateLocationState(location, state);
		      updateLocation(location);
		    } else {
		      updateLocationState(getCurrentLocation(), state);
		    }
		  }

		  function updateLocationState(location, state) {
		    location.state = _extends({}, location.state, state);
		    saveState(location.key, location.state);
		  }

		  // deprecated
		  function registerTransitionHook(hook) {
		    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
		  }

		  // deprecated
		  function unregisterTransitionHook(hook) {
		    transitionHooks = transitionHooks.filter(function (item) {
		      return item !== hook;
		    });
		  }

		  // deprecated
		  function pushState(state, path) {
		    if (typeof path === 'string') path = _PathUtils.parsePath(path);

		    push(_extends({ state: state }, path));
		  }

		  // deprecated
		  function replaceState(state, path) {
		    if (typeof path === 'string') path = _PathUtils.parsePath(path);

		    replace(_extends({ state: state }, path));
		  }

		  return {
		    listenBefore: listenBefore,
		    listen: listen,
		    transitionTo: transitionTo,
		    push: push,
		    replace: replace,
		    go: go,
		    goBack: goBack,
		    goForward: goForward,
		    createKey: createKey,
		    createPath: createPath,
		    createHref: createHref,
		    createLocation: createLocation,

		    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
		    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
		    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
		    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
		    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
		  };
		}

		exports['default'] = createHistory;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		var pSlice = Array.prototype.slice;
		var objectKeys = __webpack_require__(52);
		var isArguments = __webpack_require__(53);

		var deepEqual = module.exports = function (actual, expected, opts) {
		  if (!opts) opts = {};
		  // 7.1. All identical values are equivalent, as determined by ===.
		  if (actual === expected) {
		    return true;

		  } else if (actual instanceof Date && expected instanceof Date) {
		    return actual.getTime() === expected.getTime();

		  // 7.3. Other pairs that do not both pass typeof value == 'object',
		  // equivalence is determined by ==.
		  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
		    return opts.strict ? actual === expected : actual == expected;

		  // 7.4. For all other Object pairs, including Array objects, equivalence is
		  // determined by having the same number of owned properties (as verified
		  // with Object.prototype.hasOwnProperty.call), the same set of keys
		  // (although not necessarily the same order), equivalent values for every
		  // corresponding key, and an identical 'prototype' property. Note: this
		  // accounts for both named and indexed properties on Arrays.
		  } else {
		    return objEquiv(actual, expected, opts);
		  }
		}

		function isUndefinedOrNull(value) {
		  return value === null || value === undefined;
		}

		function isBuffer (x) {
		  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
		  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
		    return false;
		  }
		  if (x.length > 0 && typeof x[0] !== 'number') return false;
		  return true;
		}

		function objEquiv(a, b, opts) {
		  var i, key;
		  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
		    return false;
		  // an identical 'prototype' property.
		  if (a.prototype !== b.prototype) return false;
		  //~~~I've managed to break Object.keys through screwy arguments passing.
		  //   Converting to array solves the problem.
		  if (isArguments(a)) {
		    if (!isArguments(b)) {
		      return false;
		    }
		    a = pSlice.call(a);
		    b = pSlice.call(b);
		    return deepEqual(a, b, opts);
		  }
		  if (isBuffer(a)) {
		    if (!isBuffer(b)) {
		      return false;
		    }
		    if (a.length !== b.length) return false;
		    for (i = 0; i < a.length; i++) {
		      if (a[i] !== b[i]) return false;
		    }
		    return true;
		  }
		  try {
		    var ka = objectKeys(a),
		        kb = objectKeys(b);
		  } catch (e) {//happens when one is a string literal and the other isn't
		    return false;
		  }
		  // having the same number of owned properties (keys incorporates
		  // hasOwnProperty)
		  if (ka.length != kb.length)
		    return false;
		  //the same set of keys (although not necessarily the same order),
		  ka.sort();
		  kb.sort();
		  //~~~cheap key test
		  for (i = ka.length - 1; i >= 0; i--) {
		    if (ka[i] != kb[i])
		      return false;
		  }
		  //equivalent values for every corresponding key, and
		  //~~~possibly expensive deep test
		  for (i = ka.length - 1; i >= 0; i--) {
		    key = ka[i];
		    if (!deepEqual(a[key], b[key], opts)) return false;
		  }
		  return typeof a === typeof b;
		}


	/***/ },
	/* 52 */
	/***/ function(module, exports) {

		exports = module.exports = typeof Object.keys === 'function'
		  ? Object.keys : shim;

		exports.shim = shim;
		function shim (obj) {
		  var keys = [];
		  for (var key in obj) keys.push(key);
		  return keys;
		}


	/***/ },
	/* 53 */
	/***/ function(module, exports) {

		var supportsArgumentsClass = (function(){
		  return Object.prototype.toString.call(arguments)
		})() == '[object Arguments]';

		exports = module.exports = supportsArgumentsClass ? supported : unsupported;

		exports.supported = supported;
		function supported(object) {
		  return Object.prototype.toString.call(object) == '[object Arguments]';
		};

		exports.unsupported = unsupported;
		function unsupported(object){
		  return object &&
		    typeof object == 'object' &&
		    typeof object.length == 'number' &&
		    Object.prototype.hasOwnProperty.call(object, 'callee') &&
		    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
		    false;
		};


	/***/ },
	/* 54 */
	/***/ function(module, exports) {

		"use strict";

		exports.__esModule = true;
		var _slice = Array.prototype.slice;
		exports.loopAsync = loopAsync;

		function loopAsync(turns, work, callback) {
		  var currentTurn = 0,
		      isDone = false;
		  var sync = false,
		      hasNext = false,
		      doneArgs = undefined;

		  function done() {
		    isDone = true;
		    if (sync) {
		      // Iterate instead of recursing if possible.
		      doneArgs = [].concat(_slice.call(arguments));
		      return;
		    }

		    callback.apply(this, arguments);
		  }

		  function next() {
		    if (isDone) {
		      return;
		    }

		    hasNext = true;
		    if (sync) {
		      // Iterate instead of recursing if possible.
		      return;
		    }

		    sync = true;

		    while (!isDone && currentTurn < turns && hasNext) {
		      hasNext = false;
		      work.call(this, currentTurn++, next, done);
		    }

		    sync = false;

		    if (isDone) {
		      // This means the loop finished synchronously.
		      callback.apply(this, doneArgs);
		      return;
		    }

		    if (currentTurn >= turns && hasNext) {
		      isDone = true;
		      callback();
		    }
		  }

		  next();
		}

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		var _Actions = __webpack_require__(44);

		var _PathUtils = __webpack_require__(45);

		function createLocation() {
		  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
		  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
		  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

		  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

		  if (typeof location === 'string') location = _PathUtils.parsePath(location);

		  if (typeof action === 'object') {
		    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

		    location = _extends({}, location, { state: action });

		    action = key || _Actions.POP;
		    key = _fourthArg;
		  }

		  var pathname = location.pathname || '/';
		  var search = location.search || '';
		  var hash = location.hash || '';
		  var state = location.state || null;

		  return {
		    pathname: pathname,
		    search: search,
		    hash: hash,
		    state: state,
		    action: action,
		    key: key
		  };
		}

		exports['default'] = createLocation;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		function runTransitionHook(hook, location, callback) {
		  var result = hook(location, callback);

		  if (hook.length < 2) {
		    // Assume the hook runs synchronously and automatically
		    // call the callback with the return value.
		    callback(result);
		  } else {
		    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
		  }
		}

		exports['default'] = runTransitionHook;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		function deprecate(fn, message) {
		  return function () {
		    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
		    return fn.apply(this, arguments);
		  };
		}

		exports['default'] = deprecate;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		var _queryString = __webpack_require__(59);

		var _runTransitionHook = __webpack_require__(56);

		var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

		var _PathUtils = __webpack_require__(45);

		var _deprecate = __webpack_require__(57);

		var _deprecate2 = _interopRequireDefault(_deprecate);

		var SEARCH_BASE_KEY = '$searchBase';

		function defaultStringifyQuery(query) {
		  return _queryString.stringify(query).replace(/%20/g, '+');
		}

		var defaultParseQueryString = _queryString.parse;

		function isNestedObject(object) {
		  for (var p in object) {
		    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
		  }return false;
		}

		/**
		 * Returns a new createHistory function that may be used to create
		 * history objects that know how to handle URL queries.
		 */
		function useQueries(createHistory) {
		  return function () {
		    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		    var history = createHistory(options);

		    var stringifyQuery = options.stringifyQuery;
		    var parseQueryString = options.parseQueryString;

		    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

		    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

		    function addQuery(location) {
		      if (location.query == null) {
		        var search = location.search;

		        location.query = parseQueryString(search.substring(1));
		        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
		      }

		      // TODO: Instead of all the book-keeping here, this should just strip the
		      // stringified query from the search.

		      return location;
		    }

		    function appendQuery(location, query) {
		      var _extends2;

		      var searchBaseSpec = location[SEARCH_BASE_KEY];
		      var queryString = query ? stringifyQuery(query) : '';
		      if (!searchBaseSpec && !queryString) {
		        return location;
		      }

		      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

		      if (typeof location === 'string') location = _PathUtils.parsePath(location);

		      var searchBase = undefined;
		      if (searchBaseSpec && location.search === searchBaseSpec.search) {
		        searchBase = searchBaseSpec.searchBase;
		      } else {
		        searchBase = location.search || '';
		      }

		      var search = searchBase;
		      if (queryString) {
		        search += (search ? '&' : '?') + queryString;
		      }

		      return _extends({}, location, (_extends2 = {
		        search: search
		      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
		    }

		    // Override all read methods with query-aware versions.
		    function listenBefore(hook) {
		      return history.listenBefore(function (location, callback) {
		        _runTransitionHook2['default'](hook, addQuery(location), callback);
		      });
		    }

		    function listen(listener) {
		      return history.listen(function (location) {
		        listener(addQuery(location));
		      });
		    }

		    // Override all write methods with query-aware versions.
		    function push(location) {
		      history.push(appendQuery(location, location.query));
		    }

		    function replace(location) {
		      history.replace(appendQuery(location, location.query));
		    }

		    function createPath(location, query) {
		      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

		      return history.createPath(appendQuery(location, query || location.query));
		    }

		    function createHref(location, query) {
		      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

		      return history.createHref(appendQuery(location, query || location.query));
		    }

		    function createLocation(location) {
		      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
		      if (location.query) {
		        fullLocation.query = location.query;
		      }
		      return addQuery(fullLocation);
		    }

		    // deprecated
		    function pushState(state, path, query) {
		      if (typeof path === 'string') path = _PathUtils.parsePath(path);

		      push(_extends({ state: state }, path, { query: query }));
		    }

		    // deprecated
		    function replaceState(state, path, query) {
		      if (typeof path === 'string') path = _PathUtils.parsePath(path);

		      replace(_extends({ state: state }, path, { query: query }));
		    }

		    return _extends({}, history, {
		      listenBefore: listenBefore,
		      listen: listen,
		      push: push,
		      replace: replace,
		      createPath: createPath,
		      createHref: createHref,
		      createLocation: createLocation,

		      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
		      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
		    });
		  };
		}

		exports['default'] = useQueries;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var strictUriEncode = __webpack_require__(60);

		exports.extract = function (str) {
			return str.split('?')[1] || '';
		};

		exports.parse = function (str) {
			if (typeof str !== 'string') {
				return {};
			}

			str = str.trim().replace(/^(\?|#|&)/, '');

			if (!str) {
				return {};
			}

			return str.split('&').reduce(function (ret, param) {
				var parts = param.replace(/\+/g, ' ').split('=');
				// Firefox (pre 40) decodes `%3D` to `=`
				// https://github.com/sindresorhus/query-string/pull/37
				var key = parts.shift();
				var val = parts.length > 0 ? parts.join('=') : undefined;

				key = decodeURIComponent(key);

				// missing `=` should be `null`:
				// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
				val = val === undefined ? null : decodeURIComponent(val);

				if (!ret.hasOwnProperty(key)) {
					ret[key] = val;
				} else if (Array.isArray(ret[key])) {
					ret[key].push(val);
				} else {
					ret[key] = [ret[key], val];
				}

				return ret;
			}, {});
		};

		exports.stringify = function (obj) {
			return obj ? Object.keys(obj).sort().map(function (key) {
				var val = obj[key];

				if (val === undefined) {
					return '';
				}

				if (val === null) {
					return key;
				}

				if (Array.isArray(val)) {
					return val.slice().sort().map(function (val2) {
						return strictUriEncode(key) + '=' + strictUriEncode(val2);
					}).join('&');
				}

				return strictUriEncode(key) + '=' + strictUriEncode(val);
			}).filter(function (x) {
				return x.length > 0;
			}).join('&') : '';
		};


	/***/ },
	/* 60 */
	/***/ function(module, exports) {

		'use strict';
		module.exports = function (str) {
			return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
				return '%' + c.charCodeAt(0).toString(16).toUpperCase();
			});
		};


	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		exports.default = createTransitionManager;

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		var _Actions = __webpack_require__(44);

		var _computeChangedRoutes2 = __webpack_require__(62);

		var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

		var _TransitionUtils = __webpack_require__(63);

		var _isActive2 = __webpack_require__(65);

		var _isActive3 = _interopRequireDefault(_isActive2);

		var _getComponents = __webpack_require__(66);

		var _getComponents2 = _interopRequireDefault(_getComponents);

		var _matchRoutes = __webpack_require__(68);

		var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function hasAnyProperties(object) {
		  for (var p in object) {
		    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
		  }return false;
		}

		function createTransitionManager(history, routes) {
		  var state = {};

		  // Signature should be (location, indexOnly), but needs to support (path,
		  // query, indexOnly)
		  function isActive(location) {
		    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
		    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

		    var indexOnly = void 0;
		    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
		      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
		      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
		      indexOnly = deprecatedIndexOnly || false;
		    } else {
		      location = history.createLocation(location);
		      indexOnly = indexOnlyOrDeprecatedQuery;
		    }

		    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
		  }

		  function createLocationFromRedirectInfo(location) {
		    return history.createLocation(location, _Actions.REPLACE);
		  }

		  var partialNextState = void 0;

		  function match(location, callback) {
		    if (partialNextState && partialNextState.location === location) {
		      // Continue from where we left off.
		      finishMatch(partialNextState, callback);
		    } else {
		      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
		        if (error) {
		          callback(error);
		        } else if (nextState) {
		          finishMatch(_extends({}, nextState, { location: location }), callback);
		        } else {
		          callback();
		        }
		      });
		    }
		  }

		  function finishMatch(nextState, callback) {
		    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

		    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
		    var changeRoutes = _computeChangedRoutes.changeRoutes;
		    var enterRoutes = _computeChangedRoutes.enterRoutes;


		    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

		    // Tear down confirmation hooks for left routes
		    leaveRoutes.filter(function (route) {
		      return enterRoutes.indexOf(route) === -1;
		    }).forEach(removeListenBeforeHooksForRoute);

		    // change and enter hooks are run in series
		    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
		      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

		      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
		    });

		    function finishEnterHooks(error, redirectInfo) {
		      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

		      // TODO: Fetch components after state is updated.
		      (0, _getComponents2.default)(nextState, function (error, components) {
		        if (error) {
		          callback(error);
		        } else {
		          // TODO: Make match a pure function and have some other API
		          // for "match and update state".
		          callback(null, null, state = _extends({}, nextState, { components: components }));
		        }
		      });
		    }

		    function handleErrorOrRedirect(error, redirectInfo) {
		      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
		    }
		  }

		  var RouteGuid = 1;

		  function getRouteID(route) {
		    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		    return route.__id__ || create && (route.__id__ = RouteGuid++);
		  }

		  var RouteHooks = Object.create(null);

		  function getRouteHooksForRoutes(routes) {
		    return routes.reduce(function (hooks, route) {
		      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
		      return hooks;
		    }, []);
		  }

		  function transitionHook(location, callback) {
		    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
		      if (nextState == null) {
		        // TODO: We didn't actually match anything, but hang
		        // onto error/nextState so we don't have to matchRoutes
		        // again in the listen callback.
		        callback();
		        return;
		      }

		      // Cache some state here so we don't have to
		      // matchRoutes() again in the listen callback.
		      partialNextState = _extends({}, nextState, { location: location });

		      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

		      var result = void 0;
		      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
		        // Passing the location arg here indicates to
		        // the user that this is a transition hook.
		        result = hooks[i](location);
		      }

		      callback(result);
		    });
		  }

		  /* istanbul ignore next: untestable with Karma */
		  function beforeUnloadHook() {
		    // Synchronously check to see if any route hooks want
		    // to prevent the current window/tab from closing.
		    if (state.routes) {
		      var hooks = getRouteHooksForRoutes(state.routes);

		      var message = void 0;
		      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
		        // Passing no args indicates to the user that this is a
		        // beforeunload hook. We don't know the next location.
		        message = hooks[i]();
		      }

		      return message;
		    }
		  }

		  var unlistenBefore = void 0,
		      unlistenBeforeUnload = void 0;

		  function removeListenBeforeHooksForRoute(route) {
		    var routeID = getRouteID(route, false);
		    if (!routeID) {
		      return;
		    }

		    delete RouteHooks[routeID];

		    if (!hasAnyProperties(RouteHooks)) {
		      // teardown transition & beforeunload hooks
		      if (unlistenBefore) {
		        unlistenBefore();
		        unlistenBefore = null;
		      }

		      if (unlistenBeforeUnload) {
		        unlistenBeforeUnload();
		        unlistenBeforeUnload = null;
		      }
		    }
		  }

		  /**
		   * Registers the given hook function to run before leaving the given route.
		   *
		   * During a normal transition, the hook function receives the next location
		   * as its only argument and can return either a prompt message (string) to show the user,
		   * to make sure they want to leave the page; or `false`, to prevent the transition.
		   * Any other return value will have no effect.
		   *
		   * During the beforeunload event (in browsers) the hook receives no arguments.
		   * In this case it must return a prompt message to prevent the transition.
		   *
		   * Returns a function that may be used to unbind the listener.
		   */
		  function listenBeforeLeavingRoute(route, hook) {
		    // TODO: Warn if they register for a route that isn't currently
		    // active. They're probably doing something wrong, like re-creating
		    // route objects on every location change.
		    var routeID = getRouteID(route);
		    var hooks = RouteHooks[routeID];

		    if (!hooks) {
		      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

		      RouteHooks[routeID] = [hook];

		      if (thereWereNoRouteHooks) {
		        // setup transition & beforeunload hooks
		        unlistenBefore = history.listenBefore(transitionHook);

		        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
		      }
		    } else {
		      if (hooks.indexOf(hook) === -1) {
		        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

		        hooks.push(hook);
		      }
		    }

		    return function () {
		      var hooks = RouteHooks[routeID];

		      if (hooks) {
		        var newHooks = hooks.filter(function (item) {
		          return item !== hook;
		        });

		        if (newHooks.length === 0) {
		          removeListenBeforeHooksForRoute(route);
		        } else {
		          RouteHooks[routeID] = newHooks;
		        }
		      }
		    };
		  }

		  /**
		   * This is the API for stateful environments. As the location
		   * changes, we update state and call the listener. We can also
		   * gracefully handle errors and redirects.
		   */
		  function listen(listener) {
		    // TODO: Only use a single history listener. Otherwise we'll
		    // end up with multiple concurrent calls to match.
		    return history.listen(function (location) {
		      if (state.location === location) {
		        listener(null, state);
		      } else {
		        match(location, function (error, redirectLocation, nextState) {
		          if (error) {
		            listener(error);
		          } else if (redirectLocation) {
		            history.transitionTo(redirectLocation);
		          } else if (nextState) {
		            listener(null, nextState);
		          } else {
		            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
		          }
		        });
		      }
		    });
		  }

		  return {
		    isActive: isActive,
		    match: match,
		    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
		    listen: listen
		  };
		}

		//export default useRoutes

		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _PatternUtils = __webpack_require__(39);

		function routeParamsChanged(route, prevState, nextState) {
		  if (!route.path) return false;

		  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

		  return paramNames.some(function (paramName) {
		    return prevState.params[paramName] !== nextState.params[paramName];
		  });
		}

		/**
		 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
		 * the change from prevState to nextState. We leave routes if either
		 * 1) they are not in the next state or 2) they are in the next state
		 * but their params have changed (i.e. /users/123 => /users/456).
		 *
		 * leaveRoutes are ordered starting at the leaf route of the tree
		 * we're leaving up to the common parent route. enterRoutes are ordered
		 * from the top of the tree we're entering down to the leaf route.
		 *
		 * changeRoutes are any routes that didn't leave or enter during
		 * the transition.
		 */
		function computeChangedRoutes(prevState, nextState) {
		  var prevRoutes = prevState && prevState.routes;
		  var nextRoutes = nextState.routes;

		  var leaveRoutes = void 0,
		      changeRoutes = void 0,
		      enterRoutes = void 0;
		  if (prevRoutes) {
		    (function () {
		      var parentIsLeaving = false;
		      leaveRoutes = prevRoutes.filter(function (route) {
		        if (parentIsLeaving) {
		          return true;
		        } else {
		          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
		          if (isLeaving) parentIsLeaving = true;
		          return isLeaving;
		        }
		      });

		      // onLeave hooks start at the leaf route.
		      leaveRoutes.reverse();

		      enterRoutes = [];
		      changeRoutes = [];

		      nextRoutes.forEach(function (route) {
		        var isNew = prevRoutes.indexOf(route) === -1;
		        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

		        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
		      });
		    })();
		  } else {
		    leaveRoutes = [];
		    changeRoutes = [];
		    enterRoutes = nextRoutes;
		  }

		  return {
		    leaveRoutes: leaveRoutes,
		    changeRoutes: changeRoutes,
		    enterRoutes: enterRoutes
		  };
		}

		exports.default = computeChangedRoutes;
		module.exports = exports['default'];

	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;
		exports.runEnterHooks = runEnterHooks;
		exports.runChangeHooks = runChangeHooks;
		exports.runLeaveHooks = runLeaveHooks;

		var _AsyncUtils = __webpack_require__(64);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function createTransitionHook(hook, route, asyncArity) {
		  return function () {
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    hook.apply(route, args);

		    if (hook.length < asyncArity) {
		      var callback = args[args.length - 1];
		      // Assume hook executes synchronously and
		      // automatically call the callback.
		      callback();
		    }
		  };
		}

		function getEnterHooks(routes) {
		  return routes.reduce(function (hooks, route) {
		    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

		    return hooks;
		  }, []);
		}

		function getChangeHooks(routes) {
		  return routes.reduce(function (hooks, route) {
		    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
		    return hooks;
		  }, []);
		}

		function runTransitionHooks(length, iter, callback) {
		  if (!length) {
		    callback();
		    return;
		  }

		  var redirectInfo = void 0;
		  function replace(location, deprecatedPathname, deprecatedQuery) {
		    if (deprecatedPathname) {
		      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
		      redirectInfo = {
		        pathname: deprecatedPathname,
		        query: deprecatedQuery,
		        state: location
		      };

		      return;
		    }

		    redirectInfo = location;
		  }

		  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
		    iter(index, replace, function (error) {
		      if (error || redirectInfo) {
		        done(error, redirectInfo); // No need to continue.
		      } else {
		        next();
		      }
		    });
		  }, callback);
		}

		/**
		 * Runs all onEnter hooks in the given array of routes in order
		 * with onEnter(nextState, replace, callback) and calls
		 * callback(error, redirectInfo) when finished. The first hook
		 * to use replace short-circuits the loop.
		 *
		 * If a hook needs to run asynchronously, it may use the callback
		 * function. However, doing so will cause the transition to pause,
		 * which could lead to a non-responsive UI if the hook is slow.
		 */
		function runEnterHooks(routes, nextState, callback) {
		  var hooks = getEnterHooks(routes);
		  return runTransitionHooks(hooks.length, function (index, replace, next) {
		    hooks[index](nextState, replace, next);
		  }, callback);
		}

		/**
		 * Runs all onChange hooks in the given array of routes in order
		 * with onChange(prevState, nextState, replace, callback) and calls
		 * callback(error, redirectInfo) when finished. The first hook
		 * to use replace short-circuits the loop.
		 *
		 * If a hook needs to run asynchronously, it may use the callback
		 * function. However, doing so will cause the transition to pause,
		 * which could lead to a non-responsive UI if the hook is slow.
		 */
		function runChangeHooks(routes, state, nextState, callback) {
		  var hooks = getChangeHooks(routes);
		  return runTransitionHooks(hooks.length, function (index, replace, next) {
		    hooks[index](state, nextState, replace, next);
		  }, callback);
		}

		/**
		 * Runs all onLeave hooks in the given array of routes in order.
		 */
		function runLeaveHooks(routes, prevState) {
		  for (var i = 0, len = routes.length; i < len; ++i) {
		    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
		  }
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 64 */
	/***/ function(module, exports) {

		"use strict";

		exports.__esModule = true;
		exports.loopAsync = loopAsync;
		exports.mapAsync = mapAsync;
		function loopAsync(turns, work, callback) {
		  var currentTurn = 0,
		      isDone = false;
		  var sync = false,
		      hasNext = false,
		      doneArgs = void 0;

		  function done() {
		    isDone = true;
		    if (sync) {
		      // Iterate instead of recursing if possible.
		      doneArgs = [].concat(Array.prototype.slice.call(arguments));
		      return;
		    }

		    callback.apply(this, arguments);
		  }

		  function next() {
		    if (isDone) {
		      return;
		    }

		    hasNext = true;
		    if (sync) {
		      // Iterate instead of recursing if possible.
		      return;
		    }

		    sync = true;

		    while (!isDone && currentTurn < turns && hasNext) {
		      hasNext = false;
		      work.call(this, currentTurn++, next, done);
		    }

		    sync = false;

		    if (isDone) {
		      // This means the loop finished synchronously.
		      callback.apply(this, doneArgs);
		      return;
		    }

		    if (currentTurn >= turns && hasNext) {
		      isDone = true;
		      callback();
		    }
		  }

		  next();
		}

		function mapAsync(array, work, callback) {
		  var length = array.length;
		  var values = [];

		  if (length === 0) return callback(null, values);

		  var isDone = false,
		      doneCount = 0;

		  function done(index, error, value) {
		    if (isDone) return;

		    if (error) {
		      isDone = true;
		      callback(error);
		    } else {
		      values[index] = value;

		      isDone = ++doneCount === length;

		      if (isDone) callback(null, values);
		    }
		  }

		  array.forEach(function (item, index) {
		    work(item, index, function (error, value) {
		      done(index, error, value);
		    });
		  });
		}

	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

		exports.default = isActive;

		var _PatternUtils = __webpack_require__(39);

		function deepEqual(a, b) {
		  if (a == b) return true;

		  if (a == null || b == null) return false;

		  if (Array.isArray(a)) {
		    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
		      return deepEqual(item, b[index]);
		    });
		  }

		  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
		    for (var p in a) {
		      if (!Object.prototype.hasOwnProperty.call(a, p)) {
		        continue;
		      }

		      if (a[p] === undefined) {
		        if (b[p] !== undefined) {
		          return false;
		        }
		      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
		        return false;
		      } else if (!deepEqual(a[p], b[p])) {
		        return false;
		      }
		    }

		    return true;
		  }

		  return String(a) === String(b);
		}

		/**
		 * Returns true if the current pathname matches the supplied one, net of
		 * leading and trailing slash normalization. This is sufficient for an
		 * indexOnly route match.
		 */
		function pathIsActive(pathname, currentPathname) {
		  // Normalize leading slash for consistency. Leading slash on pathname has
		  // already been normalized in isActive. See caveat there.
		  if (currentPathname.charAt(0) !== '/') {
		    currentPathname = '/' + currentPathname;
		  }

		  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
		  // `/foo` as active, but in this case, we would already have failed the
		  // match.
		  if (pathname.charAt(pathname.length - 1) !== '/') {
		    pathname += '/';
		  }
		  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
		    currentPathname += '/';
		  }

		  return currentPathname === pathname;
		}

		/**
		 * Returns true if the given pathname matches the active routes and params.
		 */
		function routeIsActive(pathname, routes, params) {
		  var remainingPathname = pathname,
		      paramNames = [],
		      paramValues = [];

		  // for...of would work here but it's probably slower post-transpilation.
		  for (var i = 0, len = routes.length; i < len; ++i) {
		    var route = routes[i];
		    var pattern = route.path || '';

		    if (pattern.charAt(0) === '/') {
		      remainingPathname = pathname;
		      paramNames = [];
		      paramValues = [];
		    }

		    if (remainingPathname !== null && pattern) {
		      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
		      if (matched) {
		        remainingPathname = matched.remainingPathname;
		        paramNames = [].concat(paramNames, matched.paramNames);
		        paramValues = [].concat(paramValues, matched.paramValues);
		      } else {
		        remainingPathname = null;
		      }

		      if (remainingPathname === '') {
		        // We have an exact match on the route. Just check that all the params
		        // match.
		        // FIXME: This doesn't work on repeated params.
		        return paramNames.every(function (paramName, index) {
		          return String(paramValues[index]) === String(params[paramName]);
		        });
		      }
		    }
		  }

		  return false;
		}

		/**
		 * Returns true if all key/value pairs in the given query are
		 * currently active.
		 */
		function queryIsActive(query, activeQuery) {
		  if (activeQuery == null) return query == null;

		  if (query == null) return true;

		  return deepEqual(query, activeQuery);
		}

		/**
		 * Returns true if a <Link> to the given pathname/query combination is
		 * currently active.
		 */
		function isActive(_ref, indexOnly, currentLocation, routes, params) {
		  var pathname = _ref.pathname;
		  var query = _ref.query;

		  if (currentLocation == null) return false;

		  // TODO: This is a bit ugly. It keeps around support for treating pathnames
		  // without preceding slashes as absolute paths, but possibly also works
		  // around the same quirks with basenames as in matchRoutes.
		  if (pathname.charAt(0) !== '/') {
		    pathname = '/' + pathname;
		  }

		  if (!pathIsActive(pathname, currentLocation.pathname)) {
		    // The path check is necessary and sufficient for indexOnly, but otherwise
		    // we still need to check the routes.
		    if (indexOnly || !routeIsActive(pathname, routes, params)) {
		      return false;
		    }
		  }

		  return queryIsActive(query, currentLocation.query);
		}
		module.exports = exports['default'];

	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _AsyncUtils = __webpack_require__(64);

		var _makeStateWithLocation = __webpack_require__(67);

		var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function getComponentsForRoute(nextState, route, callback) {
		  if (route.component || route.components) {
		    callback(null, route.component || route.components);
		    return;
		  }

		  var getComponent = route.getComponent || route.getComponents;
		  if (!getComponent) {
		    callback();
		    return;
		  }

		  var location = nextState.location;

		  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

		  getComponent.call(route, nextStateWithLocation, callback);
		}

		/**
		 * Asynchronously fetches all components needed for the given router
		 * state and calls callback(error, components) when finished.
		 *
		 * Note: This operation may finish synchronously if no routes have an
		 * asynchronous getComponents method.
		 */
		function getComponents(nextState, callback) {
		  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
		    getComponentsForRoute(nextState, route, callback);
		  }, callback);
		}

		exports.default = getComponents;
		module.exports = exports['default'];

	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		exports.default = makeStateWithLocation;

		var _deprecateObjectProperties = __webpack_require__(35);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function makeStateWithLocation(state, location) {
		  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
		    var stateWithLocation = _extends({}, state);

		    // I don't use deprecateObjectProperties here because I want to keep the
		    // same code path between development and production, in that we just
		    // assign extra properties to the copy of the state object in both cases.

		    var _loop = function _loop(prop) {
		      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
		        return 'continue';
		      }

		      Object.defineProperty(stateWithLocation, prop, {
		        get: function get() {
		          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
		          return location[prop];
		        }
		      });
		    };

		    for (var prop in location) {
		      var _ret = _loop(prop);

		      if (_ret === 'continue') continue;
		    }

		    return stateWithLocation;
		  }

		  return _extends({}, state, location);
		}
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

		exports.default = matchRoutes;

		var _AsyncUtils = __webpack_require__(64);

		var _makeStateWithLocation = __webpack_require__(67);

		var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

		var _PatternUtils = __webpack_require__(39);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		var _RouteUtils = __webpack_require__(33);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function getChildRoutes(route, location, paramNames, paramValues, callback) {
		  if (route.childRoutes) {
		    return [null, route.childRoutes];
		  }
		  if (!route.getChildRoutes) {
		    return [];
		  }

		  var sync = true,
		      result = void 0;

		  var partialNextState = {
		    location: location,
		    params: createParams(paramNames, paramValues)
		  };

		  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

		  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
		    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
		    if (sync) {
		      result = [error, childRoutes];
		      return;
		    }

		    callback(error, childRoutes);
		  });

		  sync = false;
		  return result; // Might be undefined.
		}

		function getIndexRoute(route, location, paramNames, paramValues, callback) {
		  if (route.indexRoute) {
		    callback(null, route.indexRoute);
		  } else if (route.getIndexRoute) {
		    var partialNextState = {
		      location: location,
		      params: createParams(paramNames, paramValues)
		    };

		    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

		    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
		      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
		    });
		  } else if (route.childRoutes) {
		    (function () {
		      var pathless = route.childRoutes.filter(function (childRoute) {
		        return !childRoute.path;
		      });

		      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
		        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
		          if (error || indexRoute) {
		            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
		            done(error, routes);
		          } else {
		            next();
		          }
		        });
		      }, function (err, routes) {
		        callback(null, routes);
		      });
		    })();
		  } else {
		    callback();
		  }
		}

		function assignParams(params, paramNames, paramValues) {
		  return paramNames.reduce(function (params, paramName, index) {
		    var paramValue = paramValues && paramValues[index];

		    if (Array.isArray(params[paramName])) {
		      params[paramName].push(paramValue);
		    } else if (paramName in params) {
		      params[paramName] = [params[paramName], paramValue];
		    } else {
		      params[paramName] = paramValue;
		    }

		    return params;
		  }, params);
		}

		function createParams(paramNames, paramValues) {
		  return assignParams({}, paramNames, paramValues);
		}

		function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
		  var pattern = route.path || '';

		  if (pattern.charAt(0) === '/') {
		    remainingPathname = location.pathname;
		    paramNames = [];
		    paramValues = [];
		  }

		  // Only try to match the path if the route actually has a pattern, and if
		  // we're not just searching for potential nested absolute paths.
		  if (remainingPathname !== null && pattern) {
		    try {
		      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
		      if (matched) {
		        remainingPathname = matched.remainingPathname;
		        paramNames = [].concat(paramNames, matched.paramNames);
		        paramValues = [].concat(paramValues, matched.paramValues);
		      } else {
		        remainingPathname = null;
		      }
		    } catch (error) {
		      callback(error);
		    }

		    // By assumption, pattern is non-empty here, which is the prerequisite for
		    // actually terminating a match.
		    if (remainingPathname === '') {
		      var _ret2 = function () {
		        var match = {
		          routes: [route],
		          params: createParams(paramNames, paramValues)
		        };

		        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
		          if (error) {
		            callback(error);
		          } else {
		            if (Array.isArray(indexRoute)) {
		              var _match$routes;

		              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
		                return !route.path;
		              }), 'Index routes should not have paths') : void 0;
		              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
		            } else if (indexRoute) {
		              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
		              match.routes.push(indexRoute);
		            }

		            callback(null, match);
		          }
		        });

		        return {
		          v: void 0
		        };
		      }();

		      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
		    }
		  }

		  if (remainingPathname != null || route.childRoutes) {
		    // Either a) this route matched at least some of the path or b)
		    // we don't have to load this route's children asynchronously. In
		    // either case continue checking for matches in the subtree.
		    var onChildRoutes = function onChildRoutes(error, childRoutes) {
		      if (error) {
		        callback(error);
		      } else if (childRoutes) {
		        // Check the child routes to see if any of them match.
		        matchRoutes(childRoutes, location, function (error, match) {
		          if (error) {
		            callback(error);
		          } else if (match) {
		            // A child route matched! Augment the match and pass it up the stack.
		            match.routes.unshift(route);
		            callback(null, match);
		          } else {
		            callback();
		          }
		        }, remainingPathname, paramNames, paramValues);
		      } else {
		        callback();
		      }
		    };

		    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
		    if (result) {
		      onChildRoutes.apply(undefined, result);
		    }
		  } else {
		    callback();
		  }
		}

		/**
		 * Asynchronously matches the given location to a set of routes and calls
		 * callback(error, state) when finished. The state object will have the
		 * following properties:
		 *
		 * - routes       An array of routes that matched, in hierarchical order
		 * - params       An object of URL parameters
		 *
		 * Note: This operation may finish synchronously if no routes have an
		 * asynchronous getChildRoutes method.
		 */
		function matchRoutes(routes, location, callback, remainingPathname) {
		  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
		  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

		  if (remainingPathname === undefined) {
		    // TODO: This is a little bit ugly, but it works around a quirk in history
		    // that strips the leading slash from pathnames when using basenames with
		    // trailing slashes.
		    if (location.pathname.charAt(0) !== '/') {
		      location = _extends({}, location, {
		        pathname: '/' + location.pathname
		      });
		    }
		    remainingPathname = location.pathname;
		  }

		  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
		    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
		      if (error || match) {
		        done(error, match);
		      } else {
		        next();
		      }
		    });
		  }, callback);
		}
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _deprecateObjectProperties = __webpack_require__(35);

		var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

		var _getRouteParams = __webpack_require__(70);

		var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

		var _RouteUtils = __webpack_require__(33);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var _React$PropTypes = _react2.default.PropTypes;
		var array = _React$PropTypes.array;
		var func = _React$PropTypes.func;
		var object = _React$PropTypes.object;

		/**
		 * A <RouterContext> renders the component tree for a given router state
		 * and sets the history object and the current location in context.
		 */

		var RouterContext = _react2.default.createClass({
		  displayName: 'RouterContext',


		  propTypes: {
		    history: object,
		    router: object.isRequired,
		    location: object.isRequired,
		    routes: array.isRequired,
		    params: object.isRequired,
		    components: array.isRequired,
		    createElement: func.isRequired
		  },

		  getDefaultProps: function getDefaultProps() {
		    return {
		      createElement: _react2.default.createElement
		    };
		  },


		  childContextTypes: {
		    history: object,
		    location: object.isRequired,
		    router: object.isRequired
		  },

		  getChildContext: function getChildContext() {
		    var _props = this.props;
		    var router = _props.router;
		    var history = _props.history;
		    var location = _props.location;

		    if (!router) {
		      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

		      router = _extends({}, history, {
		        setRouteLeaveHook: history.listenBeforeLeavingRoute
		      });
		      delete router.listenBeforeLeavingRoute;
		    }

		    if (process.env.NODE_ENV !== 'production') {
		      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
		    }

		    return { history: history, location: location, router: router };
		  },
		  createElement: function createElement(component, props) {
		    return component == null ? null : this.props.createElement(component, props);
		  },
		  render: function render() {
		    var _this = this;

		    var _props2 = this.props;
		    var history = _props2.history;
		    var location = _props2.location;
		    var routes = _props2.routes;
		    var params = _props2.params;
		    var components = _props2.components;

		    var element = null;

		    if (components) {
		      element = components.reduceRight(function (element, components, index) {
		        if (components == null) return element; // Don't create new children; use the grandchildren.

		        var route = routes[index];
		        var routeParams = (0, _getRouteParams2.default)(route, params);
		        var props = {
		          history: history,
		          location: location,
		          params: params,
		          route: route,
		          routeParams: routeParams,
		          routes: routes
		        };

		        if ((0, _RouteUtils.isReactChildren)(element)) {
		          props.children = element;
		        } else if (element) {
		          for (var prop in element) {
		            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
		          }
		        }

		        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
		          var elements = {};

		          for (var key in components) {
		            if (Object.prototype.hasOwnProperty.call(components, key)) {
		              // Pass through the key as a prop to createElement to allow
		              // custom createElement functions to know which named component
		              // they're rendering, for e.g. matching up to fetched data.
		              elements[key] = _this.createElement(components[key], _extends({
		                key: key }, props));
		            }
		          }

		          return elements;
		        }

		        return _this.createElement(components, props);
		      }, element);
		    }

		    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

		    return element;
		  }
		});

		exports.default = RouterContext;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _PatternUtils = __webpack_require__(39);

		/**
		 * Extracts an object of params the given route cares about from
		 * the given params object.
		 */
		function getRouteParams(route, params) {
		  var routeParams = {};

		  if (!route.path) return routeParams;

		  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
		    if (Object.prototype.hasOwnProperty.call(params, p)) {
		      routeParams[p] = params[p];
		    }
		  });

		  return routeParams;
		}

		exports.default = getRouteParams;
		module.exports = exports['default'];

	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		exports.createRouterObject = createRouterObject;
		exports.createRoutingHistory = createRoutingHistory;

		var _deprecateObjectProperties = __webpack_require__(35);

		var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function createRouterObject(history, transitionManager) {
		  return _extends({}, history, {
		    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
		    isActive: transitionManager.isActive
		  });
		}

		// deprecated
		function createRoutingHistory(history, transitionManager) {
		  history = _extends({}, history, transitionManager);

		  if (process.env.NODE_ENV !== 'production') {
		    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
		  }

		  return history;
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _PropTypes = __webpack_require__(34);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

		var _React$PropTypes = _react2.default.PropTypes;
		var bool = _React$PropTypes.bool;
		var object = _React$PropTypes.object;
		var string = _React$PropTypes.string;
		var func = _React$PropTypes.func;
		var oneOfType = _React$PropTypes.oneOfType;


		function isLeftClickEvent(event) {
		  return event.button === 0;
		}

		function isModifiedEvent(event) {
		  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
		}

		// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
		function isEmptyObject(object) {
		  for (var p in object) {
		    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
		  }return true;
		}

		function createLocationDescriptor(to, _ref) {
		  var query = _ref.query;
		  var hash = _ref.hash;
		  var state = _ref.state;

		  if (query || hash || state) {
		    return { pathname: to, query: query, hash: hash, state: state };
		  }

		  return to;
		}

		/**
		 * A <Link> is used to create an <a> element that links to a route.
		 * When that route is active, the link gets the value of its
		 * activeClassName prop.
		 *
		 * For example, assuming you have the following route:
		 *
		 *   <Route path="/posts/:postID" component={Post} />
		 *
		 * You could use the following component to link to that route:
		 *
		 *   <Link to={`/posts/${post.id}`} />
		 *
		 * Links may pass along location state and/or query string parameters
		 * in the state/query props, respectively.
		 *
		 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
		 */
		var Link = _react2.default.createClass({
		  displayName: 'Link',


		  contextTypes: {
		    router: _PropTypes.routerShape
		  },

		  propTypes: {
		    to: oneOfType([string, object]).isRequired,
		    query: object,
		    hash: string,
		    state: object,
		    activeStyle: object,
		    activeClassName: string,
		    onlyActiveOnIndex: bool.isRequired,
		    onClick: func,
		    target: string
		  },

		  getDefaultProps: function getDefaultProps() {
		    return {
		      onlyActiveOnIndex: false,
		      style: {}
		    };
		  },
		  handleClick: function handleClick(event) {
		    if (this.props.onClick) this.props.onClick(event);

		    if (event.defaultPrevented) return;

		    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

		    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

		    // If target prop is set (e.g. to "_blank"), let browser handle link.
		    /* istanbul ignore if: untestable with Karma */
		    if (this.props.target) return;

		    event.preventDefault();

		    var _props = this.props;
		    var to = _props.to;
		    var query = _props.query;
		    var hash = _props.hash;
		    var state = _props.state;

		    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

		    this.context.router.push(location);
		  },
		  render: function render() {
		    var _props2 = this.props;
		    var to = _props2.to;
		    var query = _props2.query;
		    var hash = _props2.hash;
		    var state = _props2.state;
		    var activeClassName = _props2.activeClassName;
		    var activeStyle = _props2.activeStyle;
		    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

		    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

		    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

		    // Ignore if rendered outside the context of router, simplifies unit testing.
		    var router = this.context.router;


		    if (router) {
		      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
		      props.href = router.createHref(location);

		      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
		        if (router.isActive(location, onlyActiveOnIndex)) {
		          if (activeClassName) {
		            if (props.className) {
		              props.className += ' ' + activeClassName;
		            } else {
		              props.className = activeClassName;
		            }
		          }

		          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
		        }
		      }
		    }

		    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
		  }
		});

		exports.default = Link;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _Link = __webpack_require__(72);

		var _Link2 = _interopRequireDefault(_Link);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * An <IndexLink> is used to link to an <IndexRoute>.
		 */
		var IndexLink = _react2.default.createClass({
		  displayName: 'IndexLink',
		  render: function render() {
		    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
		  }
		});

		exports.default = IndexLink;
		module.exports = exports['default'];

	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		exports.default = withRouter;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _hoistNonReactStatics = __webpack_require__(75);

		var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

		var _PropTypes = __webpack_require__(34);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function getDisplayName(WrappedComponent) {
		  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
		}

		function withRouter(WrappedComponent) {
		  var WithRouter = _react2.default.createClass({
		    displayName: 'WithRouter',

		    contextTypes: { router: _PropTypes.routerShape },
		    render: function render() {
		      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { router: this.context.router }));
		    }
		  });

		  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
		  WithRouter.WrappedComponent = WrappedComponent;

		  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
		}
		module.exports = exports['default'];

	/***/ },
	/* 75 */
	/***/ function(module, exports) {

		/**
		 * Copyright 2015, Yahoo! Inc.
		 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
		 */
		'use strict';

		var REACT_STATICS = {
		    childContextTypes: true,
		    contextTypes: true,
		    defaultProps: true,
		    displayName: true,
		    getDefaultProps: true,
		    mixins: true,
		    propTypes: true,
		    type: true
		};

		var KNOWN_STATICS = {
		    name: true,
		    length: true,
		    prototype: true,
		    caller: true,
		    arguments: true,
		    arity: true
		};

		var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

		module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
		    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
		        var keys = Object.getOwnPropertyNames(sourceComponent);

		        /* istanbul ignore else */
		        if (isGetOwnPropertySymbolsAvailable) {
		            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
		        }

		        for (var i = 0; i < keys.length; ++i) {
		            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
		                try {
		                    targetComponent[keys[i]] = sourceComponent[keys[i]];
		                } catch (error) {

		                }
		            }
		        }
		    }

		    return targetComponent;
		};


	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _Redirect = __webpack_require__(77);

		var _Redirect2 = _interopRequireDefault(_Redirect);

		var _InternalPropTypes = __webpack_require__(38);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var _React$PropTypes = _react2.default.PropTypes;
		var string = _React$PropTypes.string;
		var object = _React$PropTypes.object;

		/**
		 * An <IndexRedirect> is used to redirect from an indexRoute.
		 */

		var IndexRedirect = _react2.default.createClass({
		  displayName: 'IndexRedirect',


		  statics: {
		    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
		      /* istanbul ignore else: sanity check */
		      if (parentRoute) {
		        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
		      } else {
		        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
		      }
		    }
		  },

		  propTypes: {
		    to: string.isRequired,
		    query: object,
		    state: object,
		    onEnter: _InternalPropTypes.falsy,
		    children: _InternalPropTypes.falsy
		  },

		  /* istanbul ignore next: sanity check */
		  render: function render() {
		     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
		  }
		});

		exports.default = IndexRedirect;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _RouteUtils = __webpack_require__(33);

		var _PatternUtils = __webpack_require__(39);

		var _InternalPropTypes = __webpack_require__(38);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var _React$PropTypes = _react2.default.PropTypes;
		var string = _React$PropTypes.string;
		var object = _React$PropTypes.object;

		/**
		 * A <Redirect> is used to declare another URL path a client should
		 * be sent to when they request a given URL.
		 *
		 * Redirects are placed alongside routes in the route configuration
		 * and are traversed in the same manner.
		 */

		var Redirect = _react2.default.createClass({
		  displayName: 'Redirect',


		  statics: {
		    createRouteFromReactElement: function createRouteFromReactElement(element) {
		      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

		      if (route.from) route.path = route.from;

		      route.onEnter = function (nextState, replace) {
		        var location = nextState.location;
		        var params = nextState.params;


		        var pathname = void 0;
		        if (route.to.charAt(0) === '/') {
		          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
		        } else if (!route.to) {
		          pathname = location.pathname;
		        } else {
		          var routeIndex = nextState.routes.indexOf(route);
		          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
		          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
		          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
		        }

		        replace({
		          pathname: pathname,
		          query: route.query || location.query,
		          state: route.state || location.state
		        });
		      };

		      return route;
		    },
		    getRoutePattern: function getRoutePattern(routes, routeIndex) {
		      var parentPattern = '';

		      for (var i = routeIndex; i >= 0; i--) {
		        var route = routes[i];
		        var pattern = route.path || '';

		        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

		        if (pattern.indexOf('/') === 0) break;
		      }

		      return '/' + parentPattern;
		    }
		  },

		  propTypes: {
		    path: string,
		    from: string, // Alias for path
		    to: string.isRequired,
		    query: object,
		    state: object,
		    onEnter: _InternalPropTypes.falsy,
		    children: _InternalPropTypes.falsy
		  },

		  /* istanbul ignore next: sanity check */
		  render: function render() {
		     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
		  }
		});

		exports.default = Redirect;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 78 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _RouteUtils = __webpack_require__(33);

		var _InternalPropTypes = __webpack_require__(38);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var func = _react2.default.PropTypes.func;

		/**
		 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
		 * a JSX route config.
		 */

		var IndexRoute = _react2.default.createClass({
		  displayName: 'IndexRoute',


		  statics: {
		    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
		      /* istanbul ignore else: sanity check */
		      if (parentRoute) {
		        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
		      } else {
		        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
		      }
		    }
		  },

		  propTypes: {
		    path: _InternalPropTypes.falsy,
		    component: _InternalPropTypes.component,
		    components: _InternalPropTypes.components,
		    getComponent: func,
		    getComponents: func
		  },

		  /* istanbul ignore next: sanity check */
		  render: function render() {
		     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
		  }
		});

		exports.default = IndexRoute;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 79 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _RouteUtils = __webpack_require__(33);

		var _InternalPropTypes = __webpack_require__(38);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var _React$PropTypes = _react2.default.PropTypes;
		var string = _React$PropTypes.string;
		var func = _React$PropTypes.func;

		/**
		 * A <Route> is used to declare which components are rendered to the
		 * page when the URL matches a given pattern.
		 *
		 * Routes are arranged in a nested tree structure. When a new URL is
		 * requested, the tree is searched depth-first to find a route whose
		 * path matches the URL.  When one is found, all routes in the tree
		 * that lead to it are considered "active" and their components are
		 * rendered into the DOM, nested in the same order as in the tree.
		 */

		var Route = _react2.default.createClass({
		  displayName: 'Route',


		  statics: {
		    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
		  },

		  propTypes: {
		    path: string,
		    component: _InternalPropTypes.component,
		    components: _InternalPropTypes.components,
		    getComponent: func,
		    getComponents: func
		  },

		  /* istanbul ignore next: sanity check */
		  render: function render() {
		     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
		  }
		});

		exports.default = Route;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		var _InternalPropTypes = __webpack_require__(38);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * A mixin that adds the "history" instance variable to components.
		 */
		var History = {

		  contextTypes: {
		    history: _InternalPropTypes.history
		  },

		  componentWillMount: function componentWillMount() {
		    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
		    this.history = this.context.history;
		  }
		};

		exports.default = History;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var object = _react2.default.PropTypes.object;

		/**
		 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
		 * component that may be used to cancel a transition or prompt the user
		 * for confirmation.
		 *
		 * On standard transitions, routerWillLeave receives a single argument: the
		 * location we're transitioning to. To cancel the transition, return false.
		 * To prompt the user for confirmation, return a prompt message (string).
		 *
		 * During the beforeunload event (assuming you're using the useBeforeUnload
		 * history enhancer), routerWillLeave does not receive a location object
		 * because it isn't possible for us to know the location we're transitioning
		 * to. In this case routerWillLeave must return a prompt message to prevent
		 * the user from closing the window/tab.
		 */

		var Lifecycle = {

		  contextTypes: {
		    history: object.isRequired,
		    // Nested children receive the route as context, either
		    // set by the route component using the RouteContext mixin
		    // or by some other ancestor.
		    route: object
		  },

		  propTypes: {
		    // Route components receive the route object as a prop.
		    route: object
		  },

		  componentDidMount: function componentDidMount() {
		    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
		    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

		    var route = this.props.route || this.context.route;

		    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

		    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
		  },
		  componentWillUnmount: function componentWillUnmount() {
		    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
		  }
		};

		exports.default = Lifecycle;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var object = _react2.default.PropTypes.object;

		/**
		 * The RouteContext mixin provides a convenient way for route
		 * components to set the route in context. This is needed for
		 * routes that render elements that want to use the Lifecycle
		 * mixin to prevent transitions.
		 */

		var RouteContext = {

		  propTypes: {
		    route: object.isRequired
		  },

		  childContextTypes: {
		    route: object.isRequired
		  },

		  getChildContext: function getChildContext() {
		    return {
		      route: this.props.route
		    };
		  },
		  componentWillMount: function componentWillMount() {
		    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
		  }
		};

		exports.default = RouteContext;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _useQueries = __webpack_require__(58);

		var _useQueries2 = _interopRequireDefault(_useQueries);

		var _createTransitionManager = __webpack_require__(61);

		var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

		/**
		 * Returns a new createHistory function that may be used to create
		 * history objects that know about routing.
		 *
		 * Enhances history objects with the following methods:
		 *
		 * - listen((error, nextState) => {})
		 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
		 * - match(location, (error, redirectLocation, nextState) => {})
		 * - isActive(pathname, query, indexOnly=false)
		 */
		function useRoutes(createHistory) {
		  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

		  return function () {
		    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		    var routes = _ref.routes;

		    var options = _objectWithoutProperties(_ref, ['routes']);

		    var history = (0, _useQueries2.default)(createHistory)(options);
		    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
		    return _extends({}, history, transitionManager);
		  };
		}

		exports.default = useRoutes;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 84 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _RouterContext = __webpack_require__(69);

		var _RouterContext2 = _interopRequireDefault(_RouterContext);

		var _routerWarning = __webpack_require__(36);

		var _routerWarning2 = _interopRequireDefault(_routerWarning);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var RoutingContext = _react2.default.createClass({
		  displayName: 'RoutingContext',
		  componentWillMount: function componentWillMount() {
		    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
		  },
		  render: function render() {
		    return _react2.default.createElement(_RouterContext2.default, this.props);
		  }
		});

		exports.default = RoutingContext;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _createMemoryHistory = __webpack_require__(86);

		var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

		var _createTransitionManager = __webpack_require__(61);

		var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

		var _RouteUtils = __webpack_require__(33);

		var _RouterUtils = __webpack_require__(71);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

		/**
		 * A high-level API to be used for server-side rendering.
		 *
		 * This function matches a location to a set of routes and calls
		 * callback(error, redirectLocation, renderProps) when finished.
		 *
		 * Note: You probably don't want to use this in a browser unless you're using
		 * server-side rendering with async routes.
		 */
		function match(_ref, callback) {
		  var history = _ref.history;
		  var routes = _ref.routes;
		  var location = _ref.location;

		  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

		  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

		  history = history ? history : (0, _createMemoryHistory2.default)(options);
		  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

		  var unlisten = void 0;

		  if (location) {
		    // Allow match({ location: '/the/path', ... })
		    location = history.createLocation(location);
		  } else {
		    // Pick up the location from the history via synchronous history.listen
		    // call if needed.
		    unlisten = history.listen(function (historyLocation) {
		      location = historyLocation;
		    });
		  }

		  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
		  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

		  transitionManager.match(location, function (error, redirectLocation, nextState) {
		    callback(error, redirectLocation, nextState && _extends({}, nextState, {
		      history: history,
		      router: router,
		      matchContext: { history: history, transitionManager: transitionManager, router: router }
		    }));

		    // Defer removing the listener to here to prevent DOM histories from having
		    // to unwind DOM event listeners unnecessarily, in case callback renders a
		    // <Router> and attaches another history listener.
		    if (unlisten) {
		      unlisten();
		    }
		  });
		}

		exports.default = match;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;
		exports.default = createMemoryHistory;

		var _useQueries = __webpack_require__(58);

		var _useQueries2 = _interopRequireDefault(_useQueries);

		var _useBasename = __webpack_require__(87);

		var _useBasename2 = _interopRequireDefault(_useBasename);

		var _createMemoryHistory = __webpack_require__(88);

		var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function createMemoryHistory(options) {
		  // signatures and type checking differ between `useRoutes` and
		  // `createMemoryHistory`, have to create `memoryHistory` first because
		  // `useQueries` doesn't understand the signature
		  var memoryHistory = (0, _createMemoryHistory2.default)(options);
		  var createHistory = function createHistory() {
		    return memoryHistory;
		  };
		  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
		  history.__v2_compatible__ = true;
		  return history;
		}
		module.exports = exports['default'];

	/***/ },
	/* 87 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		var _ExecutionEnvironment = __webpack_require__(46);

		var _PathUtils = __webpack_require__(45);

		var _runTransitionHook = __webpack_require__(56);

		var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

		var _deprecate = __webpack_require__(57);

		var _deprecate2 = _interopRequireDefault(_deprecate);

		function useBasename(createHistory) {
		  return function () {
		    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		    var history = createHistory(options);

		    var basename = options.basename;

		    var checkedBaseHref = false;

		    function checkBaseHref() {
		      if (checkedBaseHref) {
		        return;
		      }

		      // Automatically use the value of <base href> in HTML
		      // documents as basename if it's not explicitly given.
		      if (basename == null && _ExecutionEnvironment.canUseDOM) {
		        var base = document.getElementsByTagName('base')[0];
		        var baseHref = base && base.getAttribute('href');

		        if (baseHref != null) {
		          basename = baseHref;

		          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
		        }
		      }

		      checkedBaseHref = true;
		    }

		    function addBasename(location) {
		      checkBaseHref();

		      if (basename && location.basename == null) {
		        if (location.pathname.indexOf(basename) === 0) {
		          location.pathname = location.pathname.substring(basename.length);
		          location.basename = basename;

		          if (location.pathname === '') location.pathname = '/';
		        } else {
		          location.basename = '';
		        }
		      }

		      return location;
		    }

		    function prependBasename(location) {
		      checkBaseHref();

		      if (!basename) return location;

		      if (typeof location === 'string') location = _PathUtils.parsePath(location);

		      var pname = location.pathname;
		      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
		      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
		      var pathname = normalizedBasename + normalizedPathname;

		      return _extends({}, location, {
		        pathname: pathname
		      });
		    }

		    // Override all read methods with basename-aware versions.
		    function listenBefore(hook) {
		      return history.listenBefore(function (location, callback) {
		        _runTransitionHook2['default'](hook, addBasename(location), callback);
		      });
		    }

		    function listen(listener) {
		      return history.listen(function (location) {
		        listener(addBasename(location));
		      });
		    }

		    // Override all write methods with basename-aware versions.
		    function push(location) {
		      history.push(prependBasename(location));
		    }

		    function replace(location) {
		      history.replace(prependBasename(location));
		    }

		    function createPath(location) {
		      return history.createPath(prependBasename(location));
		    }

		    function createHref(location) {
		      return history.createHref(prependBasename(location));
		    }

		    function createLocation(location) {
		      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
		    }

		    // deprecated
		    function pushState(state, path) {
		      if (typeof path === 'string') path = _PathUtils.parsePath(path);

		      push(_extends({ state: state }, path));
		    }

		    // deprecated
		    function replaceState(state, path) {
		      if (typeof path === 'string') path = _PathUtils.parsePath(path);

		      replace(_extends({ state: state }, path));
		    }

		    return _extends({}, history, {
		      listenBefore: listenBefore,
		      listen: listen,
		      push: push,
		      replace: replace,
		      createPath: createPath,
		      createHref: createHref,
		      createLocation: createLocation,

		      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
		      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
		    });
		  };
		}

		exports['default'] = useBasename;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 88 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _warning = __webpack_require__(43);

		var _warning2 = _interopRequireDefault(_warning);

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _PathUtils = __webpack_require__(45);

		var _Actions = __webpack_require__(44);

		var _createHistory = __webpack_require__(50);

		var _createHistory2 = _interopRequireDefault(_createHistory);

		function createStateStorage(entries) {
		  return entries.filter(function (entry) {
		    return entry.state;
		  }).reduce(function (memo, entry) {
		    memo[entry.key] = entry.state;
		    return memo;
		  }, {});
		}

		function createMemoryHistory() {
		  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		  if (Array.isArray(options)) {
		    options = { entries: options };
		  } else if (typeof options === 'string') {
		    options = { entries: [options] };
		  }

		  var history = _createHistory2['default'](_extends({}, options, {
		    getCurrentLocation: getCurrentLocation,
		    finishTransition: finishTransition,
		    saveState: saveState,
		    go: go
		  }));

		  var _options = options;
		  var entries = _options.entries;
		  var current = _options.current;

		  if (typeof entries === 'string') {
		    entries = [entries];
		  } else if (!Array.isArray(entries)) {
		    entries = ['/'];
		  }

		  entries = entries.map(function (entry) {
		    var key = history.createKey();

		    if (typeof entry === 'string') return { pathname: entry, key: key };

		    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

		     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
		  });

		  if (current == null) {
		    current = entries.length - 1;
		  } else {
		    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
		  }

		  var storage = createStateStorage(entries);

		  function saveState(key, state) {
		    storage[key] = state;
		  }

		  function readState(key) {
		    return storage[key];
		  }

		  function getCurrentLocation() {
		    var entry = entries[current];
		    var basename = entry.basename;
		    var pathname = entry.pathname;
		    var search = entry.search;

		    var path = (basename || '') + pathname + (search || '');

		    var key = undefined,
		        state = undefined;
		    if (entry.key) {
		      key = entry.key;
		      state = readState(key);
		    } else {
		      key = history.createKey();
		      state = null;
		      entry.key = key;
		    }

		    var location = _PathUtils.parsePath(path);

		    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
		  }

		  function canGo(n) {
		    var index = current + n;
		    return index >= 0 && index < entries.length;
		  }

		  function go(n) {
		    if (n) {
		      if (!canGo(n)) {
		        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
		        return;
		      }

		      current += n;

		      var currentLocation = getCurrentLocation();

		      // change action to POP
		      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
		    }
		  }

		  function finishTransition(location) {
		    switch (location.action) {
		      case _Actions.PUSH:
		        current += 1;

		        // if we are not on the top of stack
		        // remove rest and push new
		        if (current < entries.length) entries.splice(current);

		        entries.push(location);
		        saveState(location.key, location.state);
		        break;
		      case _Actions.REPLACE:
		        entries[current] = location;
		        saveState(location.key, location.state);
		        break;
		    }
		  }

		  return history;
		}

		exports['default'] = createMemoryHistory;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 89 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;
		exports.default = useRouterHistory;

		var _useQueries = __webpack_require__(58);

		var _useQueries2 = _interopRequireDefault(_useQueries);

		var _useBasename = __webpack_require__(87);

		var _useBasename2 = _interopRequireDefault(_useBasename);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function useRouterHistory(createHistory) {
		  return function (options) {
		    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
		    history.__v2_compatible__ = true;
		    return history;
		  };
		}
		module.exports = exports['default'];

	/***/ },
	/* 90 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _RouterContext = __webpack_require__(69);

		var _RouterContext2 = _interopRequireDefault(_RouterContext);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function () {
		  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
		    middlewares[_key] = arguments[_key];
		  }

		  var withContext = middlewares.map(function (m) {
		    return m.renderRouterContext;
		  }).filter(function (f) {
		    return f;
		  });
		  var withComponent = middlewares.map(function (m) {
		    return m.renderRouteComponent;
		  }).filter(function (f) {
		    return f;
		  });
		  var makeCreateElement = function makeCreateElement() {
		    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
		    return function (Component, props) {
		      return withComponent.reduceRight(function (previous, renderRouteComponent) {
		        return renderRouteComponent(previous, props);
		      }, baseCreateElement(Component, props));
		    };
		  };

		  return function (renderProps) {
		    return withContext.reduceRight(function (previous, renderRouterContext) {
		      return renderRouterContext(previous, renderProps);
		    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
		      createElement: makeCreateElement(renderProps.createElement)
		    })));
		  };
		};

		module.exports = exports['default'];

	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _createBrowserHistory = __webpack_require__(92);

		var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

		var _createRouterHistory = __webpack_require__(93);

		var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
		module.exports = exports['default'];

	/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _invariant = __webpack_require__(40);

		var _invariant2 = _interopRequireDefault(_invariant);

		var _Actions = __webpack_require__(44);

		var _PathUtils = __webpack_require__(45);

		var _ExecutionEnvironment = __webpack_require__(46);

		var _DOMUtils = __webpack_require__(47);

		var _DOMStateStorage = __webpack_require__(48);

		var _createDOMHistory = __webpack_require__(49);

		var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

		/**
		 * Creates and returns a history object that uses HTML5's history API
		 * (pushState, replaceState, and the popstate event) to manage history.
		 * This is the recommended method of managing history in browsers because
		 * it provides the cleanest URLs.
		 *
		 * Note: In browsers that do not support the HTML5 history API full
		 * page reloads will be used to preserve URLs.
		 */
		function createBrowserHistory() {
		  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

		  var forceRefresh = options.forceRefresh;

		  var isSupported = _DOMUtils.supportsHistory();
		  var useRefresh = !isSupported || forceRefresh;

		  function getCurrentLocation(historyState) {
		    try {
		      historyState = historyState || window.history.state || {};
		    } catch (e) {
		      historyState = {};
		    }

		    var path = _DOMUtils.getWindowPath();
		    var _historyState = historyState;
		    var key = _historyState.key;

		    var state = undefined;
		    if (key) {
		      state = _DOMStateStorage.readState(key);
		    } else {
		      state = null;
		      key = history.createKey();

		      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
		    }

		    var location = _PathUtils.parsePath(path);

		    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
		  }

		  function startPopStateListener(_ref) {
		    var transitionTo = _ref.transitionTo;

		    function popStateListener(event) {
		      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

		      transitionTo(getCurrentLocation(event.state));
		    }

		    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

		    return function () {
		      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
		    };
		  }

		  function finishTransition(location) {
		    var basename = location.basename;
		    var pathname = location.pathname;
		    var search = location.search;
		    var hash = location.hash;
		    var state = location.state;
		    var action = location.action;
		    var key = location.key;

		    if (action === _Actions.POP) return; // Nothing to do.

		    _DOMStateStorage.saveState(key, state);

		    var path = (basename || '') + pathname + search + hash;
		    var historyState = {
		      key: key
		    };

		    if (action === _Actions.PUSH) {
		      if (useRefresh) {
		        window.location.href = path;
		        return false; // Prevent location update.
		      } else {
		          window.history.pushState(historyState, null, path);
		        }
		    } else {
		      // REPLACE
		      if (useRefresh) {
		        window.location.replace(path);
		        return false; // Prevent location update.
		      } else {
		          window.history.replaceState(historyState, null, path);
		        }
		    }
		  }

		  var history = _createDOMHistory2['default'](_extends({}, options, {
		    getCurrentLocation: getCurrentLocation,
		    finishTransition: finishTransition,
		    saveState: _DOMStateStorage.saveState
		  }));

		  var listenerCount = 0,
		      stopPopStateListener = undefined;

		  function listenBefore(listener) {
		    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

		    var unlisten = history.listenBefore(listener);

		    return function () {
		      unlisten();

		      if (--listenerCount === 0) stopPopStateListener();
		    };
		  }

		  function listen(listener) {
		    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

		    var unlisten = history.listen(listener);

		    return function () {
		      unlisten();

		      if (--listenerCount === 0) stopPopStateListener();
		    };
		  }

		  // deprecated
		  function registerTransitionHook(hook) {
		    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

		    history.registerTransitionHook(hook);
		  }

		  // deprecated
		  function unregisterTransitionHook(hook) {
		    history.unregisterTransitionHook(hook);

		    if (--listenerCount === 0) stopPopStateListener();
		  }

		  return _extends({}, history, {
		    listenBefore: listenBefore,
		    listen: listen,
		    registerTransitionHook: registerTransitionHook,
		    unregisterTransitionHook: unregisterTransitionHook
		  });
		}

		exports['default'] = createBrowserHistory;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

	/***/ },
	/* 93 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		exports.default = function (createHistory) {
		  var history = void 0;
		  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
		  return history;
		};

		var _useRouterHistory = __webpack_require__(89);

		var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

		module.exports = exports['default'];

	/***/ },
	/* 94 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _createHashHistory = __webpack_require__(42);

		var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

		var _createRouterHistory = __webpack_require__(93);

		var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
		module.exports = exports['default'];

	/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _reactRouter = __webpack_require__(32);

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var HomeRoute = function (_Route) {
		  _inherits(HomeRoute, _Route);

		  function HomeRoute() {
		    _classCallCheck(this, HomeRoute);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeRoute).apply(this, arguments));
		  }

		  return HomeRoute;
		}(_reactRouter.Route);

		exports.default = HomeRoute;

	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _class, _temp;

		var _reactRouter = __webpack_require__(32);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var LoginRoute = (_temp = _class = function (_Route) {
		  _inherits(LoginRoute, _Route);

		  function LoginRoute() {
		    _classCallCheck(this, LoginRoute);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginRoute).apply(this, arguments));
		  }

		  return LoginRoute;
		}(_reactRouter.Route), _class.defaultProps = {
		  onEnter: function onEnter(nextState, replace, callback) {
		    _context2.default.userStore.isAuthenticated(function (err, authenticated) {
		      if (authenticated) {
		        var router = _context2.default.getRouter();
		        var homeRoute = router.getHomeRoute();
		        var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
		        var redirectTo = (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

		        replace(redirectTo);
		      }
		      callback();
		    });
		  }
		}, _temp);
		exports.default = LoginRoute;

	/***/ },
	/* 97 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _class, _temp;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _reactRouter = __webpack_require__(32);

		var _reactRouter2 = _interopRequireDefault(_reactRouter);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var LogoutRoute = (_temp = _class = function (_Route) {
		  _inherits(LogoutRoute, _Route);

		  function LogoutRoute() {
		    _classCallCheck(this, LogoutRoute);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(LogoutRoute).apply(this, arguments));
		  }

		  return LogoutRoute;
		}(_reactRouter.Route), _class.defaultProps = {
		  onEnter: function onEnter(nextState, replace, callback) {
		    var _this2 = this;

		    _UserActions2.default.logout(function () {
		      var router = _context2.default.getRouter();
		      var homeRoute = router.getHomeRoute();
		      var loginRoute = router.getLoginRoute();
		      var redirectTo = _this2.redirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

		      replace(redirectTo);

		      callback();
		    });
		  }
		}, _temp);
		exports.default = LogoutRoute;

	/***/ },
	/* 98 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _class, _temp;

		var _reactRouter = __webpack_require__(32);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var AuthenticatedRoute = (_temp = _class = function (_Route) {
		  _inherits(AuthenticatedRoute, _Route);

		  function AuthenticatedRoute() {
		    _classCallCheck(this, AuthenticatedRoute);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(AuthenticatedRoute).apply(this, arguments));
		  }

		  return AuthenticatedRoute;
		}(_reactRouter.Route), _class.defaultProps = {
		  onEnter: function onEnter(nextState, replace, callback) {
		    _context2.default.userStore.isAuthenticated({
		      inGroup: this.inGroup
		    }, function (err, authenticated) {
		      if (!authenticated) {
		        var router = _context2.default.getRouter();
		        var homeRoute = router.getHomeRoute();
		        var loginRoute = router.getLoginRoute();
		        var redirectTo = (loginRoute || {}).path || (homeRoute || {}).path || '/';

		        replace(redirectTo);
		      }
		      callback();
		    });
		  }
		}, _temp);
		exports.default = AuthenticatedRoute;

	/***/ },
	/* 99 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _class, _temp;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Authenticated = (_temp = _class = function (_React$Component) {
		  _inherits(Authenticated, _React$Component);

		  function Authenticated() {
		    _classCallCheck(this, Authenticated);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(Authenticated).apply(this, arguments));
		  }

		  _createClass(Authenticated, [{
		    key: 'render',
		    value: function render() {
		      var user = this.context.user;
		      var authenticated = user !== undefined;

		      if (authenticated && this.props.inGroup) {
		        if (user.groups) {
		          authenticated = _utils2.default.groupsMatchExpression(user.groups, this.props.inGroup);
		        } else {
		          _utils2.default.logWarning('<Authenticated>', 'In order to use the inGroup property, you must expand the groups resource for the /me endpoint.');
		        }
		      }

		      var propsToForward = _utils2.default.excludeProps(['inGroup'], this.props);

		      return authenticated ? _utils2.default.enforceRootElement(this.props.children, propsToForward) : null;
		    }
		  }]);

		  return Authenticated;
		}(_react2.default.Component), _class.contextTypes = {
		  user: _react2.default.PropTypes.object
		}, _temp);
		exports.default = Authenticated;

	/***/ },
	/* 100 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _class, _temp;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var NotAuthenticated = (_temp = _class = function (_React$Component) {
		  _inherits(NotAuthenticated, _React$Component);

		  function NotAuthenticated() {
		    _classCallCheck(this, NotAuthenticated);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotAuthenticated).apply(this, arguments));
		  }

		  _createClass(NotAuthenticated, [{
		    key: 'render',
		    value: function render() {
		      var user = this.context.user;
		      var authenticated = user !== undefined;

		      if (this.props.inGroup) {
		        if (authenticated) {
		          if (user.groups) {
		            authenticated = _utils2.default.groupsMatchExpression(user.groups, this.props.inGroup);
		          } else {
		            _utils2.default.logWarning('<NotAuthenticated> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
		          }
		        } else {
		          return null;
		        }
		      }

		      var propsToForward = _utils2.default.excludeProps(['inGroup'], this.props);

		      return !authenticated ? _utils2.default.enforceRootElement(this.props.children, propsToForward) : null;
		    }
		  }]);

		  return NotAuthenticated;
		}(_react2.default.Component), _class.contextTypes = {
		  user: _react2.default.PropTypes.object
		}, _temp);
		exports.default = NotAuthenticated;

	/***/ },
	/* 101 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _reactRouter = __webpack_require__(32);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var LoginLink = function (_React$Component) {
		  _inherits(LoginLink, _React$Component);

		  function LoginLink() {
		    _classCallCheck(this, LoginLink);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginLink).apply(this, arguments));
		  }

		  _createClass(LoginLink, [{
		    key: 'render',
		    value: function render() {
		      var router = _context2.default.getRouter();
		      var loginRoute = router.getLoginRoute();
		      var targetPath = (loginRoute || {}).path || '/login';
		      var selectedProps = _utils2.default.excludeProps(['to', 'children'], this.props);

		      return _react2.default.createElement(
		        _reactRouter.Link,
		        _extends({ to: targetPath }, selectedProps),
		        this.props.children ? this.props.children : 'Login'
		      );
		    }
		  }]);

		  return LoginLink;
		}(_react2.default.Component);

		exports.default = LoginLink;

	/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _class, _temp2;

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var LogoutLink = (_temp2 = _class = function (_React$Component) {
		  _inherits(LogoutLink, _React$Component);

		  function LogoutLink() {
		    var _Object$getPrototypeO;

		    var _temp, _this, _ret;

		    _classCallCheck(this, LogoutLink);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LogoutLink)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
		      disabled: false
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }

		  _createClass(LogoutLink, [{
		    key: '_performRedirect',
		    value: function _performRedirect(primaryRedirectTo) {
		      var router = _context2.default.getRouter();
		      var homeRoute = router.getHomeRoute();
		      var loginRoute = router.getLoginRoute();
		      var redirectTo = primaryRedirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

		      this.context.router.push(redirectTo);
		    }
		  }, {
		    key: 'onClick',
		    value: function onClick(e) {
		      var _this2 = this;

		      e.preventDefault();

		      var primaryRedirectTo = this.props.redirectTo;

		      if (!this.state.disabled) {
		        this.setState({ disabled: true });

		        _UserActions2.default.logout(function () {
		          _this2._performRedirect(primaryRedirectTo);
		        });
		      }
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var selectedProps = _utils2.default.excludeProps(['redirectTo', 'href', 'onClick', 'disabled', 'children'], this.props);

		      return _react2.default.createElement(
		        'a',
		        _extends({ href: '#', onClick: this.onClick.bind(this), disabled: this.state.disabled }, selectedProps),
		        this.props.children ? this.props.children : 'Logout'
		      );
		    }
		  }]);

		  return LogoutLink;
		}(_react2.default.Component), _class.contextTypes = {
		  router: _react2.default.PropTypes.object.isRequired
		}, _temp2);
		exports.default = LogoutLink;

	/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _class2, _temp3;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _reactRouter = __webpack_require__(32);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		var _LoadingText = __webpack_require__(104);

		var _LoadingText2 = _interopRequireDefault(_LoadingText);

		var _SocialLoginButton = __webpack_require__(105);

		var _SocialLoginButton2 = _interopRequireDefault(_SocialLoginButton);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var DefaultLoginForm = function (_React$Component) {
		  _inherits(DefaultLoginForm, _React$Component);

		  function DefaultLoginForm() {
		    var _Object$getPrototypeO;

		    var _temp, _this, _ret;

		    _classCallCheck(this, DefaultLoginForm);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DefaultLoginForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
		      fields: null,
		      socialProviders: null
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }

		  _createClass(DefaultLoginForm, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      var _this2 = this;

		      if (this.state.fields !== null) {
		        return;
		      }

		      var defaultFields = [{
		        label: 'Username or Email',
		        name: 'login',
		        placeholder: 'Username or Email',
		        required: true,
		        type: 'text'
		      }, {
		        label: 'Password',
		        name: 'password',
		        placeholder: 'Password',
		        required: true,
		        type: 'password'
		      }];

		      _context2.default.userStore.getLoginViewData(function (err, data) {
		        var fields = null;
		        var socialProviders = null;

		        if (err) {
		          fields = defaultFields;
		        } else if (data && data.form) {
		          fields = data.form.fields;
		          if (!_this2.props.hideSocial) {
		            data.accountStores.forEach(function (accountStore) {
		              if (!accountStore.provider) {
		                return;
		              }

		              if (socialProviders === null) {
		                socialProviders = [];
		              }

		              socialProviders.push({
		                id: accountStore.provider.providerId
		              });
		            });
		          }
		        }

		        _this2.setState({
		          fields: fields,
		          socialProviders: socialProviders
		        });
		      });
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var fieldMarkup = null;

		      if (this.state.fields !== null) {
		        fieldMarkup = [];

		        this.state.fields.forEach(function (field, index) {
		          var fieldId = 'sp-' + field.name + '-' + index;
		          fieldMarkup.push(_react2.default.createElement(
		            'div',
		            { key: fieldId, className: 'form-group' },
		            _react2.default.createElement(
		              'label',
		              { htmlFor: fieldId, className: 'col-xs-12 col-sm-4 control-label' },
		              field.label
		            ),
		            _react2.default.createElement(
		              'div',
		              { className: 'col-xs-12 col-sm-4' },
		              _react2.default.createElement('input', { type: field.type, className: 'form-control', id: fieldId, name: field.name, placeholder: field.placeholder, required: field.required })
		            )
		          ));
		        });

		        fieldMarkup.push(_react2.default.createElement(
		          'div',
		          { key: 'login-button', className: 'form-group' },
		          _react2.default.createElement(
		            'div',
		            { className: 'col-sm-offset-4 col-sm-4' },
		            _react2.default.createElement(
		              'p',
		              { className: 'alert alert-danger', 'data-spIf': 'form.error' },
		              _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
		            ),
		            _react2.default.createElement(
		              'button',
		              { type: 'submit', className: 'btn btn-primary' },
		              'Login'
		            ),
		            _react2.default.createElement(
		              _reactRouter.Link,
		              { to: '/forgot', className: 'pull-right' },
		              'Forgot Password'
		            )
		          )
		        ));
		      }

		      if (this.state.socialProviders !== null) {
		        var providerButtons = [];

		        this.state.socialProviders.forEach(function (provider, index) {
		          var providerKey = 'sp-' + provider.id + '-' + index;

		          providerButtons.push(_react2.default.createElement(_SocialLoginButton2.default, { key: providerKey, providerId: provider.id, style: { marginRight: '5px', marginBottom: '5px' } }));
		        });

		        if (providerButtons.length) {
		          fieldMarkup.push(_react2.default.createElement(
		            'div',
		            { key: 'provider-buttons', className: 'form-group', style: { paddingTop: '20px' } },
		            _react2.default.createElement(
		              'div',
		              { className: 'col-sm-offset-4 col-sm-4', style: { marginBottom: '10px' } },
		              'Or sign in using...'
		            ),
		            _react2.default.createElement(
		              'div',
		              { className: 'col-sm-offset-4 col-sm-4' },
		              providerButtons
		            )
		          ));
		        }
		      }

		      return _react2.default.createElement(
		        LoginForm,
		        this.props,
		        _react2.default.createElement(
		          'div',
		          { className: 'sp-login-form' },
		          _react2.default.createElement(
		            'div',
		            { className: 'row' },
		            _react2.default.createElement(
		              'div',
		              { className: 'col-xs-12' },
		              _react2.default.createElement(
		                'div',
		                { className: 'form-horizontal' },
		                fieldMarkup ? fieldMarkup : _react2.default.createElement(_LoadingText2.default, null)
		              )
		            )
		          )
		        )
		      );
		    }
		  }]);

		  return DefaultLoginForm;
		}(_react2.default.Component);

		var LoginForm = (_temp3 = _class2 = function (_React$Component2) {
		  _inherits(LoginForm, _React$Component2);

		  function LoginForm() {
		    var _Object$getPrototypeO2;

		    var _temp2, _this3, _ret2;

		    _classCallCheck(this, LoginForm);

		    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		      args[_key2] = arguments[_key2];
		    }

		    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(LoginForm)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this3), _this3.state = {
		      fields: {
		        username: '',
		        password: ''
		      },
		      errorMessage: null,
		      isFormProcessing: false
		    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
		  }

		  _createClass(LoginForm, [{
		    key: 'onFormSubmit',
		    value: function onFormSubmit(e) {
		      var _this4 = this;

		      e.preventDefault();
		      e.persist();

		      var primaryRedirectTo = this.props.redirectTo;
		      var onSubmitSuccess = this.props.onSubmitSuccess;
		      var onSubmitError = this.props.onSubmitError;

		      var setErrorState = function setErrorState(recentError, newError) {
		        _this4.setState({
		          isFormProcessing: false,
		          errorMessage: (newError || recentError).message
		        });
		      };

		      var next = function next(err, data) {
		        if (err) {
		          if (onSubmitError) {
		            return onSubmitError({
		              data: data,
		              error: err
		            }, setErrorState.bind(_this4, err));
		          }

		          return setErrorState(err);
		        }

		        // If the user didn't specify any data,
		        // then simply default to what we have in state.
		        data = data || _this4.state.fields;

		        _UserActions2.default.login({
		          login: data.username,
		          password: data.password
		        }, function (err, result) {
		          if (err) {
		            if (onSubmitError) {
		              return onSubmitError({
		                data: data,
		                error: err
		              }, setErrorState.bind(_this4, err));
		            }

		            return setErrorState(err);
		          }

		          var performRedirect = _this4._performRedirect.bind(_this4, primaryRedirectTo);

		          if (onSubmitSuccess) {
		            return onSubmitSuccess({
		              data: data,
		              result: result
		            }, performRedirect);
		          }

		          performRedirect();
		        });
		      };

		      this.setState({
		        isFormProcessing: true
		      });

		      if (this.props.onSubmit) {
		        e.data = this.state.fields;
		        this.props.onSubmit(e, next);
		      } else {
		        next(null, this.state.fields);
		      }
		    }
		  }, {
		    key: '_performRedirect',
		    value: function _performRedirect(primaryRedirectTo) {
		      var router = _context2.default.getRouter();
		      var homeRoute = router.getHomeRoute();
		      var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
		      var redirectTo = primaryRedirectTo || (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

		      this.context.router.push(redirectTo);
		    }
		  }, {
		    key: '_mapFormFieldHandler',
		    value: function _mapFormFieldHandler(element, tryMapField) {
		      if (element.type === 'input' || element.type === 'textarea') {
		        if (element.props.type !== 'submit') {
		          switch (element.props.name) {
		            case 'login':
		            case 'username':
		              tryMapField('username');
		              break;
		            case 'password':
		              tryMapField('password');
		              break;
		          }
		        }
		      }
		    }
		  }, {
		    key: '_spIfHandler',
		    value: function _spIfHandler(action, element) {
		      var test = null;

		      switch (action) {
		        case 'form.processing':
		          test = this.state.isFormProcessing;
		          break;
		        case 'form.error':
		          test = this.state.errorMessage !== null;
		          break;
		      }

		      return test;
		    }
		  }, {
		    key: '_spBindHandler',
		    value: function _spBindHandler(bind, element) {
		      var result = false;

		      switch (bind) {
		        case 'form.errorMessage':
		          var className = element.props ? element.props.className : undefined;
		          result = _react2.default.createElement(
		            'span',
		            { className: className },
		            this.state.errorMessage
		          );
		          break;
		      }

		      return result;
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      if (this.props.children) {
		        var selectedProps = _utils2.default.excludeProps(['redirectTo', 'hideSocial', 'onSubmit', 'onSubmitError', 'onSubmitSuccess', 'children'], this.props);

		        return _react2.default.createElement(
		          'form',
		          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
		          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
		        );
		      } else {
		        return _react2.default.createElement(DefaultLoginForm, this.props);
		      }
		    }
		  }]);

		  return LoginForm;
		}(_react2.default.Component), _class2.contextTypes = {
		  router: _react2.default.PropTypes.object.isRequired
		}, _temp3);
		exports.default = LoginForm;

	/***/ },
	/* 104 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var LoadingText = function (_React$Component) {
		  _inherits(LoadingText, _React$Component);

		  function LoadingText() {
		    var _Object$getPrototypeO;

		    var _temp, _this, _ret;

		    _classCallCheck(this, LoadingText);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LoadingText)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.waitTimeout = null, _this.state = {
		      text: null
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }

		  _createClass(LoadingText, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      var _this2 = this;

		      this.waitTimeout = setTimeout(function () {
		        _this2.setState({
		          text: _this2.props.text || 'Loading...'
		        });
		      }, this.props.showAfter || 250);
		    }
		  }, {
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      clearTimeout(this.waitTimeout);
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      if (!this.state.text) {
		        return null;
		      }

		      return _react2.default.createElement(
		        'p',
		        _extends({}, this.props, { style: { textAlign: 'center' } }),
		        this.props.children ? this.props.children : this.state.text
		      );
		    }
		  }]);

		  return LoadingText;
		}(_react2.default.Component);

		exports.default = LoadingText;

	/***/ },
	/* 105 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _SocialLoginLink = __webpack_require__(106);

		var _SocialLoginLink2 = _interopRequireDefault(_SocialLoginLink);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var SocialLoginButton = function (_React$Component) {
		  _inherits(SocialLoginButton, _React$Component);

		  function SocialLoginButton() {
		    _classCallCheck(this, SocialLoginButton);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialLoginButton).apply(this, arguments));
		  }

		  _createClass(SocialLoginButton, [{
		    key: 'render',
		    value: function render() {
		      var providerId = this.props.providerId;
		      var selectedProps = _utils2.default.excludeProps(['hideIcon', 'children', 'className'], this.props);

		      return _react2.default.createElement(
		        _SocialLoginLink2.default,
		        _extends({ className: 'btn btn-default btn-social btn-' + providerId + ' ' + this.props.className }, selectedProps),
		        !this.props.hideIcon ? _react2.default.createElement('span', { className: 'fa fa-' + providerId, style: { marginRight: '5px' } }) : null,
		        this.props.children ? this.props.children : _utils2.default.translateProviderIdToName(providerId)
		      );
		    }
		  }]);

		  return SocialLoginButton;
		}(_react2.default.Component);

		exports.default = SocialLoginButton;

	/***/ },
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var providerAuthorizationUris = {
		  github: 'https://github.com/login/oauth/authorize',
		  google: 'https://accounts.google.com/o/oauth2/v2/auth',
		  linkedin: 'https://www.linkedin.com/uas/oauth2/authorization',
		  facebook: 'https://www.facebook.com/dialog/oauth'
		};

		var SocialLoginLink = function (_React$Component) {
		  _inherits(SocialLoginLink, _React$Component);

		  function SocialLoginLink() {
		    var _Object$getPrototypeO;

		    var _temp, _this, _ret;

		    _classCallCheck(this, SocialLoginLink);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SocialLoginLink)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.availableProps = {
		      providerId: null
		    }, _this.state = {
		      disabled: false
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }

		  _createClass(SocialLoginLink, [{
		    key: '_buildRedirectUri',
		    value: function _buildRedirectUri(provider) {
		      return location.protocol + '//' + location.host + '/callbacks/' + provider.providerId;
		    }
		  }, {
		    key: '_createStateCookie',
		    value: function _createStateCookie() {
		      var stateId = _utils2.default.uuid();

		      document.cookie = 'oauthStateToken=' + stateId;

		      return stateId;
		    }
		  }, {
		    key: '_buildAuthorizationUri',
		    value: function _buildAuthorizationUri(provider, scope, redirectUri) {
		      var authorizationUri = providerAuthorizationUris[provider.providerId];

		      if (!authorizationUri) {
		        return false;
		      }

		      var queryString = {
		        client_id: provider.clientId,
		        scope: scope || provider.scope,
		        redirect_uri: redirectUri || this._buildRedirectUri(provider),
		        state: this._createStateCookie(),
		        response_type: 'code'
		      };

		      return authorizationUri + '?' + _utils2.default.encodeQueryString(queryString);
		    }
		  }, {
		    key: '_findProvider',
		    value: function _findProvider(accountStores, providerId) {
		      var provider;

		      for (var i = 0; i < accountStores.length; i++) {
		        var item = accountStores[i];

		        if (item.provider.providerId === providerId) {
		          provider = item.provider;
		          break;
		        }
		      }

		      return provider;
		    }
		  }, {
		    key: '_onClick',
		    value: function _onClick(e) {
		      var _this2 = this;

		      e.preventDefault();

		      if (!this.state.disabled) {
		        this.setState({ disabled: true });

		        var providerId = this.props.providerId;

		        _context2.default.userStore.getLoginViewData(function (err, result) {
		          if (err) {
		            return console.error('Error: Unable to retrieve login view data.');
		          }

		          var provider = _this2._findProvider(result.accountStores, providerId);

		          if (!provider) {
		            return console.error('Error: Unable to login. Social provider ' + _utils2.default.translateProviderIdToName(providerId) + ' not configured.');
		          }

		          window.location.href = _this2._buildAuthorizationUri(provider, _this2.props.scope, _this2.props.redirectUri);
		        });
		      }
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var providerId = this.props.providerId;
		      var selectedProps = _utils2.default.excludeProps(['providerId', 'scope', 'redirectUri', 'children', 'disabled', 'onClick', 'href'], this.props);

		      return _react2.default.createElement(
		        'a',
		        _extends({}, selectedProps, { href: '#', onClick: this._onClick.bind(this), disabled: this.state.disabled }),
		        this.props.children ? this.props.children : 'Login with ' + _utils2.default.translateProviderIdToName(providerId)
		      );
		    }
		  }]);

		  return SocialLoginLink;
		}(_react2.default.Component);

		exports.default = SocialLoginLink;

	/***/ },
	/* 107 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _class2, _temp3;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _reactRouter = __webpack_require__(32);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var DefaultUserProfileForm = function (_React$Component) {
		  _inherits(DefaultUserProfileForm, _React$Component);

		  function DefaultUserProfileForm() {
		    var _Object$getPrototypeO;

		    var _temp, _this, _ret;

		    _classCallCheck(this, DefaultUserProfileForm);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DefaultUserProfileForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
		      showPasswordVerification: false
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }

		  _createClass(DefaultUserProfileForm, [{
		    key: 'onPasswordChanged',
		    value: function onPasswordChanged(e) {
		      this.setState({
		        showPasswordVerification: e.target.value.length > 0
		      });
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      return _react2.default.createElement(
		        UserProfileForm,
		        this.props,
		        _react2.default.createElement(
		          'div',
		          { className: 'sp-update-profile-form' },
		          _react2.default.createElement(
		            'div',
		            { className: 'row' },
		            _react2.default.createElement(
		              'div',
		              { className: 'col-xs-12' },
		              _react2.default.createElement(
		                'div',
		                { className: 'form-horizontal' },
		                _react2.default.createElement(
		                  'div',
		                  { className: 'form-group' },
		                  _react2.default.createElement(
		                    'label',
		                    { htmlFor: 'givenName', className: 'col-xs-12 col-sm-4 control-label' },
		                    'First name'
		                  ),
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-xs-12 col-sm-4' },
		                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'givenName', name: 'givenName', placeholder: 'First name', required: true })
		                  )
		                ),
		                _react2.default.createElement(
		                  'div',
		                  { className: 'form-group' },
		                  _react2.default.createElement(
		                    'label',
		                    { htmlFor: 'surname', className: 'col-xs-12 col-sm-4 control-label' },
		                    'Last name'
		                  ),
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-xs-12 col-sm-4' },
		                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'surname', name: 'surname', placeholder: 'Last name', required: true })
		                  )
		                ),
		                _react2.default.createElement(
		                  'div',
		                  { className: 'form-group' },
		                  _react2.default.createElement(
		                    'label',
		                    { htmlFor: 'email', className: 'col-xs-12 col-sm-4 control-label' },
		                    'Email'
		                  ),
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-xs-12 col-sm-4' },
		                    _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'email', name: 'email', placeholder: 'Email', required: true })
		                  )
		                ),
		                _react2.default.createElement(
		                  'div',
		                  { className: 'form-group' },
		                  _react2.default.createElement(
		                    'label',
		                    { htmlFor: 'password', className: 'col-xs-12 col-sm-4 control-label' },
		                    'Password'
		                  ),
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-xs-12 col-sm-4' },
		                    _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'password', name: 'password', placeholder: 'Password', onChange: this.onPasswordChanged.bind(this) })
		                  )
		                ),
		                _react2.default.createElement(
		                  'div',
		                  null,
		                  this.state.showPasswordVerification ? _react2.default.createElement(
		                    'div',
		                    { className: 'form-group' },
		                    _react2.default.createElement(
		                      'label',
		                      { htmlFor: 'password', className: 'col-xs-12 col-sm-4 control-label' },
		                      'Existing password'
		                    ),
		                    _react2.default.createElement(
		                      'div',
		                      { className: 'col-xs-12 col-sm-4' },
		                      _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'existingPassword', name: 'existingPassword', placeholder: 'Existing password', required: true })
		                    )
		                  ) : null
		                ),
		                _react2.default.createElement(
		                  'div',
		                  { key: 'update-button', className: 'form-group' },
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-sm-offset-4 col-sm-4' },
		                    _react2.default.createElement(
		                      'p',
		                      { className: 'alert alert-danger', 'data-spIf': 'form.error' },
		                      _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
		                    ),
		                    _react2.default.createElement(
		                      'p',
		                      { className: 'alert alert-success', 'data-spIf': 'form.successful' },
		                      'Profile updated.'
		                    ),
		                    _react2.default.createElement(
		                      'button',
		                      { type: 'submit', className: 'btn btn-primary' },
		                      _react2.default.createElement(
		                        'span',
		                        { 'data-spIf': '!form.processing' },
		                        'Update'
		                      ),
		                      _react2.default.createElement(
		                        'span',
		                        { 'data-spIf': 'form.processing' },
		                        'Updating...'
		                      )
		                    )
		                  )
		                )
		              )
		            )
		          )
		        )
		      );
		    }
		  }]);

		  return DefaultUserProfileForm;
		}(_react2.default.Component);

		var UserProfileForm = (_temp3 = _class2 = function (_React$Component2) {
		  _inherits(UserProfileForm, _React$Component2);

		  function UserProfileForm() {
		    var _Object$getPrototypeO2;

		    var _temp2, _this2, _ret2;

		    _classCallCheck(this, UserProfileForm);

		    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		      args[_key2] = arguments[_key2];
		    }

		    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(UserProfileForm)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.state = {
		      fields: {},
		      defaultFields: _this2.context.user,
		      errorMessage: null,
		      isFormProcessing: false,
		      isFormSuccessful: false
		    }, _this2._updateSessionData = function (data, callback) {
		      var sessionStore = _context2.default.sessionStore;

		      if (!sessionStore.empty()) {
		        var hasChanged = false;
		        var updatedSession = _utils2.default.clone(sessionStore.get());

		        for (var key in data) {
		          if (key in updatedSession) {
		            if (updatedSession[key] != data[key]) {
		              hasChanged = true;
		              updatedSession[key] = data[key];
		            }
		          }
		        }

		        if (hasChanged) {
		          _context2.default.userStore.resolveSession(callback, true);
		        } else {
		          callback();
		        }
		      }
		    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
		  }

		  _createClass(UserProfileForm, [{
		    key: '_onFormSubmit',
		    value: function _onFormSubmit(e) {
		      var _this3 = this;

		      e.preventDefault();
		      e.persist();

		      var next = function next(err, data) {
		        if (err) {
		          return _this3.setState({
		            isFormProcessing: false,
		            isFormSuccessful: false,
		            errorMessage: err.message
		          });
		        }

		        // If the user didn't specify any data,
		        // then simply default to what we have in state.
		        data = data || _this3.state.fields;

		        _UserActions2.default.updateProfile(data, function (err) {
		          if (err) {
		            return _this3.setState({
		              isFormProcessing: false,
		              isFormSuccessful: false,
		              errorMessage: err.message
		            });
		          }

		          _this3._updateSessionData(data, function () {
		            _this3.setState({
		              isFormProcessing: false,
		              isFormSuccessful: true,
		              errorMessage: null
		            });
		          });
		        });
		      };

		      this.setState({
		        isFormProcessing: true
		      });

		      if (this.props.onSubmit) {
		        e.data = this.state.fields;
		        this.props.onSubmit(e, next);
		      } else {
		        next(null, this.state.fields);
		      }
		    }
		  }, {
		    key: '_mapFormFieldHandler',
		    value: function _mapFormFieldHandler(element, tryMapField) {
		      var defaultValue = element.props.name ? _utils2.default.getFieldValue(this.state.defaultFields, element.props.name) : undefined;

		      // Only support input fields, to begin with.
		      if (element.type === 'input') {
		        if (element.props.type === 'submit') {
		          return;
		        }

		        tryMapField(element.props.name, defaultValue);
		      }
		    }
		  }, {
		    key: '_spIfHandler',
		    value: function _spIfHandler(action, element) {
		      var test = null;

		      switch (action) {
		        case 'form.successful':
		          test = this.state.isFormSuccessful;
		          break;
		        case 'form.processing':
		          test = this.state.isFormProcessing;
		          break;
		        case 'form.error':
		          test = !!this.state.errorMessage;
		          break;
		      }

		      return test;
		    }
		  }, {
		    key: '_spBindHandler',
		    value: function _spBindHandler(bind, element) {
		      var result = false;

		      switch (bind) {
		        case 'form.errorMessage':
		          var className = element.props ? element.props.className : undefined;
		          result = _react2.default.createElement(
		            'span',
		            { className: className },
		            this.state.errorMessage
		          );
		          break;
		      }

		      return result;
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      if (this.props.children) {
		        var selectedProps = _utils2.default.excludeProps(['onSubmit', 'children'], this.props);

		        return _react2.default.createElement(
		          'form',
		          _extends({ onSubmit: this._onFormSubmit.bind(this) }, selectedProps),
		          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
		        );
		      } else {
		        return _react2.default.createElement(DefaultUserProfileForm, this.props);
		      }
		    }
		  }]);

		  return UserProfileForm;
		}(_react2.default.Component), _class2.contextTypes = {
		  user: _react2.default.PropTypes.object
		}, _temp3);
		exports.default = UserProfileForm;

	/***/ },
	/* 108 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _class2, _temp3;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _reactRouter = __webpack_require__(32);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		var _LoginLink = __webpack_require__(101);

		var _LoginLink2 = _interopRequireDefault(_LoginLink);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		var _LoadingText = __webpack_require__(104);

		var _LoadingText2 = _interopRequireDefault(_LoadingText);

		var _SocialLoginButton = __webpack_require__(105);

		var _SocialLoginButton2 = _interopRequireDefault(_SocialLoginButton);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var DefaultRegistrationForm = function (_React$Component) {
		  _inherits(DefaultRegistrationForm, _React$Component);

		  function DefaultRegistrationForm() {
		    var _Object$getPrototypeO;

		    var _temp, _this, _ret;

		    _classCallCheck(this, DefaultRegistrationForm);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DefaultRegistrationForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
		      fields: null,
		      socialProviders: null
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }

		  _createClass(DefaultRegistrationForm, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      var _this2 = this;

		      if (this.state.fields !== null) {
		        return;
		      }

		      var defaultFields = [{
		        label: 'First Name',
		        name: 'givenName',
		        placeholder: 'First Name',
		        required: true,
		        type: 'text'
		      }, {
		        label: 'Last Name',
		        name: 'surname',
		        placeholder: 'Last Name',
		        required: true,
		        type: 'text'
		      }, {
		        label: 'Email',
		        name: 'email',
		        placeholder: 'Email',
		        required: true,
		        type: 'email'
		      }, {
		        label: 'Password',
		        name: 'password',
		        placeholder: 'Password',
		        required: true,
		        type: 'password'
		      }];

		      _context2.default.userStore.getRegisterViewData(function (err, data) {
		        var fields = null;
		        var socialProviders = null;

		        if (err) {
		          fields = defaultFields;
		        } else if (data && data.form) {
		          fields = data.form.fields;
		          if (!_this2.props.hideSocial) {
		            data.accountStores.forEach(function (accountStore) {
		              if (!accountStore.provider) {
		                return;
		              }

		              if (socialProviders === null) {
		                socialProviders = [];
		              }

		              socialProviders.push({
		                id: accountStore.provider.providerId
		              });
		            });
		          }
		        }

		        _this2.setState({
		          fields: fields,
		          socialProviders: socialProviders
		        });
		      });
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var fieldMarkup = null;

		      if (this.state.fields !== null) {
		        fieldMarkup = [];

		        this.state.fields.forEach(function (field, index) {
		          var fieldId = 'sp-' + field.name + '-' + index;
		          fieldMarkup.push(_react2.default.createElement(
		            'div',
		            { key: fieldId, className: 'form-group' },
		            _react2.default.createElement(
		              'label',
		              { htmlFor: fieldId, className: 'col-xs-12 col-sm-4 control-label' },
		              field.label
		            ),
		            _react2.default.createElement(
		              'div',
		              { className: 'col-xs-12 col-sm-4' },
		              _react2.default.createElement('input', { type: field.type, className: 'form-control', id: fieldId, name: field.name, placeholder: field.placeholder, required: field.required })
		            )
		          ));
		        });

		        fieldMarkup.push(_react2.default.createElement(
		          'div',
		          { key: 'register-button', className: 'form-group' },
		          _react2.default.createElement(
		            'div',
		            { className: 'col-sm-offset-4 col-sm-4' },
		            _react2.default.createElement(
		              'p',
		              { className: 'alert alert-danger', 'data-spIf': 'form.error' },
		              _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
		            ),
		            _react2.default.createElement(
		              'button',
		              { type: 'submit', className: 'btn btn-primary' },
		              'Register'
		            )
		          )
		        ));
		      }

		      if (this.state.socialProviders !== null) {
		        var providerButtons = [];

		        this.state.socialProviders.forEach(function (provider, index) {
		          var providerKey = 'sp-' + provider.id + '-' + index;

		          providerButtons.push(_react2.default.createElement(_SocialLoginButton2.default, { key: providerKey, providerId: provider.id, style: { marginRight: '5px', marginBottom: '5px' } }));
		        });

		        if (providerButtons.length) {
		          fieldMarkup.push(_react2.default.createElement(
		            'div',
		            { key: 'provider-buttons', className: 'form-group', style: { paddingTop: '20px' } },
		            _react2.default.createElement(
		              'div',
		              { className: 'col-sm-offset-4 col-sm-4', style: { marginBottom: '10px' } },
		              'Or register using...'
		            ),
		            _react2.default.createElement(
		              'div',
		              { className: 'col-sm-offset-4 col-sm-4' },
		              providerButtons
		            )
		          ));
		        }
		      }

		      return _react2.default.createElement(
		        RegistrationForm,
		        this.props,
		        _react2.default.createElement(
		          'div',
		          { className: 'sp-login-form' },
		          _react2.default.createElement(
		            'div',
		            { className: 'row', 'data-spIf': 'account.created' },
		            _react2.default.createElement(
		              'div',
		              { className: 'col-sm-offset-4 col-xs-12 col-sm-4' },
		              _react2.default.createElement(
		                'p',
		                { className: 'alert alert-success', 'data-spIf': 'account.enabled' },
		                'Your account has been created. ',
		                _react2.default.createElement(
		                  _LoginLink2.default,
		                  null,
		                  'Login Now'
		                ),
		                '.'
		              ),
		              _react2.default.createElement(
		                'div',
		                { 'data-spIf': '!account.enabled' },
		                _react2.default.createElement(
		                  'p',
		                  { className: 'alert alert-success' },
		                  'Your account has been created. Please check your email for a verification link.'
		                ),
		                _react2.default.createElement(
		                  'p',
		                  { className: 'pull-right' },
		                  _react2.default.createElement(
		                    _LoginLink2.default,
		                    null,
		                    'Back to Login'
		                  )
		                )
		              )
		            )
		          ),
		          _react2.default.createElement(
		            'div',
		            { className: 'row', 'data-spIf': '!account.created' },
		            _react2.default.createElement(
		              'div',
		              { className: 'col-xs-12' },
		              _react2.default.createElement(
		                'div',
		                { className: 'form-horizontal' },
		                fieldMarkup ? fieldMarkup : _react2.default.createElement(_LoadingText2.default, null)
		              )
		            )
		          )
		        )
		      );
		    }
		  }]);

		  return DefaultRegistrationForm;
		}(_react2.default.Component);

		var RegistrationForm = (_temp3 = _class2 = function (_React$Component2) {
		  _inherits(RegistrationForm, _React$Component2);

		  function RegistrationForm() {
		    var _Object$getPrototypeO2;

		    var _temp2, _this3, _ret2;

		    _classCallCheck(this, RegistrationForm);

		    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		      args[_key2] = arguments[_key2];
		    }

		    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(RegistrationForm)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this3), _this3.state = {
		      fields: {
		        givenName: '',
		        surname: '',
		        email: '',
		        password: ''
		      },
		      errorMessage: null,
		      isFormProcessing: false,
		      isAccountCreated: false,
		      isAccountEnabled: false
		    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
		  }

		  _createClass(RegistrationForm, [{
		    key: 'onFormSubmit',
		    value: function onFormSubmit(e) {
		      var _this4 = this;

		      e.preventDefault();
		      e.persist();

		      var primaryRedirectTo = this.props.redirectTo;
		      var onSubmitSuccess = this.props.onSubmitSuccess;
		      var onSubmitError = this.props.onSubmitError;

		      var setErrorState = function setErrorState(recentError, newError) {
		        _this4.setState({
		          isFormProcessing: false,
		          isAccountCreated: false,
		          errorMessage: (newError || recentError).message
		        });
		      };

		      var next = function next(err, data) {
		        if (err) {
		          if (onSubmitError) {
		            return onSubmitError({
		              data: data,
		              error: err
		            }, setErrorState.bind(_this4, err));
		          }

		          return setErrorState(err);
		        }

		        // If the user didn't specify any data,
		        // then simply default to what we have in state.
		        data = data || _this4.state.fields;

		        _UserActions2.default.register(data, function (err, result) {
		          if (err) {
		            if (onSubmitError) {
		              return onSubmitError({
		                data: data,
		                result: result,
		                error: err
		              }, setErrorState.bind(_this4, err));
		            }

		            setErrorState(err);
		          } else if (result.status === 'ENABLED') {
		            _UserActions2.default.login({
		              login: data.email || data.username,
		              password: data.password
		            }, function (err) {
		              if (err) {
		                if (onSubmitError) {
		                  return onSubmitError({
		                    data: data,
		                    result: result,
		                    error: err
		                  }, setErrorState.bind(_this4, err));
		                }

		                return setErrorState(err);
		              }

		              var performRedirect = _this4._performRedirect.bind(_this4, primaryRedirectTo);

		              if (onSubmitSuccess) {
		                return onSubmitSuccess({
		                  data: data,
		                  result: result
		                }, performRedirect);
		              }

		              performRedirect();
		            });
		          } else {
		            var setSuccessState = function setSuccessState() {
		              _this4.setState({
		                isFormProcessing: false,
		                isAccountCreated: true,
		                isAccountEnabled: false
		              });
		            };

		            if (onSubmitSuccess) {
		              return onSubmitSuccess({
		                data: data,
		                result: result
		              }, setSuccessState);
		            }

		            setSuccessState();
		          }
		        });
		      };

		      this.setState({
		        isFormProcessing: true
		      });

		      if (this.props.onSubmit) {
		        e.data = this.state.fields;
		        this.props.onSubmit(e, next);
		      } else {
		        next(null, this.state.fields);
		      }
		    }
		  }, {
		    key: '_performRedirect',
		    value: function _performRedirect(primaryRedirectTo) {
		      var router = _context2.default.getRouter();
		      var homeRoute = router.getHomeRoute();
		      var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
		      var redirectTo = primaryRedirectTo || (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

		      this.context.router.push(redirectTo);
		    }
		  }, {
		    key: '_mapFormFieldHandler',
		    value: function _mapFormFieldHandler(element, tryMapField) {
		      if (['input', 'textarea'].indexOf(element.type) > -1) {
		        if (element.props.type !== 'submit') {
		          var name = element.props.name;

		          if (name.indexOf('customData.') === 0) {
		            tryMapField(name);
		            return;
		          }

		          switch (name) {
		            case 'email':
		              tryMapField('email');
		              break;
		            case 'login':
		            case 'username':
		              tryMapField('username');
		              break;
		            case 'givenName':
		            case 'firstName':
		              tryMapField('givenName');
		              break;
		            case 'surname':
		            case 'lastName':
		              tryMapField('surname');
		              break;
		            case 'password':
		              tryMapField('password');
		              break;
		          }
		        }
		      }
		    }
		  }, {
		    key: '_spIfHandler',
		    value: function _spIfHandler(action, element) {
		      var test = null;

		      switch (action) {
		        case 'form.processing':
		          test = this.state.isFormProcessing;
		          break;
		        case 'form.error':
		          test = !!this.state.errorMessage;
		          break;
		        case 'account.created':
		          test = this.state.isAccountCreated;
		          break;
		        case 'account.enabled':
		          test = this.state.isAccountEnabled;
		          break;
		      }

		      return test;
		    }
		  }, {
		    key: '_spBindHandler',
		    value: function _spBindHandler(bind, element) {
		      var result = false;

		      switch (bind) {
		        case 'form.errorMessage':
		          var className = element.props ? element.props.className : undefined;
		          result = _react2.default.createElement(
		            'span',
		            { className: className },
		            this.state.errorMessage
		          );
		          break;
		      }

		      return result;
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      if (this.props.children) {
		        var selectedProps = _utils2.default.excludeProps(['redirectTo', 'hideSocial', 'onSubmit', 'onSubmitError', 'onSubmitSuccess', 'children'], this.props);

		        return _react2.default.createElement(
		          'form',
		          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
		          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
		        );
		      } else {
		        return _react2.default.createElement(DefaultRegistrationForm, this.props);
		      }
		    }
		  }]);

		  return RegistrationForm;
		}(_react2.default.Component), _class2.contextTypes = {
		  router: _react2.default.PropTypes.object.isRequired
		}, _temp3);
		exports.default = RegistrationForm;

	/***/ },
	/* 109 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _reactRouter = __webpack_require__(32);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _LoginLink = __webpack_require__(101);

		var _LoginLink2 = _interopRequireDefault(_LoginLink);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var DefaultResetPasswordForm = function (_React$Component) {
		  _inherits(DefaultResetPasswordForm, _React$Component);

		  function DefaultResetPasswordForm() {
		    _classCallCheck(this, DefaultResetPasswordForm);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultResetPasswordForm).apply(this, arguments));
		  }

		  _createClass(DefaultResetPasswordForm, [{
		    key: 'render',
		    value: function render() {
		      return _react2.default.createElement(
		        ResetPasswordForm,
		        this.props,
		        _react2.default.createElement(
		          'div',
		          { className: 'sp-reset-password-form' },
		          _react2.default.createElement(
		            'div',
		            { className: 'row' },
		            _react2.default.createElement(
		              'div',
		              { className: 'col-sm-offset-4 col-xs-12 col-sm-4', 'data-spIf': 'form.sent' },
		              _react2.default.createElement(
		                'p',
		                { className: 'alert alert-success' },
		                'We have sent a password reset link to the email address of the account that you specified. Please check your email for this message, then click on the link.'
		              ),
		              _react2.default.createElement(
		                'p',
		                { className: 'pull-right' },
		                _react2.default.createElement(
		                  _LoginLink2.default,
		                  null,
		                  'Back to Login'
		                )
		              )
		            ),
		            _react2.default.createElement(
		              'div',
		              { className: 'col-xs-12', 'data-spIf': '!form.sent' },
		              _react2.default.createElement(
		                'div',
		                { className: 'form-horizontal' },
		                _react2.default.createElement(
		                  'div',
		                  { className: 'form-group' },
		                  _react2.default.createElement(
		                    'label',
		                    { htmlFor: 'spEmail', className: 'col-xs-12 col-sm-4 control-label' },
		                    'Email or Username'
		                  ),
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-xs-12 col-sm-4' },
		                    _react2.default.createElement('input', { className: 'form-control', id: 'spEmail', name: 'email', placeholder: 'Your Email Address' })
		                  )
		                ),
		                _react2.default.createElement(
		                  'div',
		                  { className: 'form-group' },
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-sm-offset-4 col-xs-12' },
		                    _react2.default.createElement(
		                      'p',
		                      { 'data-spIf': 'form.error' },
		                      _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
		                    ),
		                    _react2.default.createElement(
		                      'button',
		                      { type: 'submit', className: 'btn btn-primary' },
		                      'Request Password Reset'
		                    )
		                  )
		                )
		              )
		            )
		          )
		        )
		      );
		    }
		  }]);

		  return DefaultResetPasswordForm;
		}(_react2.default.Component);

		var ResetPasswordForm = function (_React$Component2) {
		  _inherits(ResetPasswordForm, _React$Component2);

		  function ResetPasswordForm() {
		    var _Object$getPrototypeO;

		    var _temp, _this2, _ret;

		    _classCallCheck(this, ResetPasswordForm);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ResetPasswordForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = {
		      fields: {
		        email: ''
		      },
		      errorMessage: null,
		      isFormProcessing: false,
		      isFormSent: false
		    }, _temp), _possibleConstructorReturn(_this2, _ret);
		  }

		  _createClass(ResetPasswordForm, [{
		    key: 'onFormSubmit',
		    value: function onFormSubmit(e) {
		      var _this3 = this;

		      e.preventDefault();
		      e.persist();

		      var next = function next(err, data) {
		        if (err) {
		          return _this3.setState({
		            isFormProcessing: false,
		            errorMessage: err.message
		          });
		        }

		        // If the user didn't specify any data,
		        // then simply default to what we have in state.
		        data = data || _this3.state.fields;

		        _UserActions2.default.forgotPassword(_this3.state.fields, function (err) {
		          if (err) {
		            _this3.setState({
		              isFormProcessing: false,
		              errorMessage: err.message
		            });
		          } else {
		            _this3.setState({
		              isFormSent: true,
		              isFormProcessing: false,
		              errorMessage: null
		            });
		          }
		        });
		      };

		      this.setState({
		        isFormProcessing: true
		      });

		      if (this.props.onSubmit) {
		        e.data = this.state.fields;
		        this.props.onSubmit(e, next);
		      } else {
		        next(null, this.state.fields);
		      }
		    }
		  }, {
		    key: '_mapFormFieldHandler',
		    value: function _mapFormFieldHandler(element, tryMapField) {
		      if (element.type === 'input' || element.type === 'textarea') {
		        if (element.props.type !== 'submit') {
		          switch (element.props.name) {
		            case 'email':
		              tryMapField('email');
		              break;
		          }
		        }
		      }
		    }
		  }, {
		    key: '_spIfHandler',
		    value: function _spIfHandler(action, element) {
		      var test = null;

		      switch (action) {
		        case 'form.processing':
		          test = this.state.isFormProcessing;
		          break;
		        case 'form.sent':
		          test = this.state.isFormSent;
		          break;
		        case 'form.error':
		          test = this.state.errorMessage !== null;
		          break;
		      }

		      return test;
		    }
		  }, {
		    key: '_spBindHandler',
		    value: function _spBindHandler(bind, element) {
		      var result = false;

		      switch (bind) {
		        case 'form.errorMessage':
		          var className = element.props ? element.props.className : undefined;
		          result = _react2.default.createElement(
		            'span',
		            { className: className },
		            this.state.errorMessage
		          );
		          break;
		      }

		      return result;
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      if (this.props.children) {
		        var selectedProps = _utils2.default.excludeProps(['onSubmit', 'children'], this.props);

		        return _react2.default.createElement(
		          'form',
		          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
		          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
		        );
		      } else {
		        return _react2.default.createElement(DefaultResetPasswordForm, this.props);
		      }
		    }
		  }]);

		  return ResetPasswordForm;
		}(_react2.default.Component);

		exports.default = ResetPasswordForm;

	/***/ },
	/* 110 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _reactRouter = __webpack_require__(32);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _LoginLink = __webpack_require__(101);

		var _LoginLink2 = _interopRequireDefault(_LoginLink);

		var _LoadingText = __webpack_require__(104);

		var _LoadingText2 = _interopRequireDefault(_LoadingText);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var DefaultChangePasswordForm = function (_React$Component) {
		  _inherits(DefaultChangePasswordForm, _React$Component);

		  function DefaultChangePasswordForm() {
		    _classCallCheck(this, DefaultChangePasswordForm);

		    return _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultChangePasswordForm).apply(this, arguments));
		  }

		  _createClass(DefaultChangePasswordForm, [{
		    key: 'render',
		    value: function render() {
		      return _react2.default.createElement(
		        ChangePasswordForm,
		        this.props,
		        _react2.default.createElement(
		          'div',
		          { className: 'sp-change-password-form' },
		          _react2.default.createElement(
		            'div',
		            { className: 'row' },
		            _react2.default.createElement(
		              'div',
		              { className: 'col-sm-offset-4 col-xs-12 col-sm-4', 'data-spIf': 'form.sent' },
		              _react2.default.createElement(
		                'p',
		                { className: 'alert alert-success' },
		                'Your new password has been set. Please ',
		                _react2.default.createElement(_LoginLink2.default, null),
		                '.'
		              )
		            ),
		            _react2.default.createElement(
		              'div',
		              { className: 'col-xs-12', 'data-spIf': '!form.sent' },
		              _react2.default.createElement(
		                'div',
		                { className: 'form-horizontal' },
		                _react2.default.createElement(
		                  'div',
		                  { className: 'form-group' },
		                  _react2.default.createElement(
		                    'label',
		                    { htmlFor: 'spPassword', className: 'col-xs-12 col-sm-4 control-label' },
		                    'New Password'
		                  ),
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-xs-12 col-sm-4' },
		                    _react2.default.createElement('input', { id: 'spPassword', type: 'password', name: 'password', className: 'form-control', placeholder: 'New Password', required: true })
		                  )
		                ),
		                _react2.default.createElement(
		                  'div',
		                  { className: 'form-group' },
		                  _react2.default.createElement(
		                    'label',
		                    { htmlFor: 'spConfirmPassword', className: 'col-xs-12 col-sm-4 control-label' },
		                    'Confirm New Password'
		                  ),
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-xs-12 col-sm-4' },
		                    _react2.default.createElement('input', { id: 'spConfirmPassword', type: 'password', name: 'confirmPassword', className: 'form-control', placeholder: 'Confirm New Password', required: true })
		                  )
		                ),
		                _react2.default.createElement(
		                  'div',
		                  { className: 'form-group' },
		                  _react2.default.createElement(
		                    'div',
		                    { className: 'col-sm-offset-4 col-sm-4' },
		                    _react2.default.createElement(
		                      'p',
		                      { className: 'alert alert-danger', 'data-spIf': 'form.error' },
		                      _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
		                    ),
		                    _react2.default.createElement(
		                      'button',
		                      { type: 'submit', className: 'btn btn-primary' },
		                      _react2.default.createElement(
		                        'span',
		                        { 'data-spIf': 'form.processing' },
		                        'Setting New Password...'
		                      ),
		                      _react2.default.createElement(
		                        'span',
		                        { 'data-spIf': '!form.processing' },
		                        'Set New Password'
		                      )
		                    )
		                  )
		                )
		              )
		            )
		          )
		        )
		      );
		    }
		  }]);

		  return DefaultChangePasswordForm;
		}(_react2.default.Component);

		var ChangePasswordForm = function (_React$Component2) {
		  _inherits(ChangePasswordForm, _React$Component2);

		  function ChangePasswordForm() {
		    var _Object$getPrototypeO;

		    _classCallCheck(this, ChangePasswordForm);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    var _this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ChangePasswordForm)).call.apply(_Object$getPrototypeO, [this].concat(args)));

		    _this2.state = {
		      spToken: null,
		      fields: {
		        password: ''
		      },
		      errorMessage: null,
		      isFormSent: false,
		      isFormProcessing: false
		    };


		    if (!_this2.props || !('spToken' in _this2.props)) {
		      throw new Error('[Stormpath SDK/Error] ChangePasswordForm: Property \'spToken\' is required.');
		    }

		    _this2.state.spToken = _this2.props.spToken;
		    return _this2;
		  }

		  _createClass(ChangePasswordForm, [{
		    key: 'onFormSubmit',
		    value: function onFormSubmit(e) {
		      var _this3 = this;

		      e.preventDefault();
		      e.persist();

		      var next = function next(err, data) {
		        if (err) {
		          return _this3.setState({
		            isFormProcessing: false,
		            errorMessage: err.message
		          });
		        }

		        // If the user didn't specify any data,
		        // then simply default to what we have in state.
		        data = data || _this3.state.fields;

		        if ('confirmPassword' in data && data.password !== data.confirmPassword) {
		          return _this3.setState({
		            isFormProcessing: false,
		            errorMessage: 'Passwords does not match.'
		          });
		        }

		        _UserActions2.default.changePassword(data, function (err) {
		          if (err) {
		            if (err.status === 404) {
		              err.message = 'The reset password token is not valid. Please try resetting your password again.';
		            }

		            return _this3.setState({
		              isFormProcessing: false,
		              errorMessage: err.message
		            });
		          }

		          _this3.setState({
		            isFormProcessing: false,
		            isFormSent: true
		          });
		        });
		      };

		      this.setState({
		        errorMessage: null,
		        isFormSent: false,
		        isFormProcessing: true
		      });

		      var data = this.state.fields;

		      if (this.state.spToken) {
		        data.sptoken = this.props.spToken;
		      }

		      if (this.props.onSubmit) {
		        e.data = data;
		        this.props.onSubmit(e, next);
		      } else {
		        next(null, data);
		      }
		    }
		  }, {
		    key: '_mapFormFieldHandler',
		    value: function _mapFormFieldHandler(element, tryMapField) {
		      if (element.type === 'input' || element.type === 'textarea') {
		        if (element.props.type !== 'submit') {
		          switch (element.props.name) {
		            case 'password':
		              tryMapField('password');
		              break;
		            case 'confirmPassword':
		              tryMapField('confirmPassword');
		              break;
		          }
		        }
		      }
		    }
		  }, {
		    key: '_spIfHandler',
		    value: function _spIfHandler(action, element) {
		      var test = null;

		      switch (action) {
		        case 'form.sent':
		          test = this.state.isFormSent;
		          break;
		        case 'form.processing':
		          test = this.state.isFormProcessing;
		          break;
		        case 'form.error':
		          test = this.state.errorMessage !== null;
		          break;
		      }

		      return test;
		    }
		  }, {
		    key: '_spBindHandler',
		    value: function _spBindHandler(bind, element) {
		      var result = false;

		      switch (bind) {
		        case 'form.errorMessage':
		          var className = element.props ? element.props.className : undefined;
		          result = _react2.default.createElement(
		            'span',
		            { className: className },
		            this.state.errorMessage
		          );
		          break;
		      }

		      return result;
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      if (this.props.children) {
		        var selectedProps = _utils2.default.excludeProps(['onSubmit', 'children', 'spToken'], this.props);

		        return _react2.default.createElement(
		          'form',
		          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
		          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
		        );
		      } else {
		        return _react2.default.createElement(DefaultChangePasswordForm, this.props);
		      }
		    }
		  }]);

		  return ChangePasswordForm;
		}(_react2.default.Component);

		exports.default = ChangePasswordForm;

	/***/ },
	/* 111 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _LoginLink = __webpack_require__(101);

		var _LoginLink2 = _interopRequireDefault(_LoginLink);

		var _UserActions = __webpack_require__(21);

		var _UserActions2 = _interopRequireDefault(_UserActions);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var VerifyEmailView = function (_React$Component) {
		  _inherits(VerifyEmailView, _React$Component);

		  function VerifyEmailView() {
		    var _Object$getPrototypeO;

		    var _temp, _this, _ret;

		    _classCallCheck(this, VerifyEmailView);

		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(VerifyEmailView)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
		      status: 'VERIFYING'
		    }, _temp), _possibleConstructorReturn(_this, _ret);
		  }

		  _createClass(VerifyEmailView, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      var _this2 = this;

		      var spToken = this.props.spToken;

		      _UserActions2.default.verifyEmail(spToken, function (err) {
		        if (err) {
		          _this2.setState({
		            status: 'ERROR'
		          });
		        } else {
		          _this2.setState({
		            status: 'VERIFIED'
		          });
		        }
		      });
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var selectedProps = _utils2.default.excludeProps(['className', 'spToken'], this.props);

		      return _react2.default.createElement(
		        'div',
		        _extends({ className: "row " + this.props.className }, selectedProps),
		        _react2.default.createElement(
		          'div',
		          { className: 'col-sm-offset-4 col-xs-12 col-sm-4' },
		          {
		            VERIFYING: _react2.default.createElement(
		              'p',
		              { className: 'alert alert-warning' },
		              'We are verifying your account.'
		            ),
		            VERIFIED: _react2.default.createElement(
		              'p',
		              { className: 'alert alert-success' },
		              'Your account has has been verified! ',
		              _react2.default.createElement(
		                _LoginLink2.default,
		                null,
		                'Login Now.'
		              )
		            ),
		            ERROR: _react2.default.createElement(
		              'div',
		              { className: 'alert alert-danger' },
		              'This email verification link is not valid.'
		            )
		          }[this.state.status]
		        )
		      );
		    }
		  }]);

		  return VerifyEmailView;
		}(_react2.default.Component);

		exports.default = VerifyEmailView;

	/***/ },
	/* 112 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _UserComponent2 = __webpack_require__(113);

		var _UserComponent3 = _interopRequireDefault(_UserComponent2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var UserField = function (_UserComponent) {
		  _inherits(UserField, _UserComponent);

		  function UserField() {
		    _classCallCheck(this, UserField);

		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserField).apply(this, arguments));

		    _utils2.default.logWarning('The UserField component has been deprecated. Please use the user context instead. See: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#contexts');
		    return _this;
		  }

		  _createClass(UserField, [{
		    key: '_resolveFieldValue',
		    value: function _resolveFieldValue(name) {
		      var value = this.state.user;
		      var keys = name.split('.');

		      while (keys.length) {
		        var key = keys.shift();

		        if (!(key in value)) {
		          throw new Error('Field does not exist');
		        }

		        value = value[key];
		      }

		      return value;
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var fieldName = this.props.fieldName;
		      var fieldValue = null;

		      try {
		        fieldValue = this._resolveFieldValue(fieldName);
		      } catch (e) {
		        if ('default' in this.props) {
		          fieldValue = this.props['default'];
		        }
		      }

		      return _react2.default.createElement(
		        'span',
		        { className: this.props.className },
		        fieldValue
		      );
		    }
		  }]);

		  return UserField;
		}(_UserComponent3.default);

		exports.default = UserField;

	/***/ },
	/* 113 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _react = __webpack_require__(12);

		var _react2 = _interopRequireDefault(_react);

		var _utils = __webpack_require__(5);

		var _utils2 = _interopRequireDefault(_utils);

		var _context = __webpack_require__(22);

		var _context2 = _interopRequireDefault(_context);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var UserComponent = function (_React$Component) {
		  _inherits(UserComponent, _React$Component);

		  function UserComponent() {
		    _classCallCheck(this, UserComponent);

		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserComponent).apply(this, arguments));

		    _this.onChangeListener = null;
		    _this.state = {
		      user: {}
		    };

		    _utils2.default.logWarning('The UserComponent class has been deprecated. Please use the user context instead. See: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#contexts');
		    return _this;
		  }

		  _createClass(UserComponent, [{
		    key: 'onChange',
		    value: function onChange() {
		      var _this2 = this;

		      _context2.default.userStore.resolveSession(function (err, user) {
		        if (_this2.onChangeListener !== null) {
		          _this2.setState({ user: user });
		        }
		      });
		    }
		  }, {
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      this.onChangeListener = this.onChange.bind(this);
		      _context2.default.userStore.addChangeListener(this.onChangeListener);
		      this.onChange();
		    }
		  }, {
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      _context2.default.userStore.removeChangeListener(this.onChangeListener);
		      this.onChangeListener = null;
		    }
		  }]);

		  return UserComponent;
		}(_react2.default.Component);

		exports.default = UserComponent;

	/***/ }
	/******/ ]);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var _assign = __webpack_require__(5);

	var ReactChildren = __webpack_require__(6);
	var ReactComponent = __webpack_require__(18);
	var ReactPureComponent = __webpack_require__(21);
	var ReactClass = __webpack_require__(22);
	var ReactDOMFactories = __webpack_require__(27);
	var ReactElement = __webpack_require__(10);
	var ReactPropTypes = __webpack_require__(32);
	var ReactVersion = __webpack_require__(33);

	var onlyChild = __webpack_require__(34);
	var warning = __webpack_require__(12);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(28);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(7);
	var ReactElement = __webpack_require__(10);

	var emptyFunction = __webpack_require__(13);
	var traverseAllChildren = __webpack_require__(15);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(8);

	var invariant = __webpack_require__(9);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var _assign = __webpack_require__(5);

	var ReactCurrentOwner = __webpack_require__(11);

	var warning = __webpack_require__(12);
	var canDefineProperty = __webpack_require__(14);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	    var shadowChildren = Array.isArray(props.children) ? props.children.slice(0) : props.children;

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      Object.defineProperty(element, '_shadowChildren', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: shadowChildren
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._shadowChildren = shadowChildren;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	ReactElement.REACT_ELEMENT_TYPE = REACT_ELEMENT_TYPE;

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(13);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(8);

	var ReactCurrentOwner = __webpack_require__(11);
	var ReactElement = __webpack_require__(10);

	var getIteratorFn = __webpack_require__(16);
	var invariant = __webpack_require__(9);
	var KeyEscapeUtils = __webpack_require__(17);
	var warning = __webpack_require__(12);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(8);

	var ReactNoopUpdateQueue = __webpack_require__(19);

	var canDefineProperty = __webpack_require__(14);
	var emptyObject = __webpack_require__(20);
	var invariant = __webpack_require__(9);
	var warning = __webpack_require__(12);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(12);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPureComponent
	 */

	'use strict';

	var _assign = __webpack_require__(5);

	var ReactComponent = __webpack_require__(18);
	var ReactNoopUpdateQueue = __webpack_require__(19);

	var emptyObject = __webpack_require__(20);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(8),
	    _assign = __webpack_require__(5);

	var ReactComponent = __webpack_require__(18);
	var ReactElement = __webpack_require__(10);
	var ReactPropTypeLocations = __webpack_require__(23);
	var ReactPropTypeLocationNames = __webpack_require__(25);
	var ReactNoopUpdateQueue = __webpack_require__(19);

	var emptyObject = __webpack_require__(20);
	var invariant = __webpack_require__(9);
	var keyMirror = __webpack_require__(24);
	var keyOf = __webpack_require__(26);
	var warning = __webpack_require__(12);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(24);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(9);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */

	'use strict';

	var ReactElement = __webpack_require__(10);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(28);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(11);
	var ReactComponentTreeHook = __webpack_require__(29);
	var ReactElement = __webpack_require__(10);
	var ReactPropTypeLocations = __webpack_require__(23);

	var checkReactTypeSpec = __webpack_require__(30);

	var canDefineProperty = __webpack_require__(14);
	var getIteratorFn = __webpack_require__(16);
	var warning = __webpack_require__(12);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, ReactPropTypeLocations.prop, name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeHook
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(8);

	var ReactCurrentOwner = __webpack_require__(11);

	var invariant = __webpack_require__(9);
	var warning = __webpack_require__(12);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var itemMap;
	var rootIDSet;

	var itemByKey;
	var rootByKey;

	if (canUseCollections) {
	  itemMap = new Map();
	  rootIDSet = new Set();
	} else {
	  itemByKey = {};
	  rootByKey = {};
	}

	var unmountedIDs = [];

	// Use non-numeric keys to prevent V8 performance issues:
	// https://github.com/facebook/react/pull/7232
	function getKeyFromID(id) {
	  return '.' + id;
	}
	function getIDFromKey(key) {
	  return parseInt(key.substr(1), 10);
	}

	function get(id) {
	  if (canUseCollections) {
	    return itemMap.get(id);
	  } else {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  }
	}

	function remove(id) {
	  if (canUseCollections) {
	    itemMap['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  }
	}

	function create(id, element, parentID) {
	  var item = {
	    element: element,
	    parentID: parentID,
	    text: null,
	    childIDs: [],
	    isMounted: false,
	    updateCount: 0
	  };

	  if (canUseCollections) {
	    itemMap.set(id, item);
	  } else {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  }
	}

	function addRoot(id) {
	  if (canUseCollections) {
	    rootIDSet.add(id);
	  } else {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  }
	}

	function removeRoot(id) {
	  if (canUseCollections) {
	    rootIDSet['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  }
	}

	function getRegisteredIDs() {
	  if (canUseCollections) {
	    return Array.from(itemMap.keys());
	  } else {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  }
	}

	function getRootIDs() {
	  if (canUseCollections) {
	    return Array.from(rootIDSet.keys());
	  } else {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  }
	}

	function purgeDeep(id) {
	  var item = get(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    remove(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = get(id);
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = get(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent ID is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    create(id, element, parentID);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = get(id);
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = get(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = get(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var type = topElement.type;
	      var name = typeof type === 'function' ? type.displayName || type.name : type;
	      var owner = topElement._owner;
	      info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = get(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = get(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = get(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = get(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = get(id);
	    return item ? item.updateCount : 0;
	  },


	  getRegisteredIDs: getRegisteredIDs,

	  getRootIDs: getRootIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule checkReactTypeSpec
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(8);

	var ReactPropTypeLocationNames = __webpack_require__(25);
	var ReactPropTypesSecret = __webpack_require__(31);

	var invariant = __webpack_require__(9);
	var warning = __webpack_require__(12);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(29);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(29);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypesSecret
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var ReactElement = __webpack_require__(10);
	var ReactPropTypeLocationNames = __webpack_require__(25);
	var ReactPropTypesSecret = __webpack_require__(31);

	var emptyFunction = __webpack_require__(13);
	var getIteratorFn = __webpack_require__(16);
	var warning = __webpack_require__(12);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if (process.env.NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in the next major version. You may be ' + 'seeing this warning due to a third-party PropTypes library. ' + 'See https://fb.me/react-warning-dont-call-proptypes for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new PropTypeError('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '15.3.2';

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(8);

	var ReactElement = __webpack_require__(10);

	var invariant = __webpack_require__(9);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }
/******/ ]);