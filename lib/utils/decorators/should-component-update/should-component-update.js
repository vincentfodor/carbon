"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _shouldComponentUpdate = _interopRequireDefault(require("../../helpers/should-component-update"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * ShouldComponentUpdate Decorator.
 *
 * This decorator provides useful should component update function.
 *
 * == How to use ShouldComponentUpdate decorator in a component:
 *
 * In your file:
 *
 *   import ShouldComponentUpdate from 'carbon-react/lib/utils/decorators/should-component-update;
 *
 * To use the decorator, wrap your component with it:
 *
 *   const MyComponent = ShouldComponentUpdate(
 *   class MyComponent extends React.Component {
 *     ...
 *   })
 *
 * Provided ShouldComponentUpdate Methods
 *  * `shouldComponentUpdate` - uses the shouldComponentUpdate Helper to compare props and state
 *
 *
 * @method ShouldComponentUpdate
 * @param {Class} ComposedComponent class to decorate
 * @return {Object} Decorated Component
 */
var ShouldComponentUpdate = function ShouldComponentUpdate(ComposedComponent) {
  var Component =
  /*#__PURE__*/
  function (_ComposedComponent) {
    _inherits(Component, _ComposedComponent);

    function Component() {
      _classCallCheck(this, Component);

      return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
    }

    _createClass(Component, [{
      key: "shouldComponentUpdate",

      /**
       * Lifecycle hook to calculate if the component should re-render
       *
       * @method shouldComponentUpdate
       * @param nextProps - The next props for component
       * @param nextState - The next state for component
       * @return {Boolean}
       */
      value: function shouldComponentUpdate(nextProps, nextState) {
        return (0, _shouldComponentUpdate.default)(this, nextProps, nextState);
      }
    }]);

    return Component;
  }(ComposedComponent);

  Component.displayName = ComposedComponent.displayName || ComposedComponent.name;
  return Component;
};

var _default = ShouldComponentUpdate;
exports.default = _default;