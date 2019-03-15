import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../components/icon';
import StyledButton, { StyledButtonChildren, StyledSubtext } from './button.style';

const Button = ({
  as,
  children,
  disabled,
  iconPosition,
  iconType,
  size,
  onClick,
  subtext
}) => (
  <StyledButton
    renderAs={ as }
    disabled={ disabled }
    role='button'
    size={ size }
    onClick={ onClick }
  >
    { iconType && iconPosition === 'before' && <Icon type={ iconType } /> }
    <StyledButtonChildren>
      <span
        data-element='main-text'
        key='children'
      >
        { children }
      </span>
      { size === 'large' && (
        <StyledSubtext>
          { subtext }
        </StyledSubtext>

      ) }
    </StyledButtonChildren>
    { iconType && iconPosition === 'after' && <Icon type={ iconType } /> }
  </StyledButton>
);

Button.propTypes = {
  as: PropTypes.string, // Customises the appearance can be set to 'primary', 'secondary', 'tertiary' or 'destructive'
  children: PropTypes.node.isRequired, // Required, what the button displays
  disabled: PropTypes.bool, // Apply disabled state to the button
  iconPosition: PropTypes.string, // Defines an Icon position within the button 'before' / 'after'
  iconType: PropTypes.string, // Defines an Icon type within the button
  size: PropTypes.string, // Assigns a size to the button
  onClick: PropTypes.func,
  subtext: PropTypes.string
};

Button.defaultProps = {
  as: 'secondary',
  size: 'medium',
  disabled: false
};

export default Button;
