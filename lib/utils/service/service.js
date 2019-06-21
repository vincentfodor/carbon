"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Global configuration for all service classes.
 */
var config = {
  csrfToken: null,
  // defines the CSRF token if required by your web application
  onSuccess: null,
  // defines a callback to trigger on every successful response
  onError: null // defines a callback to trigger on every erroneous response

};

var Service =
/*#__PURE__*/
function () {
  _createClass(Service, null, [{
    key: "configure",

    /**
     * Allows the global config data to be set for your application.
     * eg. Service.configure({ csrfToken: global.CSRF_TOKEN });
     *
     * @method configure
     * @param {Object} opts - see config object above
     * @return {Void}
     */
    value: function configure(opts) {
      (0, _lodash.assign)(config, config, opts);
    }
    /**
     * @constructor
     */

  }]);

  function Service() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Service);

    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
    this.setURL = this.setURL.bind(this);
    this.setTransformResponse = this.setTransformResponse.bind(this);
    this.setTransformRequest = this.setTransformRequest.bind(this);
    this.enableGlobalCallbacks = this.enableGlobalCallbacks.bind(this);
    this.disableGlobalCallbacks = this.disableGlobalCallbacks.bind(this);
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.responseTransform = this.responseTransform.bind(this);
    this.shouldTriggerCallback = this.shouldTriggerCallback.bind(this); // sets up the axios client with default options

    this.client = _axios.default.create({
      headers: {
        'X-CSRF-Token': config.csrfToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      transformResponse: [this.responseTransform]
    }); // applies the default axios interceptors used for manipulating the data

    this.client.interceptors.response.use(this.handleSuccess, this.handleError); // turns any configured global callbacks on by default

    if (opts.globalCallbacks !== false) {
      this.enableGlobalCallbacks();
    }
  }
  /**
   * Is called after a successful response from the server, and determines how
   * to handle the response.
   *
   * @method handleSuccess
   * @param {Object} response - the reponse from the server
   * @return {Object} the response data
   */


  _createClass(Service, [{
    key: "handleSuccess",
    value: function handleSuccess(response) {
      if (response.data && response.data.status === 'error') {
        if (this.shouldTriggerCallback(config.onError)) {
          config.onError(response.data);
        }

        return Promise.reject(response);
      }

      if (this.shouldTriggerCallback(config.onSuccess)) {
        config.onSuccess(response.data);
      }

      return response.data;
    }
    /**
     * Is called after an erroneous response from the server.
     *
     * @method handleError
     * @param {Object} error - the response from the server
     * @return {Object}
     */

  }, {
    key: "handleError",
    value: function handleError(error) {
      if (this.shouldTriggerCallback(config.onError)) {
        config.onError(error.response.data);
      }

      return Promise.reject(error.response);
    }
    /**
     * Sets the base URL for axios to use for all requests using this class.
     *
     * @method setURL
     * @param {String} url
     * @return {Void}
     */

  }, {
    key: "setURL",
    value: function setURL(url) {
      this.client.defaults.baseURL = url;
    }
    /**
     * Sets a function to run before a request is made, allowing manipulation of the data.
     *
     * @method setTransformRequest
     * @param {Function} func
     * @return {Void}
     */

  }, {
    key: "setTransformRequest",
    value: function setTransformRequest(func) {
      this.client.interceptors.request.use(function (request) {
        request.data = func(request.data);
        return request;
      });
    }
    /**
     * Sets a function to run before a response is received, allowing manipulation of the data.
     *
     * @method setTransformResponse
     * @param {Function} func
     * @return {Void}
     */

  }, {
    key: "setTransformResponse",
    value: function setTransformResponse(func) {
      this.client.interceptors.response.use(func);
    }
    /**
     * Enables global callbacks (eg onSuccess and onError).
     *
     * @method enableGlobalCallbacks
     * @return {Void}
     */

  }, {
    key: "enableGlobalCallbacks",
    value: function enableGlobalCallbacks() {
      this.globalCallbacks = true;
    }
    /**
     * Disables global callbacks (eg onSuccess and onError).
     *
     * @method disableGlobalCallbacks
     * @return {Void}
     */

  }, {
    key: "disableGlobalCallbacks",
    value: function disableGlobalCallbacks() {
      this.globalCallbacks = false;
    }
    /**
     * Performs a GET request to the server.
     *
     * @method get
     * @param {Number} id - the ID of the resource.
     * @param {Object} options - an object with options for query params and success/error callbacks
     * @return {Void}
     */

  }, {
    key: "get",
    value: function get(id, options) {
      var onSuccess = options.onSuccess,
          onError = options.onError,
          params = _objectWithoutProperties(options, ["onSuccess", "onError"]);

      var request = this.client.get(String(id), params);
      request.then(this.handleResponse.bind(this, onSuccess), this.handleResponse.bind(this, onError));
    }
    /**
     * Performs a POST request to the server.
     *
     * @method post
     * @param {Object} data - the data to post to the server.
     * @param {Object} options - an object with options for query params and success/error callbacks
     * @return {Void}
     */

  }, {
    key: "post",
    value: function post(data, options) {
      var onSuccess = options.onSuccess,
          onError = options.onError,
          params = _objectWithoutProperties(options, ["onSuccess", "onError"]);

      var request = this.client.post('', data, params);
      request.then(this.handleResponse.bind(this, onSuccess), this.handleResponse.bind(this, onError));
    }
    /**
     * Performs a PUT request to the server.
     *
     * @method put
     * @param {Number} id - the ID of the resource.
     * @param {Object} data - the data to post to the server.
     * @param {Object} options - an object with options for query params and success/error callbacks
     * @return {Void}
     */

  }, {
    key: "put",
    value: function put(id, data, options) {
      var onSuccess = options.onSuccess,
          onError = options.onError,
          params = _objectWithoutProperties(options, ["onSuccess", "onError"]);

      var request = this.client.put(String(id), data, params);
      request.then(this.handleResponse.bind(this, onSuccess), this.handleResponse.bind(this, onError));
    }
    /**
     * Performs a DEL request to the server.
     *
     * @method delete
     * @param {Number} id - the ID of the resource.
     * @param {Object} options - an object with options for query params and success/error callbacks
     * @return {Void}
     */

  }, {
    key: "delete",
    value: function _delete(id, options) {
      var onSuccess = options.onSuccess,
          onError = options.onError,
          params = _objectWithoutProperties(options, ["onSuccess", "onError"]);

      var request = this.client.delete(String(id), params);
      request.then(this.handleResponse.bind(this, onSuccess), this.handleResponse.bind(this, onError));
    }
    /**
     * Handles all responses from the axios promise.
     *
     * @method handleResponse
     * @param {Function} callback
     * @param {Object} response
     * @return {Void}
     */

  }, {
    key: "handleResponse",
    value: function handleResponse(callback, response) {
      if (callback) {
        callback(response);
      }
    }
    /**
     * A default response transformer, to convert the data into something useful for devs.
     *
     * @method responseTransform
     * @param {Object}
     * @return {Void}
     */

  }, {
    key: "responseTransform",
    value: function responseTransform(response) {
      if (!response) {
        return undefined;
      }

      return JSON.parse(response);
    }
    /**
     * Determines if a callback should be triggered.
     *
     * @method shouldTriggerCallback
     * @param {Function}
     * @return {Boolean}
     */

  }, {
    key: "shouldTriggerCallback",
    value: function shouldTriggerCallback(method) {
      return this.globalCallbacks && method;
    }
  }]);

  return Service;
}();

var _default = Service;
exports.default = _default;