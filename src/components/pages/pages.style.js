import styled from 'styled-components';
import { slideAnimation, fadeAnimation } from './pages.config';
import StyledHeadingIcon from '../heading/heading.style';

const PagesContent = styled.div`
  overflow: hidden;
  position: relative;

  ${StyledHeadingIcon} {
    margin-top: -9px;
  }
`;

const PagesWrapperStyle = styled.div`
  ${slideAnimation};
  ${fadeAnimation};
`;

export {
  PagesWrapperStyle,
  PagesContent
};