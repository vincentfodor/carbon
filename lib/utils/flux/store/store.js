'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _ = require('..');

var _reducerRegistry = require('./../reducer-registry');

var _reducerRegistry2 = _interopRequireDefault(_reducerRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A constant used for the change event within this module.
 *
 * @property CHANGE_EVENT
 * @type String
 * @final
 */
var CHANGE_EVENT = 'change';

/**
 * A base class that can be used to extend a store with boilerplate to work with
 * a flux based architecture.
 *
 * It provides the following:
 *
 * * A method to return data from the store.
 * * A method to determine if the store should react to an action from the dispatcher.
 * * Methods to setup or remove change listeners with a specified callback.
 * * Methods to handle interaction with data history (eg. undo, redo and reset).
 *
 * You can import this class with the following:
 *
 *   import Store from 'carbon-react/lib/utils/flux/store';
 *
 * You can then use the imported store to extend your defined store class:
 *
 *   class MyStore extends Store {
 *   }
 *
 *   // get the initial data for your store
 *   let data = ImmutableHelper.parse({});
 *
 *   // You should initialize your store with a name and its data.
 *   //
 *   // optional - By enabling history in the opts, the store will collect
 *   // any data interaction. You should only set this if you intend to
 *   // use the data collected.
 *   // optional - You can pass in a custom dispatcher in the opts.
 *   export default new MyStore("myStore", data, { history: true });
 *
 * Please note, you should initialize your store with a name and initial data.
 * You can also pass a third param of additional options which allows you to
 * enable history or supply a custom dispatcher for your store.
 *
 * @class Store
 * @param {String} name
 * @param {Object} data
 * @param {Object} opts
 * @constructor
 * @extends EventEmitter
 */

var Store = function (_EventEmitter) {
  _inherits(Store, _EventEmitter);

  function Store(name, data) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Store);

    var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this, name, data, opts));

    _this.getState = function () {
      return _this._data;
    };

    _this.reset = function () {
      _reducerRegistry2.default.store.dispatch({
        type: _this.name + '-LEGACY_FLUX_STORE_SET',
        data: _this.originalData
      });
    };

    var suffix = 'Check the initialization of ' + _this.constructor.name + '.';

    // tell the developer if they have not defined the name property.
    if (!name) {
      throw new Error('You need to initialize your store with a name. ' + suffix);
    }

    // tell the developer if they have not defined the data property.
    if (!data) {
      throw new Error('You need to initialize your store with data. ' + suffix);
    }

    _this.name = name;

    /**
     * Set the data for the store - this should be an immutable object.
     *
     * @property data
     * @type {Object}
     */
    _this._data = data;

    _this.originalData = data;

    _this.reducer = function (state, action) {
      if (_this[action.type]) {
        _this._disableDispatch = true;
        _this._data = state;
        _this[action.type](action);
        _this._disableDispatch = false;
      }
      return _this._data;
    };

    _reducerRegistry2.default.register(name, _this.reducer);

    _this[_this.name + '-LEGACY_FLUX_STORE_SET'] = function (action) {
      _this._data = action.data;
    };
    return _this;
  }

  /**
   * Returns the current data from the store.
   *
   * @method getState
   * @return {Object} the current data
   */


  _createClass(Store, [{
    key: 'data',
    get: function get() {
      return this._data;
    },
    set: function set(data) {
      this._data = data;

      if (!this._disableDispatch) {
        _reducerRegistry2.default.store.dispatch({
          type: this.name + '-LEGACY_FLUX_STORE_SET',
          data: data
        });
      }
    }

    /**
     * Reverts the data to the initial data set in the history.
     *
     * @method reset
     * @return {void}
     */

  }]);

  return Store;
}(_events.EventEmitter);

exports.default = Store;