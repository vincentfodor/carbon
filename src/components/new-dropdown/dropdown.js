import React from 'react';
import Input from './../../utils/decorators/input';
import InputLabel from './../../utils/decorators/input-label';
import InputValidation from './../../utils/decorators/input-validation';
import InputIcon from './../../utils/decorators/input-icon';
import classNames from 'classnames';
import Events from './../../utils/helpers/events';
import Option from './option';
import List from './list';
import { validProps } from '../../utils/ether';

const Dropdown = Input(InputIcon(InputLabel(InputValidation(
class Dropdown extends React.Component {

  constructor(...args) {
    super(...args);
    this.unblockBlur();
    this.selectValue = this.selectValue.bind(this);
  }

  state = {
    open: false
  }

  static propTypes = {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    visibleValue: React.PropTypes.string,
  }

  static childContextTypes = {
    dropdown: React.PropTypes.object
  }

  getChildContext = () => {
    return {
      dropdown: {
        selectValue: this.selectValue,
        selected: this.props.value,
        blockBlur: this.blockBlur,
        unblockBlur: this.unblockBlur,
        focus: this.focus
      }
    };
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.blockFocus = true;
      this.focus();
    }
  }

  focus = () => {
    this._input.focus();
  }

  blockBlur = () => {
    this._blockBlur = true;
  }

  unblockBlur = () => {
    this._blockBlur = false;
  }

  selectValue(val, visibleVal) {
    this.unblockBlur();
    this.setState({ open: false });
    this._handleContentChange();
    this.emitOnChangeCallback(val, visibleVal);
  }

  emitOnChangeCallback = (value, visibleValue) => {
    // mock a standard input event return, with target and value
    this._handleOnChange({
      target: {
        value: String(value),
        visibleValue: visibleValue
      }
    });

    if (!this.props.value) {
      this.setState({ value: value });
    }

    if (!this.props.visibleValue) {
      this.setState({ visibleValue: visibleValue });
    }
  }

  handleBlur = () => {
    if (!this._blockBlur) {
      this.setState({ open: false });
    }
  }

  handleFocus = () => {
    if (this.blockFocus) {
      this.blockFocus = false;
    } else {
      this.setState({ open: true });
    }
  }

  handleKeyDown = (ev) => {
    ev.stopPropagation();

    if (!this.state.open) {
      // if up/down/space then open list
      if (Events.isUpKey(ev) || Events.isDownKey(ev) || Events.isSpaceKey(ev)) {
        ev.preventDefault();
        this.setState({ open: true });
      }
      return;
    }

    switch(ev.which) {
      case 13: // return
        ev.preventDefault();
        this.list.selectHighlighted();
        break;
      case 38: // up arrow
        ev.preventDefault();
        this.list.decrementHighlight();
        break;
      case 40: // down arrow
        ev.preventDefault();
        this.list.incrementHighlight();
        break;
    }
  }

  get inputProps() {
    let { children, ...props } = validProps(this);

    delete props.autoFocus;

    props.className = this.inputClasses;
    props.value = this.props.visibleValue || this.state.visibleValue || "";
    props.name = null;
    props.onBlur = this.handleBlur;
    props.onKeyDown = this.handleKeyDown;
    props.readOnly = true;

    if (!this.props.readOnly && !this.props.disabled) {
      props.onFocus = this.handleFocus;
    }
    return props;
  }

  get hiddenInputProps() {
    let props = {
      ref: 'hidden',
      type: 'hidden',
      readOnly: true,
      name: this.props.name,
      // Using this to prevent `null` warnings from React
      value: this.props.value || this.state.value || ""
    };

    return props;
  }

  get mainClasses() {
    return classNames(
      'carbon-dropdown',
      { 'carbon-dropdown--open': this.state.open }
    );
  }

  get inputClasses() {
    return 'carbon-dropdown__input';
  }

  get additionalInputContent() {
    let content = [];

    if (!this.props.suggest) {
      content.push(this.inputIconHTML("dropdown"));
    }

    content.push(
      <List
        ref={ (c) => this.list = c }
        key="listBlock"
        open={ this.state.open }
      >
        { this.props.children }
      </List>
    );

    return content;
  }

  render() {
    return (
      <div className={ this.mainClasses } >

        { this.labelHTML }
        { this.inputHTML }
        <input { ...this.hiddenInputProps } />
        { this.validationHTML }
        { this.fieldHelpHTML }

      </div>
    );
  }
}
))));

export {
  Dropdown,
  Option
};
