import React from 'react';
import { storiesOf } from '@storybook/react';
import { State } from '@sambego/storybook-state';
import {
  boolean
} from '@storybook/addon-knobs';
import TableWrapper from './table-story-wrapper';

storiesOf('Table', module)
  .addParameters({
    info: {
      propTablesExclude: [State]
    }
  })
  .add('classic', () => {
    return (
      <TableWrapper
        isPassiveData={ boolean('passive', false) }
        highlightable={ boolean('hightlightable', false) }
        selectable={ boolean('selectable', false) }
      />
    );
  });
