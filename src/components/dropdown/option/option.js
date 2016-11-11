import React from 'react';

class Option extends React.Component {
  static contextTypes = {
    dropdown: React.PropTypes.object
  }

  get classes() {
    let className = 'carbon-dropdown__list-item';
    let klass = className;

    // add highlighted class
    if (this.context.dropdown.highlighted == this.props.value) {
      klass += ` ${className}--highlighted`;
    }

    // add selected class
    if (this.context.dropdown.selected == this.props.value) {
      klass += ` ${className}--selected`;
    }

    return klass;
  }

  render() {
    return (
      <li
        className={ this.classes }
        value={ this.props.value }
        onClick={ this.context.dropdown.handleSelect.bind(this, this.props.value) }
        onMouseOver={ this.context.dropdown.handleMouseOverListItem.bind(this, this.props.value) }
      >
        { this.props.children }
      </li>
    );
  }
}

export default Option;
