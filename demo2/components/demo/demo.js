import React from 'react';
import ReactDOM from 'react-dom';
import Code from './../../components/code';
import Config from './../../components/config';
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

  errorMarkup = (msg) => {
    return <div className="demo__error">{ msg }</div>;
  }

  renderDemo = () => {
    let target = this.refs.demo;

    if (target) {
      try {
        let component = eval(transform(this.code(), { presets: ['es2015', 'react'] }).code);
        ReactDOM.render(component, target);
        setTimeout(() => {
          if (this.lastError) {
            this.handleError(this.lastError);
          } else {
            this.cachedCode = component;
          }
        }, 0);
      } catch(err) {
        this.handleError(err);
      }
    }
  }

  handleError = (err) => {
    let target = this.refs.demo;

    if (!this.state.suppressWarnings && this.lastError) {
      target.removeChild(target.children[0]);
      ReactDOM.render(this.errorMarkup(this.lastError), target);
      this.lastError = null;
    } else if (!this.state.suppressSyntaxErrors && err._babel) {
      ReactDOM.render(this.errorMarkup(err.message), target);
    } else {
      ReactDOM.render(this.cachedCode, target);
    }
  }

  toggleSyntaxErrors = () => {
    this.setState({ suppressSyntaxErrors: !this.state.suppressSyntaxErrors });
  }

  toggleWarnings = () => {
    this.setState({ suppressWarnings: !this.state.suppressWarnings });
  }

  resetCode = () => {
    this.setState({ customCode: null });
  }

  updateCode = (ev) => {
    this.setState({ customCode: ev.target.value });
  }

  code = () => {
    return this.state.customCode || this.props.code;
  }

  config = () => {
    if (!this.props.config) { return null; }

    return (
      <Config disabled={ this.state.customCode } onReset={ this.resetCode }>
        { this.props.config }
      </Config>
    );
  }

  /**
   * @method render
   */
  render() {
    return (
      <div className="demo">
        <div ref="demo" className="demo__preview" />

        <Row>
          <div className="demo__code">
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

          { this.config() }
        </Row>
      </div>
    );
  }
}

export default Demo;
