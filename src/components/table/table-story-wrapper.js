import { text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';
import countriesList from '../../../demo/data/countries';
import {
  Table,
  TableCell,
  TableHeader,
  TableRow
} from '.';

const store = new Store({
  sortOrder: 'asc',
  sortedColumn: 'name',
  currentPage: '1',
  children: undefined
});

const handleChange = (e, tableOptions) => {
  const { sortOrder, sortedColumn, currentPage } = tableOptions;

  store.set({ sortOrder, sortedColumn, currentPage });
  action('change')(e, tableOptions);
};

const handleToolbarAction = () => {
  action('toolbar action')();
};

const recordsForActivePage = (start, end) => {
  let records = countriesList;
  if (store.get('sortOrder') === 'desc' && store.get('sortedColumn').length) {
    records = records.reverse();
  }
  return records.slice(start, end).toJS();
};

const getActiveRows = (pageSize, totalRecords) => {
  const currentPage = store.get('currentPage');
  const candidateIndex = pageSize * currentPage;
  const endIndex = (candidateIndex <= totalRecords) ? candidateIndex : totalRecords;
  const remainder = endIndex % pageSize;
  const currentPageSize = (endIndex === totalRecords && remainder !== 0) ? (endIndex % pageSize) : pageSize;
  const startIndex = endIndex - currentPageSize;

  return recordsForActivePage(startIndex, endIndex);
};

const buildRows = ({
  pageSize, totalRecords
}) => {
  const rowsCountries = getActiveRows(pageSize, totalRecords);

  return (
    <>
      <TableRow
        key='header'
        as='header'
        uniqueID='header'
      >
        <TableHeader
          sortable
          name='name'
          scope='col'
        >
          Country
        </TableHeader>
        <TableHeader
          sortable
          scope='col'
          name='code'
          width='200'
        >
          Code
        </TableHeader>
      </TableRow>
      {rowsCountries.map((row) => {
        const cellContent = (<TableCell>{ row.name }</TableCell>);
        return (
          <TableRow
            key={ row.id }
            uniqueID={ row.id }
          >
            { cellContent }
            <TableCell>{ row.value }</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

const calculateCurrentPage = ({ totalRecords, pageSize, paginate }) => {
  const pages = totalRecords / pageSize;
  const maxValidPage = (pageSize && paginate) ? Math.max(Math.ceil(pages), 1) : '1';
  const isCurrentPageValid = store.get('currentPage') <= pages;

  return isCurrentPageValid ? store.get('currentPage') : maxValidPage;
};

const Wrapper = (props) => {
  const [pageSize, setPageSize] = useState('10');

  const tableProps = { ...props };
  tableProps.pageSize = tableProps.showPageSizeSelection ? pageSize : text('pageSize', '5');

  store.set({ currentPage: calculateCurrentPage(tableProps) });
  store.set({ sortOrder: tableProps.sortOrder });
  store.set({ sortedColumn: tableProps.sortColumn });

  return (
    <State
      store={ store }
      parseState={ state => ({ ...state, children: buildRows(tableProps) }) }
    >
      <Table
        path='/countries'
        actions={ {
          delete: {
            icon: 'bin',
            onClick: handleToolbarAction
          },
          settings: {
            icon: 'settings',
            onClick: handleToolbarAction
          }
        } }
        { ...tableProps }
        onChange={ handleChange }
        sortOrder={ store.sortOrder }
        sortedColumn={ store.sortedColumn }
        onPageSizeChange={ size => setPageSize(size) }
        isPassiveData={ props.isPassiveData }
        hightlightable={ props.hightlightable }
        selectable={ props.selectable }
      />
    </State>
  );
};

export default Wrapper;
