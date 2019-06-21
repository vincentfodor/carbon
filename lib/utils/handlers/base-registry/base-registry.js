"use strict";

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Base Registry class, for building handler patterns.
 *
 * == How to create a handler pattern:
 *
 * In your file, create your own registry class which exports from the base
 * registry class. Initialise your registry and export it.
 *
 *   import BaseRegistry from 'carbon-react/lib/utils/handlers/base-registry';
 *
 *   class MyRegistry extends BaseRegistry {};
 *
 *   export default new MyRegistry;
 *
 * @class BaseRegistry
 * @constructor
 */
var BaseRegistry = function BaseRegistry() {
  var _this = this;

  _classCallCheck(this, BaseRegistry);

  _defineProperty(this, "defaultHandler", {
    call: function call(data) {
      return data;
    }
    /**
     * Property to store any registered handlers.
     *
     * @property handlers
     * @type {Object}
     */

  });

  _defineProperty(this, "handlers", {});

  _defineProperty(this, "register", function (key, handler) {
    _this.handlers[key] = handler;
    return handler;
  });

  _defineProperty(this, "unregister", function (key) {
    delete _this.handlers[key];
  });

  _defineProperty(this, "obtain", function () {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    var handlers = [];
    Object.keys(_this.handlers).forEach(function (key) {
      var handler = _this.handlers[key];

      if (handler.check.apply(handler, params)) {
        handlers.push(handler);
      }
    });

    if (!handlers.length) {
      handlers.push(_this.defaultHandler);
    }

    return handlers;
  });
};

var _default = BaseRegistry;
exports.default = _default;