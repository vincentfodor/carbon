import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import RadioButton from './radio-button.component';
import { notes, info } from './documentation';

storiesOf('Experimental/Radio Button', module).add(
  'default',
  () => {
    const label = text('label', 'Label');
    const labelInline = boolean('labelInline', false);

    return [
      <RadioButton
        label={ label }
        labelInline={ labelInline }
        name='radio-buttons-example'
      />,
      <RadioButton
        label={ label }
        labelInline={ labelInline }
        name='radio-buttons-example'
      />
    ];
  },
  {
    notes: { markdown: notes },
    info: { text: info }
  }
);
