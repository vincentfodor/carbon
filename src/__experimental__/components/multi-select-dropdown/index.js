import React from 'react';
import Pill from '../../../components/pill';
import Textbox from '../textbox';
import ScrollableList from '../../../components/scrollable-list';

export default class MultiSelect extends React.Component {
  // static propTypes = {
  //   children: PropTypes.node
  // }

  state = {
    hasFocus: false,
    pills: []
  }

  createPillHandler = (text) => {
    // const arr = [...Array(tot).keys()].map((_, i) => <Pill key={ i.toString() } as='warning' fill='true' onDelete={ () => this.deletePillHandler(i) }>SAM</Pill>);
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
    const arr = pills.map((pill, index) => {
      return (
        <Pill
          key={ i.toString() }
          onDelete={ () => this.deletePillHandler(index) }
        >
          { pill.props.children }
        </Pill>
      );
    });
    this.setState({ pills: arr });
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
        >
          {[...Array(15).keys()].map(i => <div>{`Item: ${i}`}</div>)}
        </ScrollableList>
      </div>
    );
  }
}
