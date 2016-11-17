import React from 'react';
import Input from './../../utils/decorators/input';
import InputLabel from './../../utils/decorators/input-label';
import InputValidation from './../../utils/decorators/input-validation';
import InputIcon from './../../utils/decorators/input-icon';
import classNames from 'classnames';
import Events from './../../utils/helpers/events';
import Option from './option';
import List from './list';
import escapeStringRegexp from 'escape-string-regexp';
import { validProps } from '../../utils/ether';

import I18n from 'i18n-js';
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

  static defaultProps = {
    filter: false
  }

  static propTypes = {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    visibleValue: React.PropTypes.string,
    onCreate: React.PropTypes.func
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

  canFilter = () => {
    return this.props.filter;
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
    this.setState({ open: false, filter: null });
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

  handleVisibleChange = (ev) => {
    let state = {
      filter: ev.target.value,
      highlighted: null
    };

    if (this.props.suggest && ev.target.value.length <= 0) {
      state.open = false;
    } else {
      state.open = true;
    }

    this.setState(state);

    if (this.props.onFilter) {
      this.props.onFilter(ev.target.value);
    }
  }

  handleBlur = () => {
    if (!this._blockBlur) {
      this.setState({ open: false, filter: null });
    }
  }

  handleFocus = () => {
    if (this.blockFocus) {
      this.blockFocus = false;
    } else {
      this.setState({ open: true });
    }

    if (this.canFilter()) {
      this._input.setSelectionRange(0, this._input.value.length);
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
    if (typeof this.state.filter === 'string') {
      // if filter has a value, use that instead
      props.value = this.state.filter;
    }
    props.name = null;
    props.onBlur = this.handleBlur;
    props.onKeyDown = this.handleKeyDown;
    props.readOnly = this.props.readOnly || !this.canFilter();
    props.onChange = this.handleVisibleChange;

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

  handleCreate = (ev) => {
    this.setState({ open: false, filter: null });
    this.props.onCreate(ev, this);
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
        onCreate={ this.handleCreate }
        create={ this.props.onCreate }
        filterText={ this.state.filter }
      >
        { this.results() }
      </List>
    );

    return content;
  }

  results = () => {
    let children = this.props.children;

    if (this.state.filter && !this.props.onFilter) {
      let regex = new RegExp(escapeStringRegexp(this.state.filter), 'i');
      children = [];

      this.props.children.forEach((child) => {
        let text = "";

        if (typeof child.props.children === "string") {
          if (child.props.children.search(regex) > -1) {
            children.push(React.cloneElement(child, child.props, this.highlightMatches(child.props.children, this.state.filter)));
          }
        } else if (child.props.filter) {
          if (child.props.filter.search(regex) > -1) {
            children.push(child);
          }
        } else {
          throw Error("To automatically filter your Options need to either only render a string or pass a prop of 'filter'.");
        }
      });

      if (!children.length) {
        return (
          <li className={ 'carbon-dropdown__list-item carbon-dropdown__list-item--no-results' }>
            {
              I18n.t("dropdownlist.no_results", {
                defaultValue: "No results match \"%{term}\"",
                term: this.state.filter
              })
            }
          </li>
        );
      }
    }

    return children;
  }

  highlightMatches = (optionText, value) => {
    if (!value.length) { return optionText; }

    let beginning, end, middle, newValue, parsedOptionText, valIndex;

    parsedOptionText = optionText.toLowerCase();
    valIndex = parsedOptionText.indexOf(value);

    if (valIndex === -1) {
      return optionText;
    }

    beginning = optionText.substr(0, valIndex);
    middle = optionText.substr(valIndex, value.length);
    end = optionText.substr(valIndex + value.length, optionText.length);

    // find end of string recursively
    if (end.indexOf(value) !== -1) {
      end = this.highlightMatches(end, value);
    }

    // build JSX object
    newValue = [
      <span   key="beginning">{ beginning }</span>,
      <strong key="middle"><u>{ middle }</u></strong>,
      <span   key="end">{ end }</span>
    ];

    return newValue;
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
