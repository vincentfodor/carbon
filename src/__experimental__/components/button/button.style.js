import styled from 'styled-components';

const backgroundColors = {
  small: '#00815d',
  medium: '#0073c2',
  large: '#69418f',
  generic: '#008200',
  destructive: '#C7384F',
  disabled: '#e6ebed'
};

const colors = {
  default: '#fff',
  disabled: '#0000004d'
};

const getBackgroundColor = (theme) => {
  switch (theme) {
    case 'small':
      return backgroundColors.small;
    case 'medium':
      return backgroundColors.medium;
    case 'large':
      return backgroundColors.large;
    case 'destructive':
      return backgroundColors.destructive;
    case 'generic':
    default:
      return backgroundColors.generic;
  }
};

const ButtonStyle = styled.button`
    background-color: ${
  props => (props.disabled ? backgroundColors.disabled : getBackgroundColor(props.theme))
};
    color: ${props => (props.disabled ? colors.disabled : colors.default)};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export default ButtonStyle;
