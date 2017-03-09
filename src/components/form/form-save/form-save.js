import classNames from 'classnames';
import I18n from "i18n-js";
import React from 'react';
import { assign } from 'lodash';

import Button from './../../button';
import FormSummary from './../form-summary';

let FormSave = props =>
  <div className={ saveClasses(props) }>
    <FormSummary
      className='carbon-form-save__summary'
      errors={ props.errors }
      warnings={ props.warnings }
    />
    <Button { ...saveButtonProps(props) }>
      { saveText(props) }
    </Button>
  </div>
;

const saveClasses = (props) => {
  return classNames(
    "carbon-form-save", {
      "carbon-form-save--invalid": props.errors || props.warnings
    }
  );
};

const saveButtonProps = (props) => {
  return assign({}, props.saveButtonProps, { as: 'primary', disabled: props.saving });
};

const saveText = (props) => {
  return props.saveText || I18n.t('actions.save', { defaultValue: 'Save' });
};

export default FormSave;
