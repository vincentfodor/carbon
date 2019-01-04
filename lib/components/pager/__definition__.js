"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

var _optionsHelper = _interopRequireDefault(require("utils/helpers/options-helper"));

var _component = _interopRequireDefault(require("./../../../demo/actions/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('pager', _.default, {
  description: "Steps through a series of pages within a table.",
  designerNotes: "\n* Useful to handle larger tables of data - clicking the forward or back arrows will step the user sequentially through the data loaded into the table.\n* The 'Show Page Size Selection' configuration shows 10, 25, or 50 records on each page.\n  ",
  relatedComponentsNotes: "\n* Table of relational data? [Try Table](/components/table).\n* Table with Ajax? [Try Table](/components/table-ajax).\n ",
  type: 'form',
  hiddenProps: ['currentPage', 'pageSizeSelectionOptions'],
  propOptions: {
    pageSize: _optionsHelper.default.pageSizes
  },
  propTypes: {
    currentPage: "String",
    totalRecords: "String",
    onPagination: "Function",
    pageSize: "String",
    showPageSizeSelection: "Boolean",
    pageSizeSelectionOptions: "Object"
  },
  propValues: {
    currentPage: 1,
    totalRecords: 100,
    onPagination: _component.default.updatePagerCurrentPage
  },
  defaultProps: {
    pageSizeSelectionOptions: _optionsHelper.default.pageSizes.join(", ")
  },
  propDescriptions: {
    currentPage: "The currently displayed page.",
    totalRecords: "The total number of records to paginate.",
    onPagination: "Callback triggered when the user changes page, use this to update the currentPage prop.",
    pageSize: "Number of records per page.",
    showPageSizeSelection: "Show/hide the options so a user can choose how many records to display per page.",
    pageSizeSelectionOptions: "Define custom options to display in page size selection. This has to be an immutable object."
  }
});
var _default = definition;
exports.default = _default;