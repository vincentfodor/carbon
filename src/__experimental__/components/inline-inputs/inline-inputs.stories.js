import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import InlineInputs from './inline-inputs.component';
import Textbox from '../textbox';
import Decimal from '../decimal';

storiesOf('Experimental/Inline Inputs', module)
  .addParameters({
    info: {
      propTablesExclude: [Textbox]
    }
  })
  .add('default', () => {
    const label = text('label', 'Inline Inputs');

    return (
      <InlineInputs
        label={ label }
      >
        <Textbox />
        <Decimal />
      </InlineInputs>
    );
  }, {
    knobs: { escapeHTML: false }
  });
