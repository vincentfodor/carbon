"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _stepSequenceItem = _interopRequireDefault(require("./step-sequence-item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<StepSequenceItem />', function () {
  var stepSequenceItem;
  beforeAll(function () {
    stepSequenceItem = (0, _enzyme.shallow)(_react.default.createElement(_stepSequenceItem.default, {
      "aria-label": "Step 1 of 5",
      indicator: "2",
      hiddenCompleteLabel: "Complete text for non visual users",
      hiddenCurrentLabel: "Current text for non visual users"
    }, "bar"));
  });

  var statusTest = function statusTest(status) {
    return function () {
      stepSequenceItem.setProps({
        status: status
      });
      expect(stepSequenceItem).toMatchSnapshot();
    };
  };

  test('completed render', statusTest('complete'));
  test('current render', statusTest('current'));
  test('incomplete render', statusTest('incomplete'));
});