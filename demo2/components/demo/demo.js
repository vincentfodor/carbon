import React from 'react';
import ReactDOM from 'react-dom';
import Code from './../../components/code';
import { transform } from 'babel-standalone';
import Textbox from 'components/textbox';
import Row from 'components/row';

class Demo extends React.Component {
  lastError = null

  componentDidMount() {
    this.renderDemo();
  }

  componentDidUpdate() {
    this.renderDemo();
    global.console.error = (msg) => {
      this.lastError = msg;
    }
  }

  state = {
    customCode: null,
    suppressSyntaxErrors: true,
    suppressWarnings: false
  }

  renderDemo = () => {
    let target = this.refs.demo;

    if (target) {
      try {
        let component = eval(transform(this.code(), { presets: ['es2015', 'react'] }).code);
        ReactDOM.render(component, target);
        this.cachedCode = component;
      } catch(err) {
        if (!this.state.suppressWarnings && this.lastError) {
          ReactDOM.render(<div style={{ color: "red" }}>{ this.lastError }</div>, target);
          this.lastError = null;
        } else if (!this.state.suppressSyntaxErrors && err._babel) {
          ReactDOM.render(<div style={{ color: "red" }}>{ err.message }</div>, target);
        } else {
          ReactDOM.render(this.cachedCode, target);
        }
      }
    }
  }

  toggleSyntaxErrors = () => {
    this.setState({ suppressSyntaxErrors: !this.state.suppressSyntaxErrors });
  }

  toggleWarnings = () => {
    this.setState({ suppressWarnings: !this.state.suppressWarnings });
  }

  updateCode = (ev) => {
    this.setState({ customCode: ev.target.value });
  }

  code = () => {
    return this.state.customCode || this.props.code;
  }

  /**
   * @method render
   */
  render() {
    return (
      <div className="demo">
        <Row>
          <div ref="demo" className="demo__preview" />

          <div>
            <div className="demo__suppress-errors">
              <Checkbox
                label="Suppress syntax errors"
                onChange={ this.toggleSyntaxErrors }
                value={ this.state.suppressSyntaxErrors }
                reverse
              />

              <Checkbox
                label="Suppress warnings"
                onChange={ this.toggleWarnings }
                value={ this.state.suppressWarnings }
                reverse
              />
            </div>

            <Code
              value={ this.code() }
              onChange={ this.updateCode }
            />
          </div>
        </Row>
      </div>
    );
  }
}

export default Demo;
