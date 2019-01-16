import React from 'react';
import Pill from '../../../components/pill';
import Textbox from '../textbox';
import ScrollableList from '../../../components/scrollable-list';

export default class MultiSelect extends React.Component {
  // constructor() {
  //   super();
  // }

  state = {
    pills: ['sam', 'ed', 'andrew']
  }

  createPillHandler = (text) => {
    // const arr = [...Array(tot).keys()].map((_, i) => <Pill key={ i.toString() }
    // as='warning' fill='true' onDelete={ () => this.deletePillHandler(i) }>SAM</Pill>);
    // return arr;
    const { pills: oldPills } = this.state;
    // const index = oldPills.length - 1;
    const pills = [...oldPills, text];
    // pills.concat(
    //   <Pill key={ index.toString() } as='warning'
    //     fill='true'
    //     onDelete={ () => this.deletePillHandler() }
    //   > { txt }
    //   </Pill>
    // );
    this.setState({ pills });
  };

  renderPills = () => {
    return this.state.pills.map((text, i) => {
      return <Pill key={ i.toString() } onDelete={ () => this.deletePillHandler(i) }>{ text }</Pill>;
    });
  }

  deletePillHandler = (i) => {
    const { pills } = this.state;
    pills.splice(i, 1);
    const arr = pills.map((pill) => {
      return (
        pill
      );
    });
    this.setState({ pills: arr });
    this.renderPills();
  }

  render() {
    return (
      <div>
        <Textbox value=''>
          { this.renderPills() }
        </Textbox>
        <ScrollableList
          onLazyLoad={ () => console.log('lazy load now') }
          keyNavigation
          onSelect={ () => this.createPillHandler('ed') }
        >
          {[...Array(15).keys()].map(i => <div key={ i.toString() }>{`Item: ${i}`}</div>)}
        </ScrollableList>
      </div>
    );
  }
}
