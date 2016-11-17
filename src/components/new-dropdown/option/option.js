import React from 'react';

class Option extends React.Component {
  static contextTypes = {
    dropdown: React.PropTypes.object,
    list: React.PropTypes.object
  }

  get classes() {
    let className = 'carbon-dropdown__list-item';
    let klass = className;

    // add highlighted class
    if (this.context.list.highlighted == this.props.value) {
      klass += ` ${className}--highlighted`;
    }

    // add selected class
    if (this.context.dropdown.selected == this.props.value) {
      klass += ` ${className}--selected`;
    }

    return klass;
  }

  handleSelect = (ev) => {
    this.context.dropdown.selectValue(this.props.value, ev.currentTarget.textContent);
  }

  render() {
    return (
      <li
        className={ this.classes }
        value={ this.props.value }
        onClick={ this.handleSelect }
        onMouseOver={ this.context.list.handleMouseOverListItem.bind(this, this.props.value) }
      >
        { this.props.children }
      </li>
    );
  }
}

export default Option;
