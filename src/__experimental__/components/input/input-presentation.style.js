import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import baseTheme from '../../../style/themes/base';
import OptionsHelper from '../../../utils/helpers/options-helper';

const sizes = {
  small: {
    height: '32px',
    padding: '8px'
  },
  medium: {
    height: '40px',
    padding: '11px'
  },
  large: {
    height: '48px',
    padding: '13px'
  },
  classic: {
    height: '31px',
    padding: '6px'
  }
};

const fetchSizedValueFor = attr => ({ size, theme }) => {
  const sizeKey = theme.name === 'classic' ? 'classic' : size;
  return sizes[sizeKey][attr];
};

const InputPresentationStyle = styled.div`
  align-items: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.input.borderColor};
  box-sizing: border-box;
  cursor: text;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin: 0px;
  min-height: ${fetchSizedValueFor('height')};
  padding-left: ${fetchSizedValueFor('padding')};
  padding-right: ${fetchSizedValueFor('padding')};
  width: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.input.hover.borderColor};
  }

  ${({ disabled, theme }) => disabled && css`
    background: ${theme.input.disabled.backgroundColor};
    border-color: ${theme.input.disabled.borderColor} !important;
    cursor: not-allowed;
  `}
  ${({ readOnly }) => readOnly && css`
    background: transparent !important;
    border-color: transparent !important;
  `}
  ${({ hasFocus, theme }) => hasFocus && css`
    && { ${theme.input.active.border}; }
  `}
  ${renderValidationStyling('info')}
  ${renderValidationStyling('warning')}
  ${renderValidationStyling('error')}
`;

InputPresentationStyle.defaultProps = {
  size: 'medium',
  theme: baseTheme
};

InputPresentationStyle.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  hasFocus: PropTypes.bool,
  info: PropTypes.string,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(OptionsHelper.sizesRestricted),
  warning: PropTypes.string
};

// Calculates the width of the border for the validation. We use a combination
// of border and box-shadow so that when a thicker validation is applied it does
// not push the content of the input around, therefore we add the thickness of
// the box-shadow to the thickness of the border.
function calcValidationWidth(theme) {
  const { borderWidth } = theme.input.validation;
  const borderWidthInt = borderWidth.substring(0, borderWidth.length - 2);
  return `${borderWidthInt - 1}px`;
}

// Returns the styling for a validated input. This is common between the various
// validation states, and does some calculations, therefore it has been moved
// into its own function.
function renderValidationStyling(type) {
  return ({ theme, ...props }) => {
    const validation = props[type];
    if (!validation) return null;
    const width = calcValidationWidth(theme);
    return css`
      border-color: ${theme.colors[type]} !important;
      box-shadow: inset ${width} ${width} 0 ${theme.colors[type]},
                  inset -${width} -${width} 0 ${theme.colors[type]};
    `;
  };
}

export default InputPresentationStyle;
