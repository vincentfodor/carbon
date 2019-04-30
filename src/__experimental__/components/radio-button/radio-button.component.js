import React from 'react';
import PropTypes from 'prop-types';
import { InputPresentation } from '../input';
import FormField from '../form-field';

const RadioButton = ({ fieldHelpInline, ...props }) => (
  <FormField { ...props }>
    <InputPresentation { ...props }>
      <input type='radio' />
    </InputPresentation>
  </FormField>
);

RadioButton.propTypes = {
  /** Displays fieldHelp inline with the checkbox/radio button. */
  fieldHelpInline: PropTypes.bool
};

RadioButton.defaultProps = {
  fieldHelpInline: false
};

export default RadioButton;
