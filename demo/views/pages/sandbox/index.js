import React from 'react';
import ImmutableHelper from 'utils/helpers/immutable';
import connect from 'utils/flux/connect';
import Store from 'utils/flux/store';
import Dispatcher from './../../../dispatcher';
import { DraggableContext } from 'components/drag-and-drop';
import { Table, TableRow, TableCell } from 'components/table';

const arr = [];
for (let i = 0; i < 500; i++) {
  arr.push({ id: i, name: `foo ${i}` });
}

class DNDStore extends Store {
  dndupdate = action => {
    let rows = this.data.get('rows');
    const sourceItem = rows.get(action.oldIndex);
    rows = rows.delete(action.oldIndex);
    this.data = this.data.set('rows', rows.insert(action.newIndex, sourceItem));
  }
}
const DNDStoreInstance = new DNDStore('dndstore', ImmutableHelper.parseJSON({ rows: arr }));

class DNDExample extends React.Component {
  render() {
    return(
      <DraggableContext onDrag={ updateDndData }>
        <Table tbody={false}>
          <tbody>
            { buildRows(this.props.rows) }
          </tbody>
        </Table>
      </DraggableContext>
    )
  }
};

function updateDndData(dragIndex, hoverIndex) {
  Dispatcher.dispatch({
    actionType: 'dndupdate',
    oldIndex: dragIndex,
    newIndex: hoverIndex
  });
}

function buildRows(rows) {
  if (!rows) return;
  return rows.map((row, index) => {
    return (
      <TableRow key={ row.get('id') } uniqueID={ row.get('id') } index={ index }>
        <TableCell>{ row.get('name') }</TableCell>
      </TableRow>
    );
  });
}

const ConnectedDNDExample = connect(DNDStoreInstance, (dndstate) => {
  return {
    rows: dndstate.get('rows')
  }
})(DNDExample);

export default ConnectedDNDExample;
