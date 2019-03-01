import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './button.component';

storiesOf('Experimental/Button', module)
  .add('default', () => {
    const children = text('children', 'Click!');
    const disabled = boolean('disabled', Button.defaultProps.disabled);

    return (
      <Button
        onClick={ action('clicked') }
        disabled={ disabled }
      >
        { children }
      </Button>
    );
  });
