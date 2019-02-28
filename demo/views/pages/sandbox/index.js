import React from 'react';
import { Option, SelectAsync } from '__experimental__/components/select-async';

class Sandbox extends React.Component {
  state = {
    val: []
  }

  render() {
    return (
      <SelectAsync
        label='Choose Item'
        endpoint='/countries'
        value={ this.state.val }
        onChange={ ev => this.setState({ val: [...ev.target.value] }) }
        formatResponse={ (response) => {
          return { ...response, data: { $items: response.data.$itemz } };
        } }
      >
        {
          items => items.map(item => <Option value={ item.foo } text={ item.foo } />)
        }
      </SelectAsync>
    );
  }
}

export default Sandbox;
