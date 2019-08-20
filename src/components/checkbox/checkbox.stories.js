import { storiesOf } from '@storybook/react';
import {
  boolean, text, number, select
} from '@storybook/addon-knobs';
import { dlsThemeSelector, classicThemeSelector } from '../../../.storybook/theme-selectors';
import { makeStory } from '../../../.storybook/utils';
import OptionsHelper from '../../utils/helpers/options-helper';
import Checkbox from './checkbox.js';
import { notes, info } from './documentation';
import getDocGenInfo from '../../utils/helpers/docgen-info';

Checkbox.__docgenInfo = getDocGenInfo(
  require('./docgenInfo.json'),
  /checkbox(?!spec)/
);

function knobsFactory() {
  const labelInline = boolean('labelInline', false);
  return {
    reverse: boolean('reverse', Checkbox.defaultProps.reverse),
    fieldHelpInline: boolean('fieldHelpInline', false),
    label: text('label', 'Example Checkbox'),
    labelHelp: text('labelHelp', 'This text provides more information for the label.'),
    inputWidth: number('inputWidth', 0, {
      range: true,
      min: 0,
      max: 50,
      step: 1
    }),
    fieldHelp: text('fieldHelp', 'This text provides help for the input.'),
    labelInline,
    labelWidth: labelInline ? number('labelWidth', 0, {
      range: true,
      min: 0,
      max: 50,
      step: 1
    }) : undefined,
    labelAlign: labelInline ? select(
      'labelAlign',
      OptionsHelper.alignBinary,
      OptionsHelper.alignBinary[0]
    ) : undefined
  };
}

const metadata = {
  info: { text: info },
  notes: { markdown: notes }
};

storiesOf('Checkbox', module)
  .add(...makeStory(
    'default',         // storyName
    dlsThemeSelector,  // themeSelector
    metadata,          // customMetadata
    Checkbox,          // component
    knobsFactory       // knobsFactory
  ))
  .add(...makeStory(
    'classic',             // storyName
    classicThemeSelector,  // themeSelector
    metadata,              // customMetadata
    Checkbox,              // component
    knobsFactory           // knobsFactory
  ));
