import React from 'react';
import Demo from './../../components/demo';
import ComponentCodeBuilder from './../../utils/component-code-builder';
import AppWrapper from 'components/app-wrapper';
import Textbox from 'components/textbox';

class Homepage extends React.Component {
  state = {
    label: "Sample Textbox"
  }

  updateProp = (name, ev) => {
    this.setState({ [name]: ev.target.value });
  }

  generateCode = () => {
    let code = new ComponentCodeBuilder('Textbox');
    code.addProp('label', this.state.label);
    code.addProp('labelHelp', this.state.labelHelp);
    return code;
  }

  generateConfig = () => {
    return (
      <div>
        <Textbox labelInline label="Label" value={ this.state.label } onChange={ this.updateProp.bind(this, 'label') } />
        <Textbox labelInline label="Label Help" value={ this.state.labelHelp } onChange={ this.updateProp.bind(this, 'labelHelp') } />
      </div>
    )
  }

  /**
   * @method render
   */
  render() {
    return (
      <AppWrapper>
        <div className="carbon-homepage">
          <Demo code={ this.generateCode() } config={ this.generateConfig() } />
        </div>
      </AppWrapper>
    );
  }
}

export default Homepage;
