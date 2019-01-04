"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("./");

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _component = _interopRequireDefault(require("./../../../demo/actions/component"));

var _definition__ = _interopRequireDefault(require("./table-row/__definition__"));

var _definition__2 = _interopRequireDefault(require("./table-cell/__definition__"));

var _definition__3 = _interopRequireDefault(require("./table-header/__definition__"));

var _definition__4 = _interopRequireDefault(require("./table-subheader/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: see if we can remove the need for this - this populates the data by
// fetching it from the mock service
setTimeout(function () {
  // trigger action to init table with data
  _component.default.updateTable(); // we currently delay this update incase the xhr mock is disabled (ie on a doc page)

}, 1000);
var definition = new _definition.default('table', _.Table, {
  description: 'A table of relational data to view or interact with.',
  designerNotes: "\n* Shows relational data to the user.\n* The content of rows and columns can be plain or styled text, Icons, or even inputs. Achieve this by nesting components inside a Table component.\n* Don\u2019t add too many columns for the user\u2019s available viewport width. Aiming for a screen width of 1366 pixels is a good target, but also consider how your table may look for tablet or mobile devices. Avoid the need for horizontal scrolling, either on the page as a whole, or within a Table component.\n* To save space, you could show multiple lines of data within a cell (e.g. the constituents of an address).\n* If there is likely to be a large number of rows, you can specify how many rows to show, and whether to add a pagination control to the bottom of the table. Consider the data load on your application and infrastructure to decide this. Some applications apply this configuration as an application-wide setting.\n* The Selectable configuration places a checkbox at the start of each row, and the ability for a user to select one or more rows. This is useful to allow the user to perform single or batch actions.\n* The Highlightable configuration allows the user to click an option, and for the option to be marked visually. This could be useful if the user can select an option which then loads in a Sidebar, for example.\n",
  associatedDefinitions: [_definition__.default, _definition__2.default, _definition__3.default, _definition__4.default],
  dataVariable: 'tableData',
  propValues: {
    caption: 'Country and Country Codes',
    highlightable: false,
    onChange: _component.default.updateTable,
    paginate: false,
    selectable: false,
    shrink: false,
    showPageSizeSelection: false
  }
});
definition.isATable();
var _default = definition;
exports.default = _default;