import React from 'react';
import Demo from './../../components/demo';
import ComponentCodeBuilder from './../../utils/component-code-builder';

class Homepage extends React.Component {
  generateCode = () => {
    let code = new ComponentCodeBuilder('Textbox');
    code.addProp('foo', 'bar');
    return code;
  }

  /**
   * @method render
   */
  render() {
    return (
      <div className="carbon-homepage">
        <Demo code={ this.generateCode() } />
        <Demo code={ this.generateCode() } />
      </div>
    );
  }
}

export default Homepage;
