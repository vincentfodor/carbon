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
        onChange={ (ev) => {
          console.log('event', ev.target.value);
          this.setState({ val: ev.target.value });
        } }
        formatResponse={ response => ({ ...response, data: { $items: response.data.$itemz } }) }
      >
        {
          items => items.map(item => <Option>{ item.foo }</Option>)
        }
      </SelectAsync>
    );
  }
}

export default Sandbox;
