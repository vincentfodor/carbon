"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _switch = _interopRequireDefault(require("./switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Switch', function () {
  var wrapper;
  it('renders a Switch component with reverse className', function () {
    wrapper = (0, _enzyme.shallow)(_react.default.createElement(_switch.default, {
      label: "My label"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('renders a Switch component with loading dots, loading className and without the reverse className', function () {
    wrapper = (0, _enzyme.shallow)(_react.default.createElement(_switch.default, {
      label: "My label",
      loading: true,
      reverse: false
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('removes loading from the props passed to Checkbox', function () {
    wrapper = (0, _enzyme.shallow)(_react.default.createElement(_switch.default, {
      label: "My label",
      loading: true
    }));
    expect(wrapper.props().loading).toBe(undefined);
  });
});