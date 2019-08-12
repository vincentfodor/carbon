import React from 'react';
import { storiesOf } from '@storybook/react';
import { State } from '@sambego/storybook-state';
import {
  boolean,
  text,
  select,
  number
} from '@storybook/addon-knobs';
import TableWrapper from './table-story-wrapper';
import OptionsHelper from '../../utils/helpers/options-helper/options-helper';
import { Table } from '.';

const commonKnobs = () => {
  const paginate = boolean('paginate', false);
  const showPageSizeSelection = paginate && boolean('showPageSizeSelection', false);

  return {
    sortOrder: select('sortOrder', ['', 'asc', 'desc'], ''),
    sortColumn: select('sortColumn', ['', 'name', 'code'], ''),
    selectable: boolean('selectable', false),
    highlightable: boolean('highlightable', false),
    shrink: boolean('shrink', false),
    caption: text('caption', 'Country and Country Codes'),
    totalRecords: number('totalRecords', 50),
    paginate,
    showPageSizeSelection
  };
};

storiesOf('Table', module)
  .addParameters({
    info: {
      propTablesExclude: [State]
    }
  })
  .add('classic', () => {
    return (
      <TableWrapper isPassiveData={ boolean('passive', true) } />
    );
  });
