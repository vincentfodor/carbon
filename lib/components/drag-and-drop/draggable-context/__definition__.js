'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _component = require('./../../../../demo/actions/component');

var _component2 = _interopRequireDefault(_component);

var _definition = require('./../../../../demo/utils/definition');

var _definition2 = _interopRequireDefault(_definition);

var _definition__ = require('./../with-drag/__definition__');

var _definition__2 = _interopRequireDefault(_definition__);

var _definition__3 = require('./../with-drop/__definition__');

var _definition__4 = _interopRequireDefault(_definition__3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition2.default('draggable-context', _2.default, {
  associatedDefinitions: [_definition__4.default, _definition__2.default],

  hiddenProps: ['children', 'onDrag'],

  topLevelComponent: 'Table',

  props: ['onDrag'],

  propTypes: {
    onDrag: 'Function'
  },

  requiredProps: ['onDrag'],

  dataVariable: 'dndData',

  propValues: {
    tbody: false,
    children: '<thead>\n    <TableRow as="header">\n      <TableHeader />\n      <TableHeader>Country</TableHeader>\n    </TableRow>\n  </thead>\n  <DraggableContext onDrag={ updateDndData }>\n    <tbody>\n      { buildRows() }\n    </tbody>\n  </DraggableContext>'
  },

  js: 'function buildRows() {\n  let rows = [];\n\n  dndData.forEach((row, index) => {\n    rows.push(\n      <TableRow key={ row.get(\'id\') } uniqueID={ row.get(\'id\') } index={ index }>\n        <TableCell>{ row.get(\'name\') }</TableCell>\n      </TableRow>\n    );\n  });\n\n  return rows;\n}',

  propDescriptions: {
    onDrag: 'Callback function for when a draggable item is moved'
  },

  relatedComponentsNotes: '\nAlthough the `Table` component has drag and drop enabled already, any combination of components can be made draggable through the use of the `WithDrag` and `WithDrop` components:\n\n```\n<DraggableContext onDrag={ onItemMoved }>\n  <ol>\n    {\n      items.map((item, index) => {\n        return (\n          <WithDrop index={ index }>\n            <li>\n              <WithDrag><span>{ item.content }</span></WithDrag>\n            </li>\n          </WithDrop>\n        );\n      })\n    }\n  </ol>\n</DraggableContext>\n```\n'

}); // definition.js
exports.default = definition;