import * as React from 'react';
import Button from 'carbon/lib/components/button';
import Store from 'carbon/lib/utils/flux/store';
import AppStore from './../stores/app-store';
import { connect } from 'carbon/lib/utils/flux';

// export const OldSchool = () => {
//   return (
//     <div>
//       <Button>JS File Button</Button>
//     </div>
//   )
// }

class MyFile extends React.Component {
  render() {
    return (
      <div>
        <Button>JS File Button</Button>
      </div>
    );
  }
}

export default MyFile;
