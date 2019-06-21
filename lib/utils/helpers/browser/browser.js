"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.split");

require("core-js/modules/es.string.trim");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Browser Helper

*
* Provides helper methods for working with Browser behavior.
*
*/
var Browser = {
  isDomAvailable: function isDomAvailable() {
    var _window = Browser.getWindow();

    var _document = Browser.getDocument();

    return !!(typeof _window !== 'undefined' && _document && _document.createElement);
  },

  /**
   * Get the current window
   *
   * @return window
   */
  getWindow: function getWindow() {
    return global.window;
  },

  /**
   * Get the current document
   *
   * @return window
   */
  getDocument: function getDocument() {
    return document;
  },

  /**
   * Get the current activeElement
   *
   * @return HTMLElement
   */
  getActiveElement: function getActiveElement() {
    var doc = Browser.getDocument();
    return doc.activeElement;
  },

  /**
   * Redirect to URL
   *
   * @method redirectTo
   * @param url => URL string format
   */
  redirectTo: function redirectTo(url) {
    Browser.getWindow().location = url;
  },

  /**
   * Redirects to URL after the given number of seconds have elapsed
   *
   * @method redirectAfter
   * @param url => URL string format
   * @param seconds => the number of seconds to wait before redirecting
   */
  redirectAfter: function redirectAfter(url, seconds) {
    return setTimeout(function () {
      return Browser.redirectTo(url);
    }, seconds * 1000);
  },

  /**
   * Reload the current page
   *
   * @method reload
   */
  reload: function reload() {
    Browser.getWindow().location.reload();
  },

  /**
   * Focuses and sets cursor of input field
   *
   * @method editFocus
   */
  editFocus: function editFocus(ref) {
    var node = _reactDom.default.findDOMNode(ref._input); // eslint-disable-line react/no-find-dom-node


    node.focus();
    node.select();
  },

  /**
   * Focuses and sets cursor of react node
   *
   * @method setFocus
   */
  setFocus: function setFocus(reactNode) {
    var node = _reactDom.default.findDOMNode(reactNode); // eslint-disable-line react/no-find-dom-node


    node.focus();
  },

  /**
   *  Focuses and sets cursor of input field but does not select text
   *
   * @method setInputFocus
   */
  setInputFocus: function setInputFocus(inputComponent) {
    Browser.setFocus(inputComponent._input);
  },

  /**
   * Sets a cookie where name=value
   *
   * @param {Object} options includes expires or max-age
   * @method setCookie
   */
  setCookie: function setCookie(name, value) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var cookie = "".concat(name, "=").concat(value);

    if (options.expires) {
      cookie += "; expires=".concat(options.expires);
    }

    if (options['max-age']) {
      cookie += "; max-age=".concat(options['max-age']);
    }

    Browser.getDocument().cookie = cookie;
  },

  /**
   * Returns a cookies value by passed name
   *
   * @param {String} name cookie name key
   * @method getCookieValueByName
   */
  getCookie: function getCookie(name) {
    var cookies = Browser.getDocument().cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim().split('=');

      if (cookie[0] === name) {
        return cookie[1];
      }
    }

    return null;
  },

  /**
   * Submits POST in new window
   *
   * @method  postToNewWindow
   * @param   {String}  url     URL to POST to
   * @param   {Object}  data    Data to POST
   * @param   {Object}  target  Optional target window name
   * @return  {Void}
   */
  postToNewWindow: function postToNewWindow(url, data) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_blank';
    var doc = Browser.getDocument(),
        containerId = 'carbonPostFormContainer';
    var container = doc.getElementById(containerId);

    if (!container) {
      container = doc.createElement('div');
      container.setAttribute('id', containerId);
      doc.body.appendChild(container);
    }

    _reactDom.default.render(_react.default.createElement("form", {
      action: url,
      method: "post",
      target: target
    }, (0, _lodash.keys)(data).map(function (key) {
      return _react.default.createElement("input", {
        type: "hidden",
        key: key,
        name: key,
        value: data[key]
      });
    })), container, function () {
      Browser.submitForm(this);
    });

    _reactDom.default.unmountComponentAtNode(container);
  },

  /**
   * Submits a passed Form
   *
   * @method submitForm
   * @param {HTML Form} form to submit
   */
  submitForm: function submitForm(form) {
    form.submit();
  }
};
var _default = Browser;
exports.default = _default;