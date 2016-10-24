import React from 'react';
import Button from 'components/button';
import Row from 'components/row';

class Config extends React.Component {
  disabledMarkup = () => {
    if (!this.props.disabled) { return null; }

    return (
      <div className="config__disabled">
        <Row>
          <span>You are editing the code, you can reset it back to the configured code:</span>
        </Row>
        <Row>
          <Button as="primary" onClick={ this.props.onReset }>Reset Custom Code</Button>
        </Row>
      </div>
    );
  }

  render() {
    return (
      <div className="config">
        { this.disabledMarkup() }
        { this.props.children }
      </div>
    );
  }
}

export default Config;
