import React from 'react';
import Textbox from '../textbox';
import OptionList from './option-list';
import tagComponent from '../../utils/helpers/tags';

class Select extends React.Component {
  state = {
    open: false
  }

  handleFocus = ev => {
    if (this.props.onFocus) this.props.onFocus(ev);
    this.setState({ open: true })
  };

  handleBlur = ev => {
    if (this.props.onBlur) this.props.onBlur(ev);
    this.setState({ open: false })
  }

  render() {
    return (
      <div { ...tagComponent('select', this.props) }>
        <Textbox
          { ...this.props }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
        />

        { this.state.open &&
            <OptionList onSelect={ ev => { alert(ev.target.value) } }>
              { this.props.children }
              <div>foo</div>
            </OptionList>
        }
      </div>
    );
  }
};

export default Select;
