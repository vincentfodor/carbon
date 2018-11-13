import React from 'react';
import Events from '../../utils/helpers/events';

const isAnOption = option => option.props.hasOwnProperty('value');

const findPreviousIndex = (index, children) => {
  const childrenArray = React.Children.toArray(children);
  const total = React.Children.count(childrenArray) - 1;

  const decrementIndex = currentIndex => {
    let nextIndex = currentIndex - 1;
    if (nextIndex < 0) nextIndex = total;
    if (!isAnOption(childrenArray[nextIndex])) {
      nextIndex = decrementIndex(nextIndex, children);
    }
    return nextIndex;
  }
  return decrementIndex(index);
}

const findNextIndex = (index, children) => {
  const childrenArray = React.Children.toArray(children);
  const total = React.Children.count(childrenArray) - 1;

  const incrementIndex = currentIndex => {
    let nextIndex = currentIndex + 1;
    if (nextIndex > total) nextIndex = 0;
    if (!isAnOption(childrenArray[nextIndex])) {
      nextIndex = incrementIndex(nextIndex, children);
    }
    return nextIndex;
  }
  return incrementIndex(index);
}

class OptionList extends React.Component {
  state = {
    activeIndex: 0
  }

  componentWillMount() {
    document.addEventListener('keyup', this.handleKeyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyEvent);
  }

  handleKeyEvent = ev => {
    let findIndex;

    if (Events.isDownKey(ev)) {
      findIndex = findNextIndex;
    } else if (Events.isUpKey(ev)) {
      findIndex = findPreviousIndex;
    } else if (this.props.onSelect && Events.isEnterKeyup(ev)) {
      const childrenArray = React.Children.toArray(this.props.children);
      const { value, visibleValue } = childrenArray[this.state.activeIndex].props;
      this.props.onSelect({ target: { value, visibleValue } });
    }

    if (findIndex) {
      const index = findIndex(this.state.activeIndex, this.props.children);
      this.updateIndex(index);
    }
  }

  updateIndex(index) {
    this.setState({ activeIndex: index });
  }

  renderOption = (option, index) => {
    if (isAnOption(option)) {
      return React.cloneElement(option, {
        hasFocus: index === this.state.activeIndex,
        onMouseOver: () => this.updateIndex(index),
        onClick: this.props.onSelect
      });
    }

    return option;
  }

  render() {
    return React.Children.map(
      this.props.children,
      this.renderOption
    );
  }
};

export default OptionList;
