import React from 'react';
import { connect } from 'utils/flux';
import Immutable from 'immutable';
import AppStore from './../../../stores/app';
import Checkbox from 'components/checkbox';
import AppActions from './../../../actions/app';
import Example from './../../../components/example';
import FormInputHelper from './../../../helpers/form-input-helper';

import { Dropdown, Option } from 'components/new-dropdown';

class DropdownDemo extends React.Component {

  /**
   * @method value
   */
  value = (key) => {
    return this.state.appStore.getIn(['dropdown', key]);
  }

  /**
   * @method action
   */
  get action() {
    return AppActions.appValueUpdated.bind(this, 'dropdown');
  }

  /**
   * @method demo
   */
  get demo() {
    let opts = Immutable.fromJS([
      { id: 1, name: "Option One" },
      { id: 2, name: "Option Two" },
      { id: 3, name: "Option Three" },
      { id: 4, name: "Option Three" },
      { id: 5, name: "Option Three" },
      { id: 6, name: "Option Three" },
      { id: 7, name: "Option Three" },
      { id: 8, name: "Option Three" },
      { id: 9, name: "Option Three" },
      { id: 10, name: "Option Three" },
      { id: 11, name: "Option Three" },
      { id: 12, name: "Option Three" },
      { id: 13, name: "Option Three" },
      { id: 14, name: "Option Three" },
      { id: 15, name: "Option Three" },
      { id: 16, name: "Option Three" },
      { id: 17, name: "Option Four" }
    ]);

    return (
      <div>
        <Dropdown filter={ this.value('filter') } onCreate={ this.value('create') ? () => {} : null }>
          {
            opts.map((opt, index) => {
              return <Option key={ index } value={ opt.get('id') }>{ opt.get('name') }</Option>;
            })
          }
        </Dropdown>
      </div>
    );
  }

  /**
   * @method code
   */
  get code() {
    let html = "import Dropdown from 'carbon/lib/components/dropdown';\n";
    html += "import Immutable from 'immutable';\n\n";

    html += "Immutable.fromJS([\n";
    html += "  { id: 1, name: 'Option One' },\n";
    html += "  { id: 2, name: 'Option Two' },\n";
    html += "  { id: 3, name: 'Option Three' },\n";
    html += "  { id: 4, name: 'Option Four' },\n";
    html += "]);\n\n";

    html += "<Dropdown\n";
    html += "  options={opts}";
    html = FormInputHelper.codeProps(this, html);
    html += "/>\n\n";

    return html;
  }

  /**
   * @method controls
   */
  get controls() {
    return (
      <div>
        <Checkbox value={ this.value('filter') || false } onChange={ this.action.bind(this, 'filter') } />
        <Checkbox value={ this.value('create') || false } onChange={ this.action.bind(this, 'create') } />
      </div>
    );
    // return FormInputHelper.controls(this, this.action);
  }

  /**
   * @method render
   */
  render() {
    return (
      <Example
        title="Dropdown"
        readme="components/dropdown"
        demo={ this.demo }
        code={ this.code }
        controls={ this.controls }
      />
    );
  }
}

export default connect(DropdownDemo, AppStore);
