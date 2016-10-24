import React from 'react';
import Textarea from 'components/textarea';

class Code extends React.Component {
  render() {
    return (
      <div>
        <Textarea
          className="code"
          value={ this.props.value }
          expandable={ true }
          onChange={ this.props.onChange }
        />
      </div>
    );
  }
}

export default Code;
