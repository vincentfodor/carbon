import * as React from 'react';
import Button from 'carbon/lib/components/button';
import AppStore from './../stores/app-store';
import { connect } from 'carbon/lib/utils/flux';

class MyFile extends React.Component<any, any> {

  render() {
    console.log('foo');
    return (
      <div>
        <Button>TS File Button</Button>
      </div>
    );
  }
}

export default connect(MyFile, AppStore);
