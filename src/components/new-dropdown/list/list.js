import React from 'react';

class List extends React.Component {
  constructor() {
    super();
  }

  state = {
    highlighted: null
  }

  static contextTypes = {
    dropdown: React.PropTypes.object
  }

  static childContextTypes = {
    list: React.PropTypes.object
  }

  getChildContext = () => {
    return {
      list: {
        highlighted: this.state.highlighted,
        handleMouseOverListItem: this.handleMouseOverListItem
      }
    };
  }

  handleMouseOverListItem = (value) => {
    this.setState({ highlighted: value });
  }

  handleMouseEnterList = () => {
    this.context.dropdown.blockBlur();
  }

  handleMouseLeaveList = () => {
    this.context.dropdown.unblockBlur();
  }

  decrementHighlight = () => {
    let nextVal = this.list.lastChild.getAttribute('value'),
        element = this.getHighlightedElement();

    if (element === this.list.firstChild) {
      this.updateScroll(this.list.lastChild);
      nextVal = this.list.lastChild.getAttribute('value');
    } else if (element && element.previousElementSibling) {
      this.updateScroll(element.previousElementSibling);
      nextVal = element.previousElementSibling.getAttribute('value');
    }

    this.setState({ highlighted: nextVal });
  }

  incrementHighlight = () => {
    let nextVal = this.list.firstChild.getAttribute('value'),
        element = this.getHighlightedElement();

    if (element === this.list.lastChild) {
      this.updateScroll(this.list.firstChild);
      nextVal = this.list.firstChild.getAttribute('value');
    } else if (element && element.nextElementSibling) {
      this.updateScroll(element.nextElementSibling);
      nextVal = element.nextElementSibling.getAttribute('value');
    }

    this.setState({ highlighted: nextVal });
  }

  updateScroll(nextItem) {
    let firstTop = this.list.firstChild.offsetTop,
        itemHeight = nextItem.offsetHeight,
        listHeight = this.list.offsetHeight;

    if (nextItem.offsetTop + itemHeight > listHeight) {
      this.list.scrollTop = nextItem.offsetTop - firstTop - (listHeight - itemHeight);
    } else if (nextItem.offsetTop === 1) {
      this.list.scrollTop = nextItem.offsetTop - firstTop;
    }
  }

  selectHighlighted = () => {
    let element = this.getHighlightedElement();
    this.context.dropdown.selectValue(element.getAttribute('value'), element.textContent);
  }

  getHighlightedElement = () => {
    return this.list.getElementsByClassName('carbon-dropdown__list-item--highlighted')[0];
  }

  createContent = () => {
    if (this.props.create) {
      let text = "Create ";

      if (this.props.filterText) {
        text += '"' + this.props.filterText + '"';
      } else {
        text += "New";
      }

      return (
        <a key="dropdown-action" className="carbon-dropdown__action" onClick={ this.props.onCreate }>{ text }</a>
      );
    }
  }

  render() {
    if (!this.props.open) { return null; }

    return (
      <div
        className='carbon-dropdown__list-block'
        onMouseLeave={ this.handleMouseLeaveList }
        onMouseEnter={ this.handleMouseEnterList }
      >
        <ul className="carbon-dropdown__list" ref={ (c) => this.list = c }>
          { this.props.children }
        </ul>

        { this.createContent() }
      </div>
    );
  }
}

export default List;
