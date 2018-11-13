import React from 'react';

import ComponentShowcase from './component-showcase';
import GetStarted from './get-started';
import PageHeaderLarge from '../../common/page-header-large';
import SageLovesCarbon from './sage-loves-carbon';
import SellingPoints from './selling-points';
import Sectioniser from './sectioniser';
import Wrapper from './../../common/wrapper';

import Pod from 'components/pod';
import Select from 'components/select/select';
import Option from 'components/select/option';

class Home extends React.Component {
  /**
   * @method render
   */
  render() {
    return (
      <Pod>
        <Select label='A Select Component'>
          <Option value='1'>hello</Option>
          <Option value='2'>bye</Option>
          <Option value='3'>ok</Option>
          <Option value='4'>errrr</Option>
        </Select>
      </Pod>
    );
  }
}

export default Home;
