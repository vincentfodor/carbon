'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dispatcher = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.connect = connect;

var _flux = require('flux');

var _flux2 = _interopRequireDefault(_flux);

var _lodash = require('lodash');

var _reactRedux = require('react-redux');

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _reducerRegistry = require('./reducer-registry');

var _reducerRegistry2 = _interopRequireDefault(_reducerRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dispatcher = exports.Dispatcher = {
  register: function register() {},

  dispatch: function dispatch(action) {
    action.type = action.actionType;
    delete action.actionType;
    _reducerRegistry2.default.store.dispatch(action);
  }
};

var buildPropsFromStores = function buildPropsFromStores(stores, data) {
  var props = {};

  if (stores.constructor === Array) {
    stores.forEach(function (store) {
      props[store.name] = data[store.name];
    });
  } else {
    props[stores.name] = data[stores.name];
  }

  return props;
};

function connect(ComposedView, stores) {
  var View = function (_ComposedView) {
    _inherits(View, _ComposedView);

    function View() {
      var _ref;

      _classCallCheck(this, View);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args)));

      var props = buildPropsFromStores(stores, _this.props);
      _this.state = (0, _lodash.assign)({}, _this.state, props);
      return _this;
    }

    _createClass(View, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (_get(View.prototype.__proto__ || Object.getPrototypeOf(View.prototype), 'componentWillReceiveProps', this)) {
          _get(View.prototype.__proto__ || Object.getPrototypeOf(View.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
        }
        var props = buildPropsFromStores(stores, nextProps);
        this.setState(props);
      }
    }]);

    return View;
  }(ComposedView);

  var mapStateToProps = function mapStateToProps(state) {
    return buildPropsFromStores(stores, state);
  };

  var connectedView = (0, _reactRedux.connect)(mapStateToProps)(View);
  connectedView.displayName = ComposedView.displayName || ComposedView.name;
  connectedView._requiresReduxStore = true;
  connectedView._legacyConnect = true;
  return connectedView;
}