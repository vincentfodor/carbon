import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  boolean, text, number, select
} from '@storybook/addon-knobs';
import { Store, State } from '@sambego/storybook-state';
import { dlsThemeSelector, classicThemeSelector } from '../../../../.storybook/theme-selectors';
import OptionsHelper from '../../../utils/helpers/options-helper';
import Checkbox from '.';
import { info, notes } from './documentation';
import getDocGenInfo from '../../../utils/helpers/docgen-info';

Checkbox.__docgenInfo = getDocGenInfo(
  require('./docgenInfo.json'),
  /checkbox\.component(?!spec)/
);

const formStore = new Store({
  checked: false
});

function makeStory(name, themeSelector) {
  const component = () => {
    return (
      <State store={ formStore }>
        <Checkbox
          onChange={ handleChange }
          { ...defaultKnobs() }
        />
      </State>
    );
  };

  const metadata = {
    themeSelector,
    info: {
      text: info,
      propTablesExclude: [State],
      excludedPropTypes: ['children']
    },
    notes: { markdown: notes }
  };

  return [name, component, metadata];
}

storiesOf('Experimental/Checkbox', module)
  .add(...makeStory('default', dlsThemeSelector))
  .add(...makeStory('classic', classicThemeSelector));

function handleChange(ev) {
  formStore.set({ checked: ev.target.checked });
}

function defaultKnobs() {
  return ({
    disabled: boolean('disabled', false),
    error: boolean('error', false),
    fieldHelp: text('fieldHelp', 'This text provides help for the input.'),
    fieldHelpInline: boolean('fieldHelpInline', false),
    reverse: boolean('reverse', false),
    label: text('label', 'Example Checkbox'),
    labelHelp: text('labelHelp', 'This text provides more information for the label.'),
    inputWidth: number('inputWidth', 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }),
    labelWidth: number('labelWidth', 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }),
    labelAlign: select(
      'labelAlign',
      OptionsHelper.alignBinary,
      OptionsHelper.alignBinary[0]
    ),
    size: select('size', OptionsHelper.sizesBinary, 'small'),
    value: text('value', 'test-value')
  });
}
