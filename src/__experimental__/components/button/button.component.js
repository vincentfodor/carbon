import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './button.style';
import OptionsHelper from '../../../utils/helpers/options-helper';

const Button = ({
  variant,
  theme,
  size,
  disabled,
  children,
  role,
  ...props
}) => {
  return (
    <ButtonStyle
      type='button'
      variant={ variant }
      theme={ theme }
      size={ size }
      disabled={ disabled }
      role={ role }
      tabIndex='0'
      { ...props }
    >
      {children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(OptionsHelper.buttonVariants),
  theme: PropTypes.oneOf(OptionsHelper.themes),
  size: PropTypes.oneOf(OptionsHelper.sizesFull),
  disabled: PropTypes.bool,
  role: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  theme: 'generic',
  size: 'medium',
  variant: 'primary',
  role: 'button'
};

export default Button;
