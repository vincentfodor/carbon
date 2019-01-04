"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../../demo/utils/definition"));

var _definition__ = _interopRequireDefault(require("./../with-drag/__definition__"));

var _definition__2 = _interopRequireDefault(require("./../with-drop/__definition__"));

var _definition__3 = _interopRequireDefault(require("./../custom-drag-layer/__definition__"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// definition.js
var definition = new _definition.default('draggable-context', _.default, {
  associatedDefinitions: [_definition__2.default, _definition__.default, _definition__3.default],
  hiddenProps: ['children', 'customDragLayer', 'onDrag'],
  props: ['customDragLayer', 'onDrag', 'autoScroll'],
  propTypes: {
    customDragLayer: 'Object',
    onDrag: 'Function',
    autoScroll: 'Boolean'
  },
  requiredProps: ['onDrag'],
  dataVariable: 'dndData',
  propValues: {
    onDrag: 'updateDndData',
    autoScroll: 'true',
    children: "<div>\n    <Table tbody={false}>\n      <thead>\n        <TableRow as=\"header\">\n          <TableHeader />\n          <TableHeader>Country</TableHeader>\n        </TableRow>\n      </thead>\n      <tbody>\n        { buildRows() }\n      </tbody>\n    </Table>\n  </div>"
  },
  js: "function buildRows() {\n  let rows = [];\n\n  dndData.forEach((row, index) => {\n    rows.push(\n      <TableRow key={ row.get('id') } uniqueID={ row.get('id') } index={ index }>\n        <TableCell>{ row.get('name') }</TableCell>\n      </TableRow>\n    );\n  });\n\n  return rows;\n}",
  propDescriptions: {
    customDragLayer: 'Optionally provide the CustomDragLayer for the drag & drop ghost layer',
    onDrag: 'Callback function for when a draggable item is moved',
    autoScroll: 'Optionally provide the auto scroll functionality when dragging'
  },
  relatedComponentsNotes: "\nAlthough the `Table` component has drag and drop enabled already, any combination of components can be made draggable through the use of the `WithDrag` and `WithDrop` components:\n\n```\n<DraggableContext onDrag={ onItemMoved }>\n  <ol>\n    {\n      items.map((item, index) => {\n        return (\n          <WithDrop index={ index }>\n            <li>\n              <WithDrag><span>{ item.content }</span></WithDrag>\n            </li>\n          </WithDrop>\n        );\n      })\n    }\n  </ol>\n</DraggableContext>\n```\n"
});
var _default = definition;
exports.default = _default;