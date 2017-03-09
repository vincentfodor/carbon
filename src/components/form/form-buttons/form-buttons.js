import React from 'react';
import I18n from "i18n-js";

import { assign } from 'lodash';
import Button from './../../button';
import FormSave from './../form-save';

let FormButtons = props =>
  <div className='carbon-form-buttons'>
    { saveButton(props) }
    { cancelButton(props) }
  </div>
;

const cancelProps = (props) => {
  return assign({},
    props.cancelButtonProps, {
      onClick: props.cancelClick,
      type: 'button'
    }
  );
};

const cancelButton = (props) => {
  if (props.cancel) {
    return (
      <div className="carbon-form-buttons__cancel">
        <Button { ...cancelProps(props) }>
          { props.cancelText || I18n.t('actions.cancel', { defaultValue: 'Cancel' }) }
        </Button>
      </div>
    );
  }
};

const saveButton = (props) => {
  if (props.save) {
    return(<FormSave
      errors={ props.errors }
      saveButtonProps={ props.saveButtonProps }
      saveText={ props.saveText }
      saving={ props.saving }
      warnings={ props.warnings }
    />);
  }
};

export default FormButtons;
