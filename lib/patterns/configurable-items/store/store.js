"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flux = require("carbon-state-management/lib/flux");

var _store = _interopRequireDefault(require("carbon-state-management/lib/flux/store"));

var _immutable = _interopRequireDefault(require("../../../utils/helpers/immutable"));

var _constants = _interopRequireDefault(require("../constants"));

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

var data = _immutable.default.parseJSON({
  open: false,
  items_data: []
});

var ConfigurableItemsStore =
/*#__PURE__*/
function (_Store) {
  _inherits(ConfigurableItemsStore, _Store);

  function ConfigurableItemsStore() {
    _classCallCheck(this, ConfigurableItemsStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfigurableItemsStore).apply(this, arguments));
  }

  _createClass(ConfigurableItemsStore, [{
    key: _constants.default.TOGGLE_CONFIGURABLE_ITEMS_DIALOG,
    value: function value() {
      this.data = this.data.set('open', !this.data.get('open'));
    }
  }, {
    key: _constants.default.REORDER_CONFIGURABLE_ITEMS,
    value: function value(action) {
      var itemsData = this.data.get('items_data').toArray();
      var dragIndex = action.dragIndex,
          hoverIndex = action.hoverIndex;
      var dragItem = itemsData.splice(dragIndex, 1)[0];
      itemsData.splice(hoverIndex, 0, dragItem);
      this.data = this.data.set('items_data', _immutable.default.parseJSON(itemsData));
    }
  }, {
    key: _constants.default.UPDATE_CONFIGURABLE_ITEM,
    value: function value(action) {
      var itemsData = this.data.get('items_data');
      var updatedData = itemsData.update(action.rowIndex, function (item) {
        return item.set('enabled', !item.get('enabled'));
      });
      this.data = this.data.set('items_data', updatedData);
    }
  }, {
    key: _constants.default.UPDATE_CONFIGURABLE_ITEMS_DATA,
    value: function value(action) {
      this.data = this.data.set('items_data', action.data);
    }
  }]);

  return ConfigurableItemsStore;
}(_store.default);

var _default = new ConfigurableItemsStore('configurableItemsStore', data, _flux.Dispatcher);

exports.default = _default;