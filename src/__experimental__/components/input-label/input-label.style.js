import styled, { css } from 'styled-components';
import BaseTheme from '../../../style/themes/base';

const LabelStyle = styled.label`
  color: ${({ theme }) => theme.text.color};
  cursor: pointer;
  font-weight: bold;
  padding: 6px;
  width: 100%;
  margin-bottom: 8px;

  ${({
    size, labelInline, labelWidth, labelAlign, theme
  }) => labelInline && css`
    box-sizing: border-box;
    margin-bottom: 0;
    padding-left: 0;
    padding-right: ${theme.input[size].padding};
    padding-top: ${calcInlineLabelTop(theme.input[size].height)};
    text-align: ${labelAlign};
    width: ${labelWidth}%;
  `}
`;

LabelStyle.defaultProps = {
  theme: BaseTheme,
  labelWidth: 30,
  labelAlign: 'left'
};

function calcInlineLabelTop(inputPresentationHeight) {
  const height = inputPresentationHeight.substring(0, inputPresentationHeight.length - 2);
  const inputHeight = 17;
  return `${Math.ceil((height - inputHeight) / 2)}px`;
}

export default LabelStyle;
