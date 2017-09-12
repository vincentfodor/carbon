// React
import React from 'react';

// App Components
import ComponentCodeBuilder from './../../../../utils/component-code-builder';
import PageContentArea from './../../../common/page-content-area';
import SimpleHeading from './../../../../components/simple-heading';
import Code from './../../../../components/code';
import Fields from './fields';

/**
 * Simple, site wrapped content area that loads a heading
 *
 * @param {object} props
 * @param {String} props.title
 * @return {PageContentArea}
 */
class ComponentPreview extends React.Component {
  componentDidMount() {
    this.renderDemo();
  }

  componentDidUpdate() {
    this.renderDemo();
  }

  render() {
    return (
      <PageContentArea
        title='Preview'
        link={ `https://github.com/Sage/carbon/tree/master/src/components/${this.props.definition.get('key')}` }
      >
        <div className= { `demo-component-preview demo-component-preview--${this.props.definition.get('key')}` }>
          <div className='demo-component-preview__component-wrapper'>
            <div id="carbon-demo" />
            <div ref='demo' />
          </div>

          <SimpleHeading title="Code"></SimpleHeading>

          <div className='demo-component-preview__interaction'>
            <Fields name={ this.props.name } definition={ this.props.definition } />
            { this.renderCode() }
          </div>
        </div>
      </PageContentArea>
    );
  }

  buildRows = () => {
    let rows = [];

    dndData.forEach((row, index) => {
      rows.push(
        <TableRow key={ row.get('id') } uniqueID={ row.get('id') } index={ index }>
          <TableCell>{ row.get('name') }</TableCell>
        </TableRow>
      );
    });

    return rows;
  }

  renderCode = () => {
    var code = this.compileCode();
    return <Code>{ code.toString() }</Code>
  }

  renderDemo = () => {
    ReactDOM.render(
      <DraggableContext
        onDrag={ updateDndData }
      >
        <div>
          <Table tbody={false}>
            <thead>
              <TableRow as="header">
                <TableHeader />
                <TableHeader>Country</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              { this.buildRows() }
            </tbody>
          </Table>
        </div>
      </DraggableContext>,
      this.refs.demo
    );
  }


  compileCode = (withEvents) => {
    return new ComponentCodeBuilder(this.props.definition, withEvents);
  }
};

export default ComponentPreview;
