"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startRouter = startRouter;
exports.history = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isInitial = true;

var onRouteUpdate = function onRouteUpdate() {
  global.window.scrollTo(0, 0);

  if (isInitial) {
    isInitial = false;
    return;
  }

  if (global.ga) {
    global.ga('set', 'page', global.location.pathname);
    global.ga('send', 'pageview');
  }
};
/**
 * Exposes the history object to allow developers to redirect and control the
 * route state (see https://github.com/ReactJSTraining/history/tree/master/docs)
 *
 * @property history
 * @type {Object}
 */


var history = _reactRouter.browserHistory;
/**
 * Handles boilerplate for starting the React Router with the given routes.
 *
 * You can import this function with the following:
 *
 *   import { startRouter } from 'carbon-react/lib/utils/router';
 *
 * You can then use the function like this:
 *
 *   var routes = <Route />;
 *   startRouter(routes);
 *
 * You can also provide an optional second parameter if you want to manually tell
 * the router where it should render it's components (by default this uses an
 * element with an ID of 'app'):
 *
 *   var routes = <Route />;
 *   startRouter(routes, document.getElementById('foo'));
 *
 * @method startRouter
 * @param {Object} routes The routes to send to React Router.
 * @param {HTMLElement} target (optional) Where in the DOM should React render.
 * @return {void}
 */

exports.history = history;

function startRouter(routes) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.getElementById('app');

  // render the router into the DOM
  if (target) {
    _reactDom.default.render(_react.default.createElement(_reactRouter.Router, {
      onUpdate: onRouteUpdate,
      history: history
    }, routes), target);
  }
}